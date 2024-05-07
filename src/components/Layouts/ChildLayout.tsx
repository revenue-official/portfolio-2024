import { ReactNode } from "react";

export default function ChildLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-3/5 mx-auto h-screen">
            <div className="flex flex-col h-full overflow-y-auto hidden-scrollbar">
                {children}
            </div>
        </div>
    );
}