"use client";

import { useScrollStore } from "@/stores/useScrollStore";

interface SideActiveProps {
	children: React.ReactNode;
	className?: string;
	title?: string;
	active?: boolean;
	sectionId?: string;
}

export default function SideActive({
	children,
	className,
	title,
	active,
	sectionId,
}: SideActiveProps) {
	// Scroll to section
	const { scrollToSection } = useScrollStore();
	return (
		<button
			type="button"
			onClick={() => scrollToSection(sectionId as string)}
			className={
				"text-md group inline-flex cursor-pointer items-center justify-center px-2 py-2 transition duration-200 ease-in-out focus:outline-none md:justify-start " +
				className
			}
		>
			{children}
			<span
				className={
					"font-xs hidden font-poppins font-bold duration-300 md:block " +
					(active
						? "text-indigo-500"
						: " text-zinc-600 group-hover:translate-x-1 dark:text-zinc-100")
				}
			>
				{title}
			</span>
		</button>
	);
}
