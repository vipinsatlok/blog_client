import React, { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, type, ...props }: IProps) {
  return (
    <button
      className="flex gap-1 bg-slate-700 rounded-md py-1 px-4"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
