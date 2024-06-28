import {
  HomeDefault,
  UserRound,
  CodeXml,
} from "@/components/Icon/DefaultIcons";
import SideLink from "./SideLink";
import { useScrollStore } from "@/stores/useScrollStore";

export default function SideOverview() {
  const { sectionRefs } = useScrollStore();

  return (
    <div className="mt-5 flex flex-col gap-2">
      <span className="w-fit text-[9px] font-bold text-neutral-400 dark:text-neutral-600 md:w-full md:pb-2 md:pl-4 md:text-[10px]">
        OVERVIEW
      </span>
      <SideLink
        className="w-fit font-quicksand md:w-full"
        title="Home"
        active={sectionRefs.home?.isIntersecting}
        sectionId="home"
      >
        <HomeDefault className="h-8 w-8 flex-shrink-0 p-1 text-indigo-500 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
      <SideLink
        className="w-fit font-quicksand md:w-full"
        title="About"
        active={sectionRefs.about?.isIntersecting}
        sectionId="about"
      >
        <UserRound className="h-8 w-8 flex-shrink-0 p-1 text-indigo-500 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
      <SideLink
        className="w-fit font-quicksand md:w-full"
        title="Skills"
        active={sectionRefs.skill?.isIntersecting}
        sectionId="skill"
      >
        <CodeXml className="h-8 w-8 flex-shrink-0 p-1 text-indigo-500 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
    </div>
  );
}
