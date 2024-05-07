import Breakline from "@/components/Elements/Breakline";

import Introduction from "./Introduction";
import LatestProjects from "./Projects";
import { ProjectsProps } from "@/types/projects";
import Skills from "./Skills";

export default async function Home({ projects }: { projects: ProjectsProps[] }) {
    return (
        <>
            <Introduction />
            <Breakline className="my-6" />
            <LatestProjects projects={projects} />
            <Breakline className="my-6" />
            <Skills />
        </>
    );
}