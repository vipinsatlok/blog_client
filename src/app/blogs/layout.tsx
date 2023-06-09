import Sidebar from "@/components/sidebar";
import { getCategories } from "@/lib/google/getGoogleSheet";
import { ICategory } from "@/types/blog";

export const metadata = {
  title: "Blogs",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = (await getCategories()) as ICategory[];

  return (
    <div className="flex gap-8 h-full">
      <div className="w-[250px] hidden md:flex">
        <Sidebar data={data} />
      </div>
      <div className="flex-1">
        <div>{children}</div>
      </div>
      <div className="flex w-[250px] bg-gray-600 rounded-md animate-pulse h-full">ad</div>
    </div>
  );
}
