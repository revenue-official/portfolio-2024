'use client';

import Link from "next/link";
import React, { ReactNode, useContext } from 'react';
import { usePathname } from "next/navigation";
import SidebarContext from "@/contexts/SidebarProvider";

interface SideLinkProps {
    active?: boolean;
    className?: string;
    children?: ReactNode;
    href?: string;
    title?: string;
}

export default function SideLink({
    active = false,
    className = "",
    children,
    href = "",
    title = "",
}: SideLinkProps) {
    const pathname = usePathname();
    if (href === pathname) {
        active = true;
    }

    const getContext = useContext(SidebarContext);

    return (
        <Link
            href={href}
            className={
                'inline-flex items-center px-2 py-2 text-md font-medium transition duration-200 ease-in-out focus:outline-none  ' +
                (active
                    ? `text-neutral-100 bg-gradient-to-r from-indigo-500 to-purple-500 dark:text-white rounded-md `
                    : 'text-neutral-500 hover:bg-lightsilver dark:text-neutral-400 dark:hover:bg-raven rounded-md group ') +
                className
            }
        >
            {children}
            {/* Render <span> only if title is provided */}
            {title && getContext && (
                <span className="hidden duration-200 group-hover:translate-x-1 md:inline">
                    {title}
                </span>
            )}
        </Link>
    );
}
