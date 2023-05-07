import { HTMLProps } from "react";

interface IProps extends HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode;
  varient?: "small" | "big" | "bigger";
}

export default function Paragraph({
  children,
  varient = "small",
  ...props
}: IProps) {
  const classNames = {
    small: "text-sm",
    big: "text-base font-semibold",
    bigger: "text-3xl font-semibold",
  };

  return (
    <p className={"text-slate-500" + classNames[varient]} {...props}>
      {children}
    </p>
  );
}
