"use client"

import TypingAnimation from "@/components/Animations/TypingEffect";
import { LayoutGrid } from "@/components/Icon/DefaultIcon";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const phrases = ["Hello, I'm ", "Teguh Ersyarudin", "Software Engineer", "Fullstack Developer"];
  const nonDeletableIndices = [0];

  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col">
        <TypingAnimation
          phrases={phrases}
          typingSpeed={50}
          deletingSpeed={30}
          delayAfterTyping={3000}
          delayAfterDeleting={3000}
          nonDeletableIndices={nonDeletableIndices}
          className="font-bold font-sans text-3xl text-black dark:text-white py-2"
        />
        <div className="flex h-fit">
          <ul className="font-comfortaa list-disc inline-flex px-4 gap-8">
            {/* betikan dot/bulatan  */}
            <li className="font-medium text-sm text-neutral-600 dark:text-neutral-400">Remote Worker</li>
            <li className="font-medium text-sm text-neutral-600 dark:text-neutral-400">Based in Indonesia</li>
          </ul>
        </div>
        <div className="flex h-fit py-4">
          <span className="font-medium font-quicksand leading-8 text-neutral-700 dark:text-neutral-300">Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in TypeScript and well-versed in all aspects of web technologies. Collaborative team player dedicated to delivering efficient, scalable, and visually appealing web applications.
          </span>
        </div>
      </div>
      <hr className="my-4 border-neutral-400 dark:border-neutral-600" />
      <div className="flex flex-col h-fit py-4">
        <div className="inline-flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
          <LayoutGrid className="w-5 h-5 flex-shrink-0" />
          <span className="font-bold font-quicksand text-xl">Latest Projects</span>
        </div>
        <div className="py-4">
          <span className="text-neutral-600 dark:text-neutral-400 font-medium font-quicksand">Latest Projects Coming Soon</span>
          {/* project container  */}
          <div className="flex h-full my-4 py-4 snap-mandatory snap-x overflow-x-auto hidden-scrollbar">
            <div className={"relative flex flex-col max-w-72 max-h-36 snap-center flex-shrink-0 mr-2 cursor-pointer duration-700 " + (isLoading ? "top-4 blur-md animate-pulse" : "group top-0")}>
              <Image src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                width={144}
                height={144}
                alt="Project"
                className={"w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-700 ease-in-out " + (isLoading ? "scale-75" : "blur-none")}
                loading="lazy"
                onLoadingComplete={() => setIsLoading(false)}
              />
              <div className="absolute left-0 bottom-4 flex flex-col max-w-full bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 p-1 group-hover:bg-opacity-0 group-hover:bottom-[-2rem] duration-200">
                <span className="text-sm text-neutral-800 dark:text-neutral-200 text-nowrap font-medium font-quicksand truncate">Project Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 text-nowrap font-medium font-quicksand truncate">Dec 05, 2023</span>
              </div>
            </div>
            <div className={"relative flex flex-col max-w-72 max-h-36 snap-center flex-shrink-0 mr-2 cursor-pointer duration-700 " + (isLoading ? "top-4 blur-md animate-pulse" : "group top-0")}>
              <Image
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                width={144}
                height={144}
                alt="Project"
                className={"w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-700 ease-in-out " + (isLoading ? "scale-75" : "blur-none")}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
              <div className="absolute left-0 bottom-4 flex flex-col max-w-full bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 p-1 group-hover:bg-opacity-0 group-hover:bottom-[-2rem] duration-200">
                <span className="text-sm text-neutral-800 dark:text-neutral-200 text-nowrap font-medium font-quicksand truncate">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, modi.</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 text-nowrap font-medium font-quicksand truncate">Dec 05, 2023</span>
              </div>
            </div>
            <div className={"relative flex flex-col max-w-72 max-h-36 snap-center flex-shrink-0 mr-2 cursor-pointer duration-700 " + (isLoading ? "top-4 blur-md animate-pulse" : "group top-0")}>
              <Image
                src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                width={144}
                height={144}
                alt="Project"
                className={"w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-700 ease-in-out " + (isLoading ? "scale-75" : "blur-none")}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
              <div className="absolute left-0 bottom-4 flex flex-col max-w-full bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 p-1 group-hover:bg-opacity-0 group-hover:bottom-[-2rem] duration-200">
                <span className="text-sm text-neutral-800 dark:text-neutral-200 text-nowrap font-medium font-quicksand truncate">Project Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 text-nowrap font-medium font-quicksand truncate">Dec 05, 2023</span>
              </div>
            </div>
            <div className={"relative flex flex-col max-w-72 max-h-36 snap-center flex-shrink-0 mr-2 cursor-pointer duration-700 " + (isLoading ? "top-4 blur-md animate-pulse" : "group top-0")}>
              <Image
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                width={144}
                height={144}
                alt="Project"
                className={"w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-700 ease-in-out " + (isLoading ? "scale-75" : "blur-none")}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
              <div className="absolute left-0 bottom-4 flex flex-col max-w-full bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 p-1 group-hover:bg-opacity-0 group-hover:bottom-[-2rem] duration-200">
                <span className="text-sm text-neutral-800 dark:text-neutral-200 text-nowrap font-medium font-quicksand truncate">Label Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil veritatis quas quam velit? Harum blanditiis eos odit fuga optio necessitatibus eligendi.</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 text-nowrap font-medium font-quicksand truncate">Dec 05, 2023</span>
              </div>
            </div>
            <div className={"relative flex flex-col max-w-72 max-h-36 snap-center flex-shrink-0 mr-2 cursor-pointer duration-700 " + (isLoading ? "top-4 blur-md animate-pulse" : "group top-0")}>
              <Image
                src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                width={144}
                height={144}
                alt="Project"
                className={"w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-700 ease-in-out " + (isLoading ? "scale-75" : "blur-none")}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
              <div className="absolute left-0 bottom-4 flex flex-col max-w-full bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 p-1 group-hover:bg-opacity-0 group-hover:bottom-[-2rem] duration-200">
                <span className="text-sm text-neutral-800 dark:text-neutral-200 text-nowrap font-medium font-quicksand truncate">Project Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 text-nowrap font-medium font-quicksand truncate">Dec 05, 2023</span>
              </div>
            </div>
            <div className={"relative flex flex-col max-w-72 max-h-36 snap-center flex-shrink-0 mr-2 cursor-pointer duration-700 " + (isLoading ? "top-4 blur-md animate-pulse" : "group top-0")}>
              <Image
                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                width={144}
                height={144}
                alt="Project"
                className={"w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-700 ease-in-out " + (isLoading ? "scale-75" : "blur-none")}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
              <div className="absolute left-0 bottom-4 flex flex-col max-w-full bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-70 p-1 group-hover:bg-opacity-0 group-hover:bottom-[-2rem] duration-200">
                <span className="text-sm text-neutral-800 dark:text-neutral-200 text-nowrap font-medium font-quicksand truncate">Project Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 text-nowrap font-medium font-quicksand truncate">Dec 05, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
