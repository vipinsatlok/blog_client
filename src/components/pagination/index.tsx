import Link from "next/link";

interface IProps {
  totalPage: number;
  currentPage: number;
  category: string;
}

export default function Pagination({
  totalPage,
  currentPage,
  category,
}: IProps) {
  const params = { category, page: currentPage };

  return (
    <div className="flex gap-2 text-md font-semibold">
      {totalPage !== currentPage ? (
        <Link
          href={{
            pathname: "/blogs",
            query: { ...params, page: currentPage + 1 },
          }}
        >
          Next
        </Link>
      ) : null}

      {totalPage == currentPage ? (
        <Link
          href={{
            pathname: "/blogs",
            query: { ...params, page: currentPage + 1 },
          }}
        >
          Prev
        </Link>
      ) : null}
    </div>
  );
}
