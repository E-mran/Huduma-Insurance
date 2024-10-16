import Image from "next/image";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";

export function updateTheme() {
  let currentTheme = localStorage.getItem("theme");
  //  ||
  // (window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? "dark"
  //   : "light");

  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (currentTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.remove("dark");
    currentTheme = "light";
  }
  return currentTheme;
}

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggleButton = ({ className }: ThemeToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(updateTheme() === "dark");
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      className="text-cgreen-200 md:text-cblack-100 dark:text-white bg-transparent"
    >
      {isDarkMode ? (
        <SunIcon className={className ? className : ""} />
      ) : (
        <MoonIcon className={className ? className : ""} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
