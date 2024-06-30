import { ReactNode } from "react";

interface TitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function Title({ title, subtitle, children }: TitleProps) {
  return (
    <div className="my-8 flex w-full flex-col items-center">
      <div className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
        {children}
        <span className="font-poppins text-xl font-bold md:text-2xl">
          {title}
        </span>
      </div>
      <span className="font-quicksand font-medium text-neutral-600 dark:text-neutral-400 md:text-base">
        {subtitle}
      </span>
    </div>
  );
}
