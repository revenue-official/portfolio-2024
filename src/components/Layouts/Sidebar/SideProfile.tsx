import { ElipsisVertical } from "@/components/Icon/DefaultIcons";
import Image from "next/image";

export default function SideProfile() {
    return (
        <div className="hidden w-full h-16 md:flex">
            <div className="flex items-center justify-between w-full h-full" >
                <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="profile"
                    width={30}
                    height={30}
                    className="w-10 h-10 border-2 rounded-full aspect-square border-neutral-200"
                />
                <div className="flex flex-col justify-center h-full pl-2">
                    <span className="w-40 text-sm font-medium truncate text-neutral-900 dark:text-neutral-200">
                        Teguh Ersyarudin
                    </span>
                    <span className="font-medium text-[10px] text-neutral-500 dark:text-neutral-500">
                        akunku5521@gmail.com
                    </span>
                </div>
                <button type="button">
                    <ElipsisVertical className="w-5 h-5" />
                </button>
            </div >
        </div >
    );
}