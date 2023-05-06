"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "../Button";
import { useEffect, useState } from "react";
import { getPages } from "@/lib/google/getGoogleSheet";

export default function Pagination() {
  const [totalPages, setTotalPages] = useState(1);

  const page = useSearchParams().get("page") || 1;
  const category = useSearchParams().get("category");

  useEffect(() => {
    const totalData = async () => {
      const { totalPages } = await getPages(category as string, page as number);
      setTotalPages(totalPages);
    };
    totalData();
  }, [page, category]);

  console.log(totalPages);

  return (
    <div className="flex gap-2 text-md font-semibold">
      <Button>Next</Button>
      <Button>Prev</Button>
    </div>
  );
}
