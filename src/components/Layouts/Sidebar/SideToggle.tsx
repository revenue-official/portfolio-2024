import { CircleChevronRight } from '@/components/Icon/DefaultIcons';

export default function SideToggle({ toggleSidebar: toggleSidebar, isOpen }: any) {
  return (
    <div className={`absolute right-1 top-1/3 block cursor-pointer md:hidden`}>
      <div className="h-8 w-8 rounded-full bg-light-100 dark:bg-dark-100">
        <button type="button" onClick={toggleSidebar}>
          <CircleChevronRight
            className={`h-8 w-8 rounded-full text-neutral-400 duration-700 ease-in-out dark:text-neutral-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
    </div>
  );
}
