import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/categories"}>Categories</Link>
      <Link href={"/blogs"}>Blogs</Link>
    </div>
  );
}
