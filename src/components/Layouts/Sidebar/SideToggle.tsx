import { CircleChevronRight } from "@/components/Icon/DefaultIcons";

export default function SideToggle({ toggleSidebar: toggleSidebar, isOpen }: any) {
    return (
        <div className={`absolute cursor-pointer top-1/3 block md:hidden right-1`}>
            <div className="w-8 h-8 rounded-full bg-light-100 dark:bg-dark-100">
                <button
                    type="button"
                    onClick={toggleSidebar}
                >
                    <CircleChevronRight className={`w-8 h-8 rounded-full text-neutral-400 dark:text-neutral-500 duration-700 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
            </div>
        </div>
    );
}