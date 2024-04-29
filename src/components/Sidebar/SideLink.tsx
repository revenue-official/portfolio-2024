'use client';

import Link from "next/link";
import React, { ReactNode } from 'react';
import { usePathname } from "next/navigation";

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
    return (
        <Link
            href={href}
            className={
                'inline-flex items-center px-2 py-2 text-md font-medium transition duration-200 ease-in-out focus:outline-none  ' +
                (active
                    ? 'text-neutral-100 bg-blue-500 dark:text-white rounded-md '
                    : 'text-neutral-500 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800 rounded-md group ') +
                className
            }
        >
            {children}
            {/* Render <span> only if title is provided */}
            {title && (
                <span className="group-hover:translate-x-1 duration-200">
                    {title}
                </span>
            )}
        </Link>
    );
}
