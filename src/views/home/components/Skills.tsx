import Title from "./Title";
import { CodeXml } from "@/components/Icon/DefaultIcons";
import { IconList } from "@/components/Elements/IconStack";

export default function Skills() {

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
                            IconList.map((item, index) => (
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