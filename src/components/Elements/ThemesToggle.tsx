"use client";

import { Sun, Moon } from "@/components/Icon/DefaultIcons";
import { useEffect, useState, ReactNode } from "react";
import { useTheme } from "next-themes";
import useSidebarStore from "@/stores/useSidebarOpened";

interface SideLinkProps {
  className?: string;
  children?: ReactNode;
}

export default function ThemesToggle({
  className = "",
  children,
}: SideLinkProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [icon, setIcon] = useState(
    <Sun className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />,
  );
  const [title, setTitle] = useState("Light Mode");

  const getContext = useSidebarStore();

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setTheme("dark");
      setIcon(
        <Moon className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />,
      );
      setTitle("Dark Mode");
    } else {
      setTheme("light");
      setIcon(
        <Sun className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />,
      );
      setTitle("Light Mode");
    }
  }, [resolvedTheme, setTheme]);

  // DarkMode function
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className={`text-md hover:bg-lightsilver dark:hover:bg-raven inline-flex items-center rounded-md px-2 py-2 font-medium text-neutral-500 transition duration-200 ease-in-out focus:outline-none dark:text-neutral-400 ${className}`}
      onClick={toggleTheme}
    >
      {children}
      <div className="flex w-full">
        {icon}
        {getContext && (
          <span className="hidden text-nowrap duration-200 group-hover:translate-x-1 md:inline">
            {title}
          </span>
        )}
      </div>
      {getContext && (
        <div className="relative hidden h-5 w-12 items-center overflow-hidden rounded-full bg-neutral-400 px-1 dark:bg-neutral-700 md:flex">
          <div
            className={`relative left-0 top-0 h-4 w-4 rounded-full shadow-sm duration-300 ${title === "Dark Mode" ? "left-4 bg-indigo-500" : "left-0 bg-neutral-100"}`}
          />
        </div>
      )}
    </button>
  );
}
