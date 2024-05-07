import { ReactNode } from "react";

interface TitleProps {
    title: string,
    subtitle?: string,
    children?: ReactNode
}

export default function Title({ title, subtitle, children }: TitleProps) {
    return (
        <div className="flex flex-col my-4">
            <div className="inline-flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                {children}
                <span className="text-xl font-bold font-quicksand">{title}</span>
            </div>
            <span className="font-medium text-neutral-600 dark:text-neutral-400 font-quicksand">{subtitle}</span>
        </div>
    );
}