import Image from "next/image";
import Title from "./Title";
import { BriefcaseBusiness } from "@/components/Icon/DefaultIcons";

export default function Services({ sectionRef }: any) {
	const codeIconBase64: string =
		"data:image/png;base64,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";

	return (
		<section id="service" ref={sectionRef} className="min-h-screen w-full">
			<Title title="Services" subtitle="My services">
				<BriefcaseBusiness className="h-5 w-5 md:h-7 md:w-7" />
			</Title>

			<div className="flex flex-col justify-around gap-4 md:flex-row md:items-start px-4">
				<div className="h-60 w-full rounded-xl bg-zinc-50 p-4 shadow-md dark:bg-zinc-900">
					<Image
						src={
							"https://img.icons8.com/?size=100&id=POC31nUAmxOb&format=png&color=000000"
						}
						alt="web"
						width={200}
						height={200}
						className="mx-auto h-20 w-20 object-cover"
					/>
					<h2 className="h-10 text-center text-xl font-bold">Web App</h2>
					<span className="flex text-center font-poppins text-zinc-600 dark:text-zinc-400">
						MEAN framework (MongoDB ExpressJS Angular NodeJS) as the basis for
						creating web apps
					</span>
				</div>
				<div className="h-60 w-full rounded-xl bg-zinc-50 p-4 shadow-md dark:bg-zinc-900">
					<Image
						src={codeIconBase64}
						alt="web"
						width={200}
						height={200}
						className="mx-auto h-20 w-20 object-cover"
					/>
					<h2 className="h-10 text-center text-xl font-bold">
						Web Development
					</h2>
					<span className="flex text-center font-poppins text-zinc-600 dark:text-zinc-400">
						HTML/CSS/JS , Evanto Elements Themes Development for your
						professional business
					</span>
				</div>
			</div>
		</section>
	);
}
