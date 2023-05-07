import Pagination from "@/components/pagination";
import { getBlogs, getPages } from "@/lib/google/getGoogleSheet";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  searchParams: {
    page: number;
    category: string;
  };
}

export default async function Home({ searchParams }: IProps) {
  //
  const { category, page } = searchParams;
  const { totalPages } = await getPages(category, page);
  const blogs = await getBlogs(category);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">All Posts</h2>
      {blogs.map((item) => (
        <Link
          className="flex items-start gap-5"
          key={item.slug}
          href={`/blogs/${item.slug}`}
        >
          <Image
            className="rounded-sm"
            src={`https://drive.google.com/uc?id=${item.image}&export=download`}
            alt={item.title}
            width={200}
            height={200}
          />
          <div>
            <h3 className="text-xl font-semibold">
              {item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title}
            </h3>
            <p className="mt-1 text-xs">
              {item.discription.length > 150
                ? item.discription.slice(0, 150) + " more..."
                : item.discription}
            </p>
          </div>
        </Link>
      ))}
      <Pagination
        category={category}
        totalPage={totalPages}
        currentPage={+page}
      />
    </div>
  );
}
