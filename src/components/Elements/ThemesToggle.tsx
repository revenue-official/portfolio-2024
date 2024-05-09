"use client";

import { Sun, Moon } from "@/components/Icon/DefaultIcons";
import { useEffect, useState, ReactNode, useContext } from "react";
import { useTheme } from "next-themes";
import SidebarContext from "@/contexts/SidebarProvider";

interface SideLinkProps {
    className?: string;
    children?: ReactNode;
}

export default function ThemesToggle({
    className = "",
    children,
}: SideLinkProps) {
    const { resolvedTheme, setTheme } = useTheme();
    const [icon, setIcon] = useState(<Sun className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />);
    const [title, setTitle] = useState("Light Mode");

    const getContext = useContext(SidebarContext);

    useEffect(() => {
        if (resolvedTheme === "dark") {
            setTheme("dark");
            setIcon(<Moon className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />);
            setTitle("Dark Mode");
        } else {
            setTheme("light");
            setIcon(<Sun className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />);
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
                {
                    getContext && (
                        <span className="hidden duration-200 text-nowrap group-hover:translate-x-1 md:inline">
                            {title}
                        </span>
                    )
                }
            </div>
            {
                getContext && (
                    <div className="relative items-center hidden w-12 h-5 px-1 overflow-hidden rounded-full md:flex bg-neutral-400 dark:bg-neutral-700">
                        <div className={`relative top-0 left-0 w-4 h-4 rounded-full duration-300 shadow-sm ${title === "Dark Mode" ? "left-4 bg-gradient-to-r from-indigo-500 to-purple-500" : "left-0 bg-neutral-100"}`} />
                    </div>
                )
            }
        </button>
    );
}
