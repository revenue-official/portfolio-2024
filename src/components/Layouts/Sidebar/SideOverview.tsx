import {
  HomeDefault,
  UserRound,
  CodeXml,
  BriefcaseBusiness,
} from "@/components/Icon/DefaultIcons";
import SideLink from "./SideLink";
import { useScrollStore } from "@/stores/useScrollStore";
import ThemesToggle from "@/components/Elements/ThemesToggle";

export default function SideOverview() {
  const { sectionRefs } = useScrollStore();

  return (
    <div className="mt-5 flex flex-col items-center gap-2">
      <span className="w-fit text-[9px] font-bold text-neutral-400 dark:text-neutral-600 md:w-full md:pb-2 md:pl-4 md:text-[10px]">
        OVERVIEW
      </span>
      <SideLink
        className="w-fit font-quicksand md:w-full"
        title="Home"
        active={sectionRefs.home?.isIntersecting}
        sectionId="home"
      >
        <HomeDefault
          className={
            "h-8 w-8 flex-shrink-0 p-1 duration-200 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0 md:text-indigo-500 " +
            (sectionRefs.home?.isIntersecting ? "text-indigo-500" : "")
          }
        />
      </SideLink>
      <SideLink
        className="w-fit font-quicksand md:w-full"
        title="About"
        active={sectionRefs.about?.isIntersecting}
        sectionId="about"
      >
        <UserRound
          className={
            "h-8 w-8 flex-shrink-0 p-1 duration-200 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0 md:text-indigo-500 " +
            (sectionRefs.about?.isIntersecting ? "text-indigo-500" : "")
          }
        />
      </SideLink>
      <SideLink
        className="w-fit font-quicksand md:w-full"
        title="Skills"
        active={sectionRefs.skill?.isIntersecting}
        sectionId="skill"
      >
        <CodeXml
          className={
            "h-8 w-8 flex-shrink-0 p-1 duration-200 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0 md:text-indigo-500 " +
            (sectionRefs.skill?.isIntersecting ? "text-indigo-500" : "")
          }
        />
      </SideLink>
      <SideLink
        className="w-fit font-quicksand md:w-full"
        title="Services"
        active={sectionRefs.service?.isIntersecting}
        sectionId="service"
      >
        <BriefcaseBusiness
          className={
            "h-8 w-8 flex-shrink-0 p-1 duration-200 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0 md:text-indigo-500 " +
            (sectionRefs.service?.isIntersecting ? "text-indigo-500" : "")
          }
        />
      </SideLink>
      <ThemesToggle />
    </div>
  );
}
