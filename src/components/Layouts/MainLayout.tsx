"use client";

import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex max-h-screen bg-light-50 dark:bg-dark-50">
      {children}
    </main>
  );
}
