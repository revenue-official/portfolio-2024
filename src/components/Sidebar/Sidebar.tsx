"use client";

import Image from "next/image";
import SideLink from "@/components/Sidebar/SideLink";
import DarkModeToggle from "@/components/DarkMode/DarkModeToggle";
import DarkModeThemes from "../DarkMode/DarkModeThemes";
import { HomeDefault, UserRound, MessageSquareText, Phone, ElipsisVertical, Settings, Palette } from "@/components/Icon/DefaultIcon";

export default function Sidebar() {
    return (
        <div className="flex flex-col h-full justify-around bg-neutral-50 dark:bg-neutral-950 px-4">
            {/* mini side */}
            <div className="flex flex-col w-full h-full">
                {/* Product Logo  */}
                <div className="flex h-14 justify-center items-center cursor-default mt-2">
                    <Image
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="TailwindCSS"
                        width={100}
                        height={100}
                        priority
                        className="h-5 w-5"
                    />
                    <div className="flex flex-col justify-center pt-1">
                        <span className="ml-2 h-5 text-lg font-bold font-quicksand text-indigo-500 text-nowrap">RevCode.</span>
                        <span className="ml-2 h-5 text-[10px] font-bold font-mono text-neutral-500 text-nowrap">Web Development</span>
                    </div>
                </div>
                <hr className="my-2" />
                {/* Overview  */}
                <div className="flex flex-col gap-2 mt-5">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 pl-4 pb-2">OVERVIEW</span>
                    <SideLink className="font-quicksand" href="/" title="Home">
                        <HomeDefault className="w-5 h-5 ml-2 mr-4 flex-shrink-0" />
                    </SideLink>
                    <SideLink className="font-quicksand" href="/about" title="About">
                        <UserRound className="w-5 h-5 ml-2 mr-4 flex-shrink-0" />
                    </SideLink>
                    <SideLink className="font-quicksand" href="/conversation" title="Conversation">
                        <MessageSquareText className="w-5 h-5 ml-2 mr-4 flex-shrink-0" />
                    </SideLink>
                    <SideLink className="font-quicksand" href="/contact" title="Contact">
                        <Phone className="w-5 h-5 ml-2 mr-4 flex-shrink-0" />
                    </SideLink>
                </div>
                {/* Account  */}
                <div className="flex flex-col gap-2 mt-5">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 pl-4 pb-2">ACCOUNT</span>
                    <SideLink className="font-quicksand" href="/settings" title="Settings">
                        <Settings className="w-5 h-5 ml-2 mr-4 flex-shrink-0" />
                    </SideLink>
                    <SideLink className="font-quicksand" href="/themes" title="Themes">
                        <Palette className="w-5 h-5 ml-2 mr-4 flex-shrink-0" />
                    </SideLink>
                    {/* <DarkModeToggle className="font-quicksand group" /> */}
                    <DarkModeThemes className="font-quicksand group" />
                </div>
            </div>
            <hr className="my-2" />
            {/* profile */}
            <div className="flex w-full h-16">
                <div className="flex items-center justify-between w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile"
                        width={30}
                        height={30}
                        className="rounded-full aspect-square w-10 h-10 border-2 border-neutral-200"
                    />
                    <div className="flex flex-col justify-center h-full pl-2">
                        <span className="font-medium text-sm text-neutral-900 dark:text-neutral-200 w-40 truncate">Teguh Ersyarudin</span>
                        <span className="font-medium text-[10px] text-neutral-500 dark:text-neutral-500">akunku5521@gmail.com</span>
                    </div>
                    <button type="button">
                        <ElipsisVertical className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}