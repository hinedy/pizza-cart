import Image from "next/image";
import Link from "next/link";
import AmountControls from "./AmountControls";
import { useDispatch } from "react-redux";
import { addItem } from "@/features/cart/cartSlice";
import Button from "@mui/material/Button";

export default function Product(props) {
  const { pizza, cartItems } = props;
  const inCart = cartItems.find((item) => pizza.id === item.id);
  const dispatch = useDispatch();

  const handleAddToCartClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Link
      href="#"
      className="group flex flex-col justify-between drop-shadow-sm "
    >
      <div className="relative aspect-w-1 aspect-h-1 w-full h-[200px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
        <Image
          src={pizza.img}
          placeholder="empty"
          fill
          style={{ objectFit: "cover" }}
          alt="pizza preview image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        ></Image>
      </div>
      <h3 className="mt-4 text-lg text-black-700">{pizza.name}</h3>
      <p className="text-xs text-gray-600">{pizza.description}</p>
      <div className="flex justify-between my-3">
        <div>
          <p className="mt-1 text-lg font-medium text-gray-900">
            $ {pizza.price}
          </p>
        </div>
        {inCart && inCart.amount >= 1 ? (
          <AmountControls {...inCart}></AmountControls>
        ) : (
          <Button
            onClick={(e) => {
              handleAddToCartClick(e);
              dispatch(addItem({ ...pizza, amount: 1 }));
            }}
            variant="outlined"
            size="small"
            color="primary"
          >
            Add to Cart
          </Button>
        )}
      </div>
    </Link>
  );
}
