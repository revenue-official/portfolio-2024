import { HomeDefault, MessageSquareText, Phone, UserRound } from '@/components/Icon/DefaultIcons';
import SideLink from './SideLink';

export default function SideOverview() {
  return (
    <div className="mt-5 flex flex-col items-center gap-2">
      <span className="w-fit text-[9px] font-bold text-neutral-400 dark:text-neutral-600 md:w-full md:pb-2 md:pl-4 md:text-[10px]">
        OVERVIEW
      </span>
      <SideLink className="w-fit font-quicksand md:w-full" href="/" title="Home">
        <HomeDefault className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
      <SideLink className="w-fit font-quicksand md:w-full" href="/about" title="About">
        <UserRound className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
      <SideLink className="w-fit font-quicksand md:w-full" href="/conversation" title="Chat">
        <MessageSquareText className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
      <SideLink className="w-fit font-quicksand md:w-full" href="/contact" title="Contact">
        <Phone className="h-8 w-8 flex-shrink-0 p-1 md:ml-2 md:mr-4 md:h-5 md:w-5 md:p-0" />
      </SideLink>
    </div>
  );
}
