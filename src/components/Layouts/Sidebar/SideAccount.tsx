import { Palette, Settings } from '@/components/Icon/DefaultIcons';
import SideLink from './SideLink';
import ThemesToggle from '@/components/Elements/ThemesToggle';

export default function SideAccount() {
  return (
    <div className="mt-5 flex flex-col items-center gap-2">
      <span className="w-fit text-[9px] font-bold text-neutral-400 dark:text-neutral-600 md:w-full md:pb-2 md:pl-4 md:text-[10px]">
        ACCOUNT
      </span>
      <SideLink className="w-fit font-quicksand md:w-full" href="/settings" title="Settings">
        <Settings className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
      <SideLink className="w-fit font-quicksand md:w-full" href="/themes" title="Themes">
        <Palette className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
      <ThemesToggle className="group w-fit font-quicksand md:w-full" />
    </div>
  );
}
