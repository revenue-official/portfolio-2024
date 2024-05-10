import Home from "@/views/home";
import { getProjectsData } from "@/services/ProjectData";
import { ProjectsProps } from "@/types/projects";
import ChildLayout from "@/components/Layouts/ChildLayout";

export default async function HomePage() {
  const getProjects: ProjectsProps[] = await getProjectsData();

  return (
    <ChildLayout>
      <Home projects={getProjects} />
    </ChildLayout>
  );
}