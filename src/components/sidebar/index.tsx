import { ICategory } from "@/types/blog";
import Link from "next/link";

export default function Sidebar({ data }: { data: ICategory[] }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="text-xl font-semibold">Choose Categories</h2>
      <div className="flex w-full flex-col gap-2">
        {data.map((item) => {
          return (
            <Link
              className="w-full cursor-pointer bg-slate-700 p-2 text-gray-200 font-medium px-4 rounded-md capitalize text-md"
              href={{ pathname: "/blogs", query: { category: item.name } }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
