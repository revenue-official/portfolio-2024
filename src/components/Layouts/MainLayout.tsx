"use client";

import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex bg-zinc-100 dark:bg-zinc-950">
      <Sidebar />
      <div className="h-screen w-full px-0 md:px-32">
        <div className="hidden-scrollbar flex h-full flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
