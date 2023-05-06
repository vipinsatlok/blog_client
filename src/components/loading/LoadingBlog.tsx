export default function LoadingBlog() {
  return (
    <div className="w-full flex gap-4 flex-col justify-center">
      <div className="block bg-gray-500 w-full animate-pulse h-[200px] rounded-md"></div>
      <div className="block bg-gray-500 w-full animate-pulse h-[20px] rounded-md"></div>
      <div className="block bg-gray-500 w-full animate-pulse h-[30px] rounded-md"></div>
      <div className="block bg-gray-500 w-full animate-pulse h-[100px] rounded-md"></div>
    </div>
  );
}
