import { IBlog } from "@/types/blog";
import BlogsCard from "../BlogsCard";

export default function TrendingBlogs({ blogs }: { blogs: IBlog[] }) {
  return <BlogsCard title="Trending Articles" blogs={blogs} />;
}
