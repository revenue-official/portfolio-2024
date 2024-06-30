"use client";

import Link from "next/link";
import Image from "next/image";
import TypingAnimation from "@/components/Elements/TypingAnimation";
import { GitHub, Instagram, TikTok } from "@/components/Icon/DefaultIcons";

export default function Introduction({ sectionRef }: { sectionRef: any }) {
  const phrases = [
    "Hello, I'm ",
    "Teguh Ersyarudin",
    "Fullstack Developer",
    "Web Developer",
  ];
  const nonDeletableIndices = [0];
  return (
    <section id="home" ref={sectionRef} className="min-h-screen w-full">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="h-40 w-40">
          <Image
            src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="teguh"
            width={200}
            height={200}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <TypingAnimation
          phrases={phrases}
          typingSpeed={100}
          deletingSpeed={50}
          delayAfterTyping={3000}
          delayAfterDeleting={3000}
          nonDeletableIndices={nonDeletableIndices}
          className="text-nowrap pt-10 font-poppins text-lg font-bold text-zinc-800 dark:text-white md:text-4xl"
        />
        <div className="flex h-fit md:mb-4">
          <ul className="font-comfortaa flex list-inside list-disc gap-2 md:gap-4">
            {/* betikan dot/bulatan  */}
            <li className="font-poppins text-sm font-medium text-neutral-600 dark:text-neutral-400">
              IT student
            </li>
            <li className="font-poppins text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Based in Indonesia
            </li>
          </ul>
        </div>
        <div className="mt-4 flex gap-4">
          <Link target="_blank" href={"https://instagram.com"}>
            <Instagram className="h-5 w-5 fill-zinc-800 dark:fill-white" />
          </Link>
          <Link target="_blank" href={"https://tiktok.com"}>
            <TikTok className="h-5 w-5 fill-zinc-800 dark:fill-white" />
          </Link>
          <Link target="_blank" href={"https://github.com/revenue-official"}>
            <GitHub className="h-5 w-5 fill-zinc-800 dark:fill-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
