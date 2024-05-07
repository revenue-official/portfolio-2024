import Home from "@/views/home";
import { getProjectsData } from "@/services/ProjectData";
import { ProjectsProps } from "@/types/projects";

export default async function HomePage() {
  const getProjects: ProjectsProps[] = await getProjectsData();

  return (
    <>
      <Home projects={getProjects} />
    </>
  );
}