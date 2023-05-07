import { IBlog } from "@/types/blog";
import BlogCard from "./BlogCard";

interface IProps {
  title: string;
  blogs: IBlog[];
  titleLength?: number;
  discriptionLength?: number;
}

export default function BlogsCard({
  blogs,
  titleLength,
  discriptionLength,
  title,
}: IProps) {
  return (
    <div className="px-20 mt-10">
      <div className="p-10 w-full bg-slate-50 rounded-xl dark:bg-slate-800 gap-10 flex flex-col">
        <h2 className="text-4xl text-slate-800 dark:text-slate-100 font-semibold">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {blogs.map((item) => (
            <BlogCard
              key={item.slug}
              titleLength={titleLength}
              discriptionLength={discriptionLength}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
