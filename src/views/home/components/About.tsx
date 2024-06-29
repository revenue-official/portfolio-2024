"use client";

import Title from "./Title";
import Image from "next/image";
import { UserRound } from "@/components/Icon/DefaultIcons";

export default function About({ sectionRef }: { sectionRef: any }) {
	const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL!;
	return (
		<section id="about" ref={sectionRef} className="min-h-screen w-full">
			<Title title="About" subtitle="Know about me">
				<UserRound className="h-6 w-6" />
			</Title>
			<div className="flex w-full gap-8">
				<div className="h-1/2 w-1/2  rounded-3xl shadow-lg">
					<Image
						src={
							"https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="not found"
						width={1080}
						height={1080}
						className="h-full w-full rounded-3xl object-cover"
					/>
				</div>
				<div className="w-full rounded-3xl bg-zinc-50 px-8 py-4 shadow-lg dark:bg-dark-100">
					<h1 className="h-10 w-full text-nowrap font-poppins text-3xl font-bold text-zinc-800 dark:text-zinc-200">
						Hi, I am a full-stack developer.
					</h1>
					<span className="font-poppins text-xs text-zinc-500">
						2020 - 2024
					</span>
					<div className="flex h-full w-full flex-col">
						<p className="text-md zinc-600 w-full pt-4 indent-8 font-poppins text-base dark:text-zinc-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
							quasi. Voluptatum, optio! Odit voluptatum, excepturi molestiae
							molestias corrupti, error, doloremque officiis dignissimos nobis
							voluptate laudantium minus dolore harum fuga et! Lorem ipsum dolor
							sit, amet consectetur adipisicing elit. Optio, quas!
						</p>
						<p className="text-md zinc-600 w-full pt-4 indent-8 font-poppins text-base dark:text-zinc-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
							quasi. Voluptatum, optio! Odit voluptatum, excepturi molestiae
							molestias corrupti, error, doloremque officiis dignissimos nobis
							voluptate laudantium minus dolore harum fuga et!
						</p>
						<p className="text-md zinc-600 w-full pt-4 indent-8 font-poppins text-base dark:text-zinc-400">
							Voluptatum, optio! Odit voluptatum, excepturi molestiae molestias
							corrupti, error, doloremque officiis dignissimos nobis voluptate.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
