import Hero from "@/components/homeSections/Hero";
import LatestBlogs from "@/components/homeSections/LatestBlogs";
import TrendingBlogs from "@/components/homeSections/TrendingBlogs";
import { getBlog, getBlogs } from "@/lib/google/getGoogleSheet";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="w-full">
      <Hero />
      <TrendingBlogs blogs={blogs} />
      <LatestBlogs blogs={blogs} />
    </div>
  );
}
