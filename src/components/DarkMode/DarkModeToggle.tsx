"use client";

import { Sun, Moon } from "@/components/Icon/DefaultIcon";
import { useState, useEffect, ReactNode } from "react";

interface SideLinkProps {
	className?: string;
	children?: ReactNode;
}

export default function DarkModeToggle({
	className = "",
	children,
}: SideLinkProps) {
	//DarkMode State
	const [isDarkMode, setDarkMode] = useState(false);

	//Render DarkMode
	useEffect(() => {
		if (localStorage.getItem("themes") === "true") {
			setDarkMode(true);
		}
	}, []);

	//DarkMode function
	const DarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	//DarkMode Hooks
	useEffect(() => {
		// Get icons DarkMode
		const SunIcon = document.querySelector(".lucide-sun");
		const MoonIcon = document.querySelector(".lucide-moon");

		// Set DarkMode
		localStorage.setItem("themes", isDarkMode.toString());

		if (isDarkMode) {
			document.body.classList.add("dark");
			SunIcon?.classList.add("hidden");
			MoonIcon?.classList.remove("hidden");
		} else {
			document.body.classList.remove("dark");
			SunIcon?.classList.remove("hidden");
			MoonIcon?.classList.add("hidden");
		}
	}, [isDarkMode]);
	return (
		<button
			type="button"
			className={'inline-flex items-center px-2 py-2 text-md font-medium transition duration-200 ease-in-out focus:outline-none text-neutral-500 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800 rounded-md ' + className}
			onClick={DarkMode}
		>
			{children}
			<div className="flex w-full" >
				<Sun className="block w-5 h-5 ml-2 mr-4" />
				<Moon className="hidden w-5 h-5 ml-2 mr-4" />
				<span className="text-nowrap duration-200 group-hover:translate-x-1">
					{!isDarkMode ? "Light Mode" : "Dark Mode"}
				</span>
			</div>
			<div className="relative flex items-center w-12 h-5 px-1 bg-neutral-400 dark:bg-neutral-900 rounded-full overflow-hidden">
				<div className={`relative top-0 left-0 w-4 h-4 rounded-full duration-300 ${isDarkMode ? "left-4 bg-blue-500" : "left-0 bg-neutral-100"}`}></div>
			</div>
		</button >
	);
}
