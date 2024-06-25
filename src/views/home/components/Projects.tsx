"use client";

import { useEffect, useRef } from "react";
import { LayoutGrid } from "@/components/Icon/DefaultIcons";
import { ProjectsProps } from "@/types/projects";
import Title from "./Title";
import dynamic from "next/dynamic";

//dynamic import
// const ProjectsCard = dynamic(() => import("./ProjectsCard"), { ssr: true });

export default function Projects() {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sisa kode tetap sama
    const container = cardContainerRef.current;
    let timeoutId: NodeJS.Timeout;

    setTimeout(() => {
      if (container) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
        timeoutId = setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
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
      <div
        ref={cardContainerRef}
        className="hidden-scrollbar mx-auto flex snap-x snap-mandatory gap-4 overflow-x-auto py-4"
      >
        {/* card  
          projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))
          */}
      </div>
    </section>
  );
}
