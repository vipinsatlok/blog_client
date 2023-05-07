import Button from "../Button";

export default function Hero() {
  return (
    <div className="flex flex-col gap-5 w-full mt-20 items-center">
      <div className="flex items-center gap-1 flex-col">
        <h1 className="text-6xl text-slate-950 dark:text-slate-50 uppercase  font-bold">
          upgrade your knowledge
        </h1>
        <h2 className="text-4xl text-slate-700 dark:text-slate-300 capitalize font-semibold">
          to read awesome articles
        </h2>
      </div>
      <div className="flex gap-4">
        <Button>Read Now !</Button>
      </div>
    </div>
  );
}
