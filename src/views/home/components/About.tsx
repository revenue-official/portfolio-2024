"use client";

import { useEffect } from "react";

export default function About({ sectionRef }: { sectionRef: any }) {
	useEffect(() => {
		if (sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [sectionRef]);
	return (
		<section id="about" ref={sectionRef} className="min-h-screen w-full">
			<div className="flex items-center justify-center">about</div>
		</section>
	);
}
