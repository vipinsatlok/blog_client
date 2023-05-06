import { getBlog } from "@/lib/google/getGoogleSheet";
import { getMarkDownFile } from "@/lib/google/getMarkDown";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }) {
  const slug = params.blogId;
  const data = await getBlog(slug);
  return {
    title: `Blog : ${data.title}`,
  };
}

export default async function Blog({ params }) {
  const slug = params.blogId;
  const data = await getBlog(slug);
  const content = (await getMarkDownFile(data?.mdFileId)) as string;
  return (
    <div className="blog">
      <h1>{data.title}</h1>
      <p>{data.discription}</p>
      <div>{data?.discription}</div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
