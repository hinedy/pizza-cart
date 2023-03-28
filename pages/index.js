import { data } from "@/data";
import Product from "@/components/Product";
import Cart from "@/components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "@/features/cart/cartSlice";
import { useEffect } from "react";

export default function Home() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [cartItems, dispatch]);
  return (
    <div className="px-10 py-10 flex justify-center">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 lg:col-span-2 xl:grid-cols-4 xl:col-span-3 xl:gap-x-8">
          {data.map((pizza, index) => (
            <Product key={index} pizza={pizza} cartItems={cartItems} />
          ))}
        </div>
        <div className="col-span-1 ">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}
