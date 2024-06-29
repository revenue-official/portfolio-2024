"use client";

import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex max-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Sidebar />
      <div className="h-screen w-full px-8 md:px-32">
        <div className="hidden-scrollbar flex h-full flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
