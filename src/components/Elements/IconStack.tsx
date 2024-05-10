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
    SiGithub
} from '@icons-pack/react-simple-icons';

interface IconListProps {
    icon: JSX.Element;
    title: string;
}

export const IconList: IconListProps[] = [
    {
        icon: <SiHtml5 className="w-8 h-8 shadow-md" color="#E44D26" />,
        title: "HTML5"
    },
    {
        icon: <SiCss3 className="w-8 h-8 shadow-md" color="#1572B6" />,
        title: "CSS3"
    },
    {
        icon: <SiPhp className="w-8 h-8 shadow-md" color="#777BB4" />,
        title: "PHP"
    },
    {
        icon: <SiJavascript className="w-8 h-8 shadow-md" color="#F0DB4F" />,
        title: "Javascript"
    },
    {
        icon: <SiTypescript className="w-8 h-8 shadow-md" color="#3178C6" />,
        title: "Typescript"
    },
    {
        icon: <SiMysql className="w-8 h-8 shadow-md" color="#4479A1" />,
        title: "MySQL"
    },
    {
        icon: <SiLaravel className="w-8 h-8 shadow-md" color="#F05340" />,
        title: "Laravel"
    },
    {
        icon: <SiReact className="w-8 h-8 shadow-md" color="#61DBFB" />,
        title: "React"
    },
    {
        icon: <SiNextdotjs className="w-8 h-8 p-[1px] bg-white rounded-full shadow-md" color="#000" />,
        title: "NextJS"
    },
    {
        icon: <SiTailwindcss className="w-8 h-8 shadow-md" color="#38BDF8" />,
        title: "TailwindCSS"
    },
    {
        icon: <SiSupabase className="w-8 h-8 shadow-md" color="#3FCF8E" />,
        title: "Supabase"
    },
    {
        icon: <SiGithub className="w-8 h-8 p-[1px] bg-white rounded-full shadow-md" color="#000" />,
        title: "GitHub"
    }
];
