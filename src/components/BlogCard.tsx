import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps extends IBlog {
  titleLength?: number;
  discriptionLength?: number;
}

export default function BlogCard({
  slug,
  title,
  discription,
  image,
  titleLength = 50,
  discriptionLength = 150,
}: IProps) {
  return (
    <Link className="flex items-start gap-5" key={slug} href={`/blogs/${slug}`}>
      <Image
        className="rounded-sm"
        src={`https://drive.google.com/uc?id=${image}&export=download`}
        alt={title}
        width={200}
        height={200}
      />
      <div>
        <h3 className="text-xl font-semibold">
          {title.length > titleLength
            ? title.slice(0, titleLength) + "..."
            : title}
        </h3>
        <p className="mt-1 text-xs">
          {discription.length > discriptionLength
            ? discription.slice(0, discriptionLength) + " more..."
            : discription}
        </p>
      </div>
    </Link>
  );
}
