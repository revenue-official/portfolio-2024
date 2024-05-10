import { Palette, Settings } from "@/components/Icon/DefaultIcons";
import SideLink from "./SideLink";
import ThemesToggle from "@/components/Elements/ThemesToggle";

export default function SideAccount() {
    return (
        <div className="flex flex-col items-center gap-2 mt-5">
            <span className="w-fit md:w-full text-[9px] md:text-[10px] font-bold text-neutral-400 dark:text-neutral-600 md:pl-4 md:pb-2">
                ACCOUNT
            </span>
            <SideLink
                className="md:w-full w-fit font-quicksand"
                href="/settings"
                title="Settings"
            >
                <Settings className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />
            </SideLink>
            <SideLink className="md:w-full w-fit font-quicksand" href="/themes" title="Themes">
                <Palette className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />
            </SideLink>
            <ThemesToggle className="md:w-full w-fit font-quicksand group" />
        </div>
    );
}