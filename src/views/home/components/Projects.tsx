"use client";

import { useEffect, useRef, useState } from "react";
import { LayoutGrid } from "@/components/Icon/DefaultIcon";
import { ProjectsProps } from "@/types/projects";
import Title from "./Title";
import dynamic from "next/dynamic";

const ProjectsCard = dynamic(() => import("./ProjectsCard"), { ssr: true });

export default function Projects({ projects }: { projects: ProjectsProps[] }) {
    const cardContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Sisa kode tetap sama
        const container = cardContainerRef.current;
        let timeoutId: NodeJS.Timeout;

        setTimeout(() => {
            if (container) {
                container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
                timeoutId = setTimeout(() => {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                }, 1000);
            }
            return () => clearTimeout(timeoutId);
        }, 1500);
    }, []);

    return (
        <section className="w-full">
            <Title title="Projects" subtitle="My latest projects">
                <LayoutGrid />
            </Title>
            {/* container  */}
            <div ref={cardContainerRef} className="flex gap-4 py-4 mx-auto overflow-x-auto snap-mandatory snap-x hidden-scrollbar">
                {
                    /* card  */
                    projects.map((project, index) => (
                        <ProjectsCard
                            key={index}
                            project={project}
                        />
                    ))
                }
            </div>
        </section>
    );
}
