"use client";

import Title from "./Title";
import { CodeXml } from "@/components/Icon/DefaultIcons";
import { IconList } from "@/components/Elements/IconStacks";
import { useEffect } from "react";

export default function Skills({ sectionRef }: { sectionRef: any }) {
  return (
    <section id="skill" ref={sectionRef} className="min-h-screen w-full">
      <Title title="Skills" subtitle="My technical skills">
        <CodeXml className="h-5 w-5 md:h-7 md:w-7" />
      </Title>
      {/* skills container  */}
      <div className="flex justify-center pb-10 pt-5 md:px-8">
        <div className="mx-auto min-w-full">
          <div className="grid grid-cols-4 md:grid-cols-6 md:px-4">
            {IconList.map((item, index) => (
              <div key={index} className="h-24 w-24 p-4 md:h-32 md:w-32">
                <div className="group flex h-full w-full cursor-default items-center justify-center rounded-xl bg-light-100 shadow-md shadow-neutral-300 dark:bg-dark-100 dark:shadow-neutral-900">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="relative flex justify-center">
                      {item.icon}
                      <span
                        className={
                          "absolute -top-12 min-w-44 rounded-md bg-light-100 px-2 py-1 text-xs opacity-0 shadow-md delay-150 duration-300 group-hover:opacity-100 dark:bg-dark-100 " +
                          (item.description == "" ? "hidden" : "")
                        }
                      >
                        {item.description}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-neutral-800 dark:text-neutral-200 md:text-xs">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
