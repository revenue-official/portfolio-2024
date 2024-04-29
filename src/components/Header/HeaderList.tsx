"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderListProps {
	active?: boolean;
	className?: string;
	children?: ReactNode;
	href?: string;
}

export default function HeaderList({
	active = false,
	className = "",
	children,
	href = "",
}: HeaderListProps) {
	if (href === usePathname()) {
		active = true;
	}
	return (
		<Link
			href={href}
			className={
				"inline-flex items-center text-xs font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
				(active
					? "text-orange-500 dark:text-orange-400 "
					: "text-gray-500 hover:text-gray-600 focus:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300 dark:focus:text-gray-300 ") +
				className
			}
		>
			{children}
		</Link>
	);
}
