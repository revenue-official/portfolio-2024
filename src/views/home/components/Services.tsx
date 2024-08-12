import Image from "next/image";
import Title from "./Title";
import { BriefcaseBusiness } from "@/components/Icon/DefaultIcons";

export default function Services({ sectionRef }: any) {
	return (
		<section id="service" ref={sectionRef} className="min-h-screen w-full">
			<Title title="Services" subtitle="My services">
				<BriefcaseBusiness className="h-5 w-5 md:h-7 md:w-7" />
			</Title>

			<div className="flex flex-col justify-around gap-4 md:flex-row md:items-start px-4">
				<div className="w-full h-60 group">
					<div className="h-full rounded-xl bg-zinc-50 p-4 shadow-md dark:bg-zinc-900 group-hover:-translate-y-2 duration-300 delay-75 ease-in-out cursor-default">
						<Image
							src={
								"http://localhost:3000/images/laptop-icon.png"
							}
							alt="web"
							width={200}
							height={200}
							className="mx-auto h-24 w-24 object-cover"
						/>
						<h2 className="h-10 text-center text-xl font-bold">Web Apps</h2>
						<span className="flex text-center font-poppins text-zinc-600 dark:text-zinc-400">
							PERN framework (PostgreSQL ExpressJS React NodeJS) as the basis for
							creating web apps
						</span>
					</div>
					<div className="hidden md:block w-0 max-w-xs h-1 bg-indigo-500 mx-auto group-hover:w-full duration-500 ease-in-out rounded-sm delay-75"></div>
				</div>
				<div className="w-full h-60 group">
					<div className="h-full rounded-xl bg-zinc-50 p-4 shadow-md dark:bg-zinc-900 group-hover:-translate-y-2 duration-300 delay-75 ease-in-out cursor-default">
						<Image
							src="http://localhost:3000/images/browser-dev-icon.png"
							alt="web"
							width={200}
							height={200}
							className="mx-auto h-24 w-24 object-cover"
						/>
						<h2 className="h-10 text-center text-xl font-bold">
							Web Development
						</h2>
						<span className="flex text-center font-poppins text-zinc-600 dark:text-zinc-400">
							HTML, CSS and JavaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, officia?
						</span>
					</div>
					<div className="hidden md:block w-0 max-w-xs h-1 bg-indigo-500 mx-auto group-hover:w-full duration-500 ease-in-out rounded-sm delay-75"></div>
				</div>
			</div>
		</section>
	);
}
