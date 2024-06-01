import { ReactNode } from 'react';

export default function ChildLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto h-screen w-10/12 md:w-3/5">
      <div className="hidden-scrollbar flex h-full flex-col overflow-y-auto">{children}</div>
    </div>
  );
}
