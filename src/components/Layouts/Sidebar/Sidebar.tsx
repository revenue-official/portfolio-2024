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
    CircleChevronRight,
} from "@/components/Icon/DefaultIcons";
import { useEffect, useState } from "react";
import SidebarContext from "@/contexts/SidebarProvider";
import { useMediaQuery } from "@react-hook/media-query";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [firstOpenDuration, setFirstOpenDuration] = useState("duration-500 md:left-0");
    const isMobile = useMediaQuery('(max-width: 768px)');

    const setTimeoutPromise = (delay: number) => {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    };


    useEffect(() => {
        if (isMobile) {
            setIsOpen(false);
            const runTimeouts = async () => {
                await setTimeoutPromise(3000);
                setIsOpen(true);
                await setTimeoutPromise(600);
                setFirstOpenDuration("duration-500 left-2");
                setIsOpen(false);
                await setTimeoutPromise(500);
                setFirstOpenDuration("duration-300");
            };
            runTimeouts();
        } else {
            setIsOpen(true);
        }

    }, [isMobile]);

    const toggleSidebar = () => {
        if (firstOpenDuration === "duration-300") {
            setIsOpen(!isOpen);
        }
    };
    return (
        <SidebarContext.Provider value={isOpen}>
            <aside className={`absolute h-screen pr-5 md:relative z-10 ${isOpen ? "left-0" : "-left-16"} ${firstOpenDuration}`}>
                <div className="flex flex-col justify-around w-16 h-full px-0 overflow-hidden duration-300 shadow-md shadow-neutral-300 dark:shadow-neutral-800 bg-light-100 dark:bg-dark-100 md:w-64 md:px-4">
                    {/* sidebar toggle  */}
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
                            <div className="flex-col justify-center hidden pt-1 md:flex">
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
                        <div className="flex flex-col items-center gap-2 mt-5">
                            <span className="w-fit md:w-full text-[9px] md:text-[10px] font-bold text-neutral-400 dark:text-neutral-600 md:pl-4 md:pb-2">
                                OVERVIEW
                            </span>
                            <SideLink className="md:w-full w-fit font-quicksand" href="/" title="Home">
                                <HomeDefault className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />
                            </SideLink>
                            <SideLink className="md:w-full w-fit font-quicksand" href="/about" title="About">
                                <UserRound className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />
                            </SideLink>
                            <SideLink
                                className="md:w-full w-fit font-quicksand"
                                href="/conversation"
                                title="Conversation"
                            >
                                <MessageSquareText className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />
                            </SideLink>
                            <SideLink className="md:w-full w-fit font-quicksand" href="/contact" title="Contact">
                                <Phone className="flex-shrink-0 w-8 h-8 p-1 md:w-5 md:h-5 md:ml-2 md:mr-4 md:p-0" />
                            </SideLink>
                        </div>
                        {/* Account  */}
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
                    </div>
                    <Breakline className="my-2" />
                    {/* profile */}
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
                </div >
            </aside>
        </SidebarContext.Provider>
    );
}
