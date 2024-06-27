"use client";

import { useEffect } from "react";
import Title from "./Title";
import { UserRound } from "@/components/Icon/DefaultIcons";

export default function About({ sectionRef }: { sectionRef: any }) {
	useEffect(() => {
		if (sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [sectionRef]);
	return (
		<section id="about" ref={sectionRef} className="min-h-screen w-full">
			<Title title="About" subtitle="Know about me">
				<UserRound className="h-6 w-6" />
			</Title>
			<div></div>
		</section>
	);
}
