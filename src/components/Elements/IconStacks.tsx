import {
  SiHtml5,
  SiCss3,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiSupabase,
  SiGithub,
  SiReacthookform,
  SiZod,
  SiPostgresql,
  SiShadcnui,
  SiGit,
  SiLinux,
} from "@icons-pack/react-simple-icons";

interface IconListProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const IconList: IconListProps[] = [
  {
    icon: (
      <SiHtml5
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#E44D26"
        title=""
      />
    ),
    title: "HTML5",
    description: "Web content structure and presentation language.",
  },
  {
    icon: (
      <SiCss3
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#1572B6"
        title=""
      />
    ),
    title: "CSS3",
    description: "Styling and visual enhancements for web pages.",
  },
  {
    icon: (
      <SiPhp
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#777BB4"
        title=""
      />
    ),
    title: "PHP",
    description: "Server-side scripting language for dynamic web pages.",
  },
  {
    icon: (
      <SiJavascript
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#F0DB4F"
        title=""
      />
    ),
    title: "Javascript",
    description: "Interactivity and behavior for web pages.",
  },
  {
    icon: (
      <SiTypescript
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#3178C6"
        title=""
      />
    ),
    title: "Typescript",
    description:
      "Enhanced JavaScript with static typing and additional features.",
  },
  {
    icon: (
      <SiMysql
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#4479A1"
        title=""
      />
    ),
    title: "MySQL",
    description:
      "Relational database management system for storing and managing data.",
  },
  {
    icon: (
      <SiLaravel
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#F05340"
        title=""
      />
    ),
    title: "Laravel",
    description: "PHP framework for simplifying web development.",
  },
  {
    icon: (
      <SiReact
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#61DBFB"
        title=""
      />
    ),
    title: "React",
    description: "JavaScript library for building user interfaces.",
  },
  {
    icon: (
      <SiNextdotjs
        className="h-8 w-8 rounded-full bg-white p-[1px] duration-200 group-hover:scale-110"
        color="#000"
      />
    ),
    title: "NextJS",
    description:
      "Framework for advanced web application development with React.",
  },
  {
    icon: (
      <SiTailwindcss
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#38BDF8"
        title=""
      />
    ),
    title: "TailwindCSS",
    description: "Utility-first CSS framework for efficient web styling.",
  },
  {
    icon: (
      <SiSupabase
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#3FCF8E"
        title=""
      />
    ),
    title: "Supabase",
    description:
      "Backend platform simplifying database-driven app development.",
  },
  {
    icon: (
      <SiGithub
        className="h-8 w-8 rounded-full bg-white p-[1px] duration-200 group-hover:scale-110"
        color="#000"
      />
    ),
    title: "GitHub",
    description:
      "Collaboration platform for hosting and managing code repositories.",
  },
  {
    icon: (
      <SiReacthookform
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#9AE6B4"
        title=""
      />
    ),
    title: "React Hook F...",
    description: "Form validation and input handling for React applications.",
  },
  {
    icon: (
      <SiZod
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#3E67B1"
        title=""
      />
    ),
    title: "Zod",
    description: "Schema validation for TypeScript applications.",
  },
  {
    icon: (
      <SiPostgresql
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#4169E1"
        title=""
      />
    ),
    title: "PostgreSQL",
    description:
      "Object-relational database management system for storing and managing data.",
  },
  {
    icon: (
      <SiShadcnui
        className="h-8 w-8 rounded bg-black p-1.5 duration-200 group-hover:scale-110"
        color="#ffffff"
        title=""
      />
    ),
    title: "Shadcn UI",
    description: "React UI components for web development.",
  },
  {
    icon: (
      <SiGit
        className="h-8 w-8 duration-200 group-hover:scale-110"
        color="#F05032"
        title=""
      />
    ),
    title: "Git",
    description: "Version control for web development.",
  },
  {
    icon: (
      <SiLinux
        className="h-8 w-8 rounded bg-yellow-300 p-0.5 duration-200 group-hover:scale-110"
        color="#000000"
        title=""
      />
    ),
    title: "Linux",
    description: "Operating system for web development.",
  },
];
