import Link from "next/link";
import Theme from "../Theme";

export default function Header() {
  return (
    <div className="h-full items-center flex py-1">
      <div className="flex-1"></div>
      <div className="flex-1 justify-end gap-5 flex">
        <nav>
          <ul className="flex text-base gap-5 font-semibold">
            <ThemeList href="/" title="Home" />
            <ThemeList href="/blogs" title="Blogs" />
            <ThemeList href="/categories" title="Categories" />
            <ThemeList href="/contact" title="Contact" />
            <ThemeList href="/about" title="About" />
          </ul>
        </nav>
        <Theme />
      </div>
    </div>
  );
}

interface IListProps {
  title: string;
  href: string;
}

const ThemeList = ({ title, href }: IListProps) => {
  return (
    <li className="hover:text-slate-950 hover:dark:text-slate-50">
      <Link href={href}>{title}</Link>
    </li>
  );
};
