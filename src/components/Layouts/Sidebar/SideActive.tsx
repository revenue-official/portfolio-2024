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
				"text-md group inline-flex cursor-pointer items-center px-2 py-2 font-medium transition duration-200 ease-in-out focus:outline-none " +
				className
			}
		>
			{children}
			<span
				className={
					"font-xs hidden font-poppins font-bold duration-300 group-hover:translate-x-1 group-hover:text-indigo-500 md:block " +
					(active ? "text-indigo-500" : "text-zinc-100")
				}
			>
				{title}
			</span>
		</div>
	);
}
