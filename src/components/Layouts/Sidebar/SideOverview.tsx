import {
  HomeDefault,
  UserRound,
  CodeXml,
} from "@/components/Icon/DefaultIcons";
import SideActive from "./SideActive";
import { useSideActive } from "@/stores/useSideActive";

export default function SideOverview() {
  const { sideActive } = useSideActive();
  return (
    <div className="mt-5 flex flex-col gap-2">
      <span className="w-fit text-[9px] font-bold text-neutral-400 dark:text-neutral-600 md:w-full md:pb-2 md:pl-4 md:text-[10px]">
        OVERVIEW
      </span>
      <SideActive
        className="w-fit font-quicksand md:w-full"
        title="Home"
        active={sideActive?.home}
      >
        <HomeDefault className="h-8 w-8 flex-shrink-0 p-1 text-indigo-500 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideActive>
      <SideActive
        className="w-fit font-quicksand md:w-full"
        title="About"
        active={sideActive?.about}
      >
        <UserRound className="h-8 w-8 flex-shrink-0 p-1 text-indigo-500 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideActive>
      <SideActive
        className="w-fit font-quicksand md:w-full"
        title="Skills"
        active={sideActive?.skill}
      >
        <CodeXml className="h-8 w-8 flex-shrink-0 p-1 text-indigo-500 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideActive>
    </div>
  );
}
