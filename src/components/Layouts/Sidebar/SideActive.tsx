import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface SideActiveProps {
	children: React.ReactNode;
	className?: string;
	title?: string;
	active?: boolean;
}

export default function SideActive({
	children,
	className,
	title,
	active,
}: SideActiveProps) {
	const [activeLink, setActiveLink] = useState(null);

	return (
		<div
			className={
				"text-md group inline-flex cursor-pointer items-center px-2 py-2 transition duration-200 ease-in-out focus:outline-none " +
				className
			}
		>
			{children}
			<span
				className={
					"font-xs hidden font-poppins duration-300 group-hover:translate-x-1 group-hover:text-indigo-500 md:block " +
					(active
						? "font-bold text-indigo-500"
						: " text-zinc-600 dark:text-zinc-400 ")
				}
			>
				{title}
			</span>
		</div>
	);
}
