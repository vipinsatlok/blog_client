import ReactMarkdown from "react-markdown";
import { Inter } from "next/font/google";
import { getSingleMarlDownDataWithId, getAllMarkDownData } from "@/lib/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await getAllMarkDownData();
  if (!data) return <div>Not Found</div>;

  console.log({ data });
  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <div>Blogs</div>
            <div>{item.name}</div>
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </>
        );
      })}
    </div>
  );
}
