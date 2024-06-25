"use client";

import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex max-h-screen bg-light-50 dark:bg-dark-50">
      <Sidebar />
      <div className="mx-auto h-screen w-10/12 md:w-3/5">
        <div className="hidden-scrollbar flex h-full flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
