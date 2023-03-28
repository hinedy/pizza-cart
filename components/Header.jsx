import Link from "next/link";
function Header() {
  return (
    <header className="flex justify-center align-middle py-4 bg-black">
      <ul className="flex justify-center gap-4">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
