'use client';

import Link from 'next/link';
import React, { ReactNode, useContext } from 'react';
import { usePathname } from 'next/navigation';
import useSidebarStore from '@/contexts/SidebarProvider';

interface SideLinkProps {
  active?: boolean;
  className?: string;
  children?: ReactNode;
  href?: string;
  title?: string;
}

export default function SideLink({
  active = false,
  className = '',
  children,
  href = '',
  title = '',
}: SideLinkProps) {
  const pathname = usePathname();
  if (href === pathname) {
    active = true;
  }

  const getStore = useSidebarStore();

  return (
    <Link
      href={href}
      className={
        'text-md inline-flex items-center px-2 py-2 font-medium transition duration-200 ease-in-out focus:outline-none  ' +
        (active
          ? `rounded-md bg-blue-500 text-neutral-100 dark:text-white `
          : 'hover:bg-lightsilver dark:hover:bg-raven group rounded-md text-neutral-500 dark:text-neutral-400 ') +
        className
      }
    >
      {children}
      {/* Render <span> only if title is provided */}
      {title && getStore && (
        <span className="hidden duration-200 group-hover:translate-x-1 md:inline">{title}</span>
      )}
    </Link>
  );
}
