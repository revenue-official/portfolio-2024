"use client";

import { CircleChevronRight } from "@/components/Icon/DefaultIcons";
import { useRouter } from "next/navigation";

interface BackButtonProps {
	className?: string;
	to?: string;
}

export default function RedirectBack({ to, className }: BackButtonProps) {
	const router = useRouter();
	return (
		<>
			<button
				type="button"
				className={
					"flex min-w-20 items-center gap-1 p-2 text-sm font-medium text-neutral-400 duration-100 hover:gap-2 hover:text-neutral-300" +
					className
				}
				onClick={() => (to ? router.push(to) : router.back())}
			>
				<CircleChevronRight className="h-5 w-5 rotate-180" />
				<span className="h-full font-poppins">Back</span>
			</button>
		</>
	);
}
