"use client";

import { Sun, Moon } from "@/components/Icon/DefaultIcon";
import { useEffect, useState, ReactNode } from "react";
import { useTheme } from "next-themes";

interface SideLinkProps {
    className?: string;
    children?: ReactNode;
}

export default function ThemesToggle({
    className = "",
    children,
}: SideLinkProps) {
    const { resolvedTheme, setTheme } = useTheme();
    const [icon, setIcon] = useState(<Sun className="w-5 h-5 ml-2 mr-4" />);
    const [title, setTitle] = useState("Light Mode");

    useEffect(() => {
        if (resolvedTheme === "dark") {
            setTheme("dark");
            setIcon(<Moon className="w-5 h-5 ml-2 mr-4" />);
            setTitle("Dark Mode");
        } else {
            setTheme("light");
            setIcon(<Sun className="w-5 h-5 ml-2 mr-4" />);
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
            className={`inline-flex items-center px-2 py-2 text-md font-medium transition duration-200 ease-in-out focus:outline-none text-neutral-500 hover:bg-lightsilver dark:text-neutral-400 dark:hover:bg-raven rounded-md ${className}`}
            onClick={toggleTheme}
        >
            {children}
            <div className="flex w-full">
                {icon}
                <span className="duration-200 text-nowrap group-hover:translate-x-1">
                    {title}
                </span>
            </div>
            <div className="relative flex items-center w-12 h-5 px-1 overflow-hidden rounded-full bg-neutral-400 dark:bg-neutral-700">
                <div className={`relative top-0 left-0 w-4 h-4 rounded-full duration-300 shadow-sm ${title === "Dark Mode" ? "left-4 bg-gradient-to-r from-indigo-400 to-purple-400" : "left-0 bg-neutral-100"}`} />
            </div>
        </button>
    );
}
