import Breakline from '@/components/Elements/Breakline';
import dynamic from 'next/dynamic';
import { ProjectsProps } from '@/types/projects';

const Introduction = dynamic(() => import('./Introduction'), { ssr: true });
const LatestProjects = dynamic(() => import('./Projects'), { ssr: true });
const Skills = dynamic(() => import('./Skills'), { ssr: true });

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
