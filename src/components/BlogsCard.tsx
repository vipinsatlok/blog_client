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
    <div className="my-40 px-20 w-full gap-10 flex flex-col">
      <h2 className="text-4xl text-slate-100 font-semibold">{title}</h2>

      <div className="flex gap-5 w-full justify-center">
        <div className="flex flex-1 flex-col gap-5">
          {blogs.map((item) => (
            <BlogCard
              key={item.slug}
              titleLength={titleLength}
              discriptionLength={discriptionLength}
              {...item}
            />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-5">
          {blogs.map((item) => (
            <BlogCard
              key={item.slug}
              titleLength={50}
              discriptionLength={80}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
