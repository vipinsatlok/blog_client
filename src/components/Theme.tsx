"use client";

import useTheme from "../hooks/useTheme";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

export default function Theme() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="relative">
      <button onClick={toggleTheme}>
        {theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
}
