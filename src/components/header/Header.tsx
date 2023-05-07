import Link from "next/link";
import Theme from "../Theme";

export default function Header() {
  return (
    <div className="h-full items-center flex py-1">
      <div className="flex-1"></div>
      <div className="flex-1 justify-end gap-5 flex">
        <nav>
          <ul className="flex text-base gap-5 font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
          </ul>
        </nav>
        <Theme />
      </div>
    </div>
  );
}
