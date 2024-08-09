"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function SideHeader() {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000");
  }, [setBaseUrl]);

  return (
    <div className="mt-2 flex h-14 cursor-default items-center justify-center">
      <Image
        src={baseUrl + "/images/rc-logo-nobg.png"}
        alt="TailwindCSS"
        width={100}
        height={100}
        priority
        className="h-9 w-9 rounded-full border-2 border-indigo-500 p-1"
      />
      <div className="hidden flex-col justify-center pt-1 md:flex">
        <span className="ml-2 h-6 text-nowrap font-poppins text-lg font-bold text-black dark:text-white">
          RevCodes.
        </span>
        <span className="ml-2 h-5 text-nowrap font-mono text-[10px] font-bold text-neutral-400">
          Web Development
        </span>
      </div>
    </div>
  );
}
