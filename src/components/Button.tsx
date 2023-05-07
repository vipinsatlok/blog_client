import React, { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, type, ...props }: IProps) {
  return (
    <button
      className="flex gap-1 bg-black dark:bg-slate-700 rounded-md text-slate-200 hover:text-slate-50 py-2 px-4"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
