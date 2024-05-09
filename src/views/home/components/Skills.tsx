import Title from "./Title";
import { CodeXml } from "@/components/Icon/DefaultIcons";
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
    SiSupabase
} from '@icons-pack/react-simple-icons';


export default function Skills() {
    const iconList = [
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
            icon: <SiNextdotjs className="w-8 h-8 p-0.5 bg-white rounded-full shadow-md" color="#000" />,
            title: "NextJS"
        },
        {
            icon: <SiTailwindcss className="w-8 h-8 shadow-md" color="#38BDF8" />,
            title: "TailwindCSS"
        },
        {
            icon: <SiSupabase className="w-8 h-8 shadow-md" color="#3FCF8E" />,
            title: "Supabase"
        }
    ]
    return (
        <section className="w-full min-h-40">
            <Title title="Skills" subtitle="My technical skills">
                <CodeXml className="w-5 h-5" />
            </Title>
            {/* skills container  */}
            <div className="flex justify-center pt-5 pb-10">
                <div className="w-72 md:w-[48rem] mx-auto">
                    <div className="flex flex-wrap">
                        {
                            iconList.map((item, index) => (
                                <div key={index} className="w-24 h-24 p-4 overflow-hidden md:w-32 md:h-32">
                                    <div className="flex items-center justify-center w-full h-full shadow-md shadow-neutral-300 dark:shadow-neutral-900 rounded-xl bg-light-100 dark:bg-dark-100">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="mt-3">
                                                {item.icon}
                                            </div>
                                            <span className="text-xs text-neutral-800 dark:text-neutral-200">{item.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}