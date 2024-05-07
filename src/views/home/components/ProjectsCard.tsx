"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectsProps } from "@/types/projects";

interface ProjectsCardProps {
    project: ProjectsProps
}

export default function ProjectsCard({ project }: ProjectsCardProps) {
    const { title, description, image, date } = project;
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`flex-shrink-0 h-64 overflow-hidden rounded-xl shadow-md bg-light-100 dark:bg-dark-100 w-60 snap-center duration-700 ${isLoading ? "animate-pulse blur-sm" : "group"}`}>
            <div className="w-full shadow-sm h-28">
                <Image src={image ?? "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"}
                    alt="image"
                    width={320}
                    height={160}
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                    className={`object-cover w-full h-full duration-700 ${isLoading ? "scale-[1.02]" : ""}`}
                />
            </div>
            <div className="flex flex-col justify-between h-32 px-4 pt-4">
                <div className="w-full h-32">
                    <h2 className="mb-2 font-bold truncate font-poppins text-neutral-800 text-md text-nowrap dark:text-neutral-200">{title ?? "Project Title"}</h2>
                    <p className="text-sm truncate font-poppins line-clamp-3 text-neutral-600 dark:text-neutral-400 text-wrap">{description ?? "Project Description"}</p>
                </div>
                <span className="text-[10px] text-neutral-800 dark:text-neutral-200">{date ?? "Dec 05, 2023"}</span>
            </div>
        </div>
    );
}