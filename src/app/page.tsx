import { getBlogs } from "@/lib/google/getGoogleSheet";
import Link from "next/link";

export default async function Home() {
  const data = await getBlogs();

  return (
    <div>
      {data.map((item) => (
        <div key={item.slug}>
          <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
          <br></br>
        </div>
      ))}
      <div>Home</div>
    </div>
  );
}
