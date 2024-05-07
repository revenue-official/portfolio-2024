"use client";

import React, { ReactNode } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ChildLayout from './ChildLayout';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex max-h-screen overflow-hidden bg-light-50 dark:bg-dark-50">
            <Sidebar />
            <ChildLayout>
                {children}
            </ChildLayout>
        </main>
    );
}
