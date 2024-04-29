"use client";

import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex max-h-screen bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
            {/* container 1 */}
            <div className="w-1/4 h-screen bg-neutral-900 overflow-hidden shadow-md">
                {/* Sidebar Components */}
                <Sidebar />
            </div>
            {/* container 2 */}
            <div className="w-full h-screen px-40 pt-10">
                {/* content container */}
                {children}
            </div>
        </main>
    );
}
