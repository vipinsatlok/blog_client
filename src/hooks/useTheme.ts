import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("cal");
    const newTheme = theme === "light" ? "dark" : "light";
    const removeTheme = theme !== "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(removeTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
