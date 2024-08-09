"use client";

import Title from "./Title";
import Image from "next/image";
import { UserRound } from "@/components/Icon/DefaultIcons";

export default function About({ sectionRef }: { sectionRef: any }) {
	const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;

	return (
		<section id="about" ref={sectionRef} className="min-h-max w-full">
			<Title title="About Me" subtitle="Know about me">
				<UserRound className="h-6 w-6 md:h-7 md:w-7" />
			</Title>
			<div className="w-full gap-8 md:flex">
				<div className="group relative mx-auto h-60 w-60 overflow-hidden rounded-3xl shadow-lg md:h-1/2 md:w-1/2">
					{/*// badge */}
					<div className="absolute -left-24 top-3 z-10 flex w-60 -rotate-45 cursor-default items-center justify-center overflow-auto bg-gradient-to-b from-yellow-600 to-yellow-500 shadow-md md:-left-20 md:top-4">
						<span className="text-nowrap py-0.5 font-poppins text-base font-bold text-white">
							Profile
						</span>
						<div className="animated-to-right absolute z-10 h-16 w-6 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
					</div>
					<Image
						src={
							"https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="not found"
						width={1080}
						height={1080}
						className="h-full w-full rounded-3xl object-cover duration-200 group-hover:scale-105"
					/>
				</div>
				<div className="min-h-20 w-full rounded-3xl px-8 pt-6 md:bg-light-100 md:shadow-md md:dark:bg-dark-100">
					<h2 className="w-full text-nowrap text-center font-poppins text-lg font-bold text-zinc-900 dark:text-zinc-100 md:h-10 md:text-2xl">
						Hi, I am Teguh
					</h2>
					<div className="flex h-full w-full flex-col">
						<p className="w-full pt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
							An experienced web development junior with fullstack skills. I am
							quite proficient in using Laravel and Nextjs technology. I have
							knowledge in PHP and Typescript to develop web application
							functionality. Im excited to contribute to the team to build
							efficient, responsive, and visually appealing web applications.
						</p>
						<p className="w-full pt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
							quasi. Voluptatum, optio! Odit voluptatum, excepturi molestiae
							molestias corrupti.
						</p>
					</div>
				</div>
			</div>
			<div className="flex min-h-20 w-full justify-around px-4 py-14">
				<div className="flex min-h-10 w-10 flex-col items-center text-center">
					<h2 className="font-roboto text-2xl font-bold md:text-3xl">03+</h2>
					<span className="flex text-center text-xs text-zinc-500 md:text-sm">
						Years Experience
					</span>
				</div>
				<div className="flex min-h-10 w-10 flex-col items-center text-center">
					<h2 className="font-roboto text-2xl font-bold md:text-3xl">08+</h2>
					<span className="flex text-center text-xs text-zinc-500 md:text-sm">
						Completed Projects
					</span>
				</div>
				<div className="flex min-h-10 w-10 flex-col items-center text-center">
					<h2 className="font-roboto text-2xl font-bold md:text-3xl">01+</h2>
					<span className="flex text-center text-xs text-zinc-500 md:text-sm">
						Companies worked
					</span>
				</div>
			</div>
		</section>
	);
}
