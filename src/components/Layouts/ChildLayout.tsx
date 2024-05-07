import { ReactNode } from "react";

export default function ChildLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-10/12 h-screen mx-auto md:w-3/5">
            <div className="flex flex-col h-full overflow-y-auto hidden-scrollbar">
                {children}
            </div>
        </div>
    );
}