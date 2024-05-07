"use client";

import Image from "next/image";
import SideLink from "@/components/Layouts/Sidebar/SideLink";
import ThemesToggle from "@/components/Elements/ThemesToggle";
import Breakline from "@/components/Elements/Breakline";
import {
    HomeDefault,
    UserRound,
    MessageSquareText,
    Phone,
    ElipsisVertical,
    Settings,
    Palette,
} from "@/components/Icon/DefaultIcon";

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen shadow-md">
            <div className="flex flex-col justify-around h-full px-4 overflow-hidden bg-light-100 dark:bg-dark-100">
                {/* mini side */}
                <div className="flex flex-col w-full h-full">
                    {/* Product Logo  */}
                    <div className="flex items-center justify-center mt-2 cursor-default h-14">
                        <Image
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="TailwindCSS"
                            width={100}
                            height={100}
                            priority
                            className="w-5 h-5"
                        />
                        <div className="flex flex-col justify-center pt-1">
                            <span className="h-5 ml-2 text-lg font-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text font-quicksand text-nowrap">
                                RevCodes.
                            </span>
                            <span className="ml-2 h-5 text-[10px] font-bold font-mono text-neutral-500 text-nowrap">
                                Web Development
                            </span>
                        </div>
                    </div>
                    <Breakline className="my-2" />
                    {/* Overview  */}
                    <div className="flex flex-col gap-2 mt-5">
                        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 pl-4 pb-2">
                            OVERVIEW
                        </span>
                        <SideLink className="font-quicksand" href="/" title="Home">
                            <HomeDefault className="flex-shrink-0 w-5 h-5 ml-2 mr-4" />
                        </SideLink>
                        <SideLink className="font-quicksand" href="/about" title="About">
                            <UserRound className="flex-shrink-0 w-5 h-5 ml-2 mr-4" />
                        </SideLink>
                        <SideLink
                            className="font-quicksand"
                            href="/conversation"
                            title="Conversation"
                        >
                            <MessageSquareText className="flex-shrink-0 w-5 h-5 ml-2 mr-4" />
                        </SideLink>
                        <SideLink className="font-quicksand" href="/contact" title="Contact">
                            <Phone className="flex-shrink-0 w-5 h-5 ml-2 mr-4" />
                        </SideLink>
                    </div>
                    {/* Account  */}
                    <div className="flex flex-col gap-2 mt-5">
                        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 pl-4 pb-2">
                            ACCOUNT
                        </span>
                        <SideLink
                            className="font-quicksand"
                            href="/settings"
                            title="Settings"
                        >
                            <Settings className="flex-shrink-0 w-5 h-5 ml-2 mr-4" />
                        </SideLink>
                        <SideLink className="font-quicksand" href="/themes" title="Themes">
                            <Palette className="flex-shrink-0 w-5 h-5 ml-2 mr-4" />
                        </SideLink>
                        <ThemesToggle className="font-quicksand group" />
                    </div>
                </div>
                <Breakline className="my-2" />
                {/* profile */}
                <div className="flex w-full h-16">
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
            </div >
        </aside>
    );
}
