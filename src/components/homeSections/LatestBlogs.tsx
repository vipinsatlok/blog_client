import { IBlog } from "@/types/blog";
import BlogsCard from "../BlogsCard";
import { getRandomBlogs } from "@/lib/google/getGoogleSheet";

export default function LatestBlogs({ blogs }: { blogs: IBlog[] }) {
  const randomBlogs = getRandomBlogs(blogs, 1);
  return <BlogsCard title="Latest Articles" blogs={randomBlogs} />;
}
