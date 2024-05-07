import { CodeXml } from "@/components/Icon/DefaultIcon";
import Title from "./Title";

export default function Skills() {
    return (
        <section className="w-full min-h-40">
            <Title title="Skills" subtitle="My technical level">
                <CodeXml className="w-5 h-5" />
            </Title>
            {/* skills container  */}
            <div className="flex flex-wrap h-20 gap-4 bg-black">

            </div>
        </section>
    );
}