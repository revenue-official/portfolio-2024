import Home from "@/views/home";
import ChildLayout from "@/components/Layouts/ChildLayout";
import { getProjectsData } from "@/services/ProjectData";
import { ProjectsProps } from "@/types/projects";

export default async function HomePage() {
  const getProjects: ProjectsProps[] = await getProjectsData();

  return (
    <ChildLayout>
      <Home projects={getProjects} />
    </ChildLayout>
  );
}
