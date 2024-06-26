import type { MessagesProps } from "@/types/messages";
import Image from "next/image";

const baseurl = process.env.BASE_URL;

export function HisBubble({ data }: { data: MessagesProps }) {
  const { username, content, created_at } = data;

  return (
    <>
      <div className="flex min-h-10 flex-row gap-2 py-1">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={baseurl + "/images/_blankUser.png"}
            alt="profile"
            width={320}
            height={320}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex max-w-[60%] flex-col justify-start gap-1">
          <span className="font-quicksand text-xs font-bold">
            {username || "Anonymous"}
            <span className="px-2 text-neutral-400 dark:text-neutral-400">
              {created_at?.split(" ")[1] || "00:00"}
            </span>
          </span>
          <div className="flex w-full justify-start">
            <span className="h-fit w-fit overflow-hidden rounded-2xl rounded-tl-none bg-zinc-200 py-2 pl-4 pr-4 text-start text-xs text-black shadow-md dark:bg-zinc-800 dark:text-white">
              {content || "No Message"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export function MyBubble({ data }: { data: MessagesProps }) {
  const { username, content, created_at } = data;
  return (
    <>
      <div className="flex min-h-10 flex-row-reverse gap-2 py-1">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={baseurl + "/images/_blankUser.png"}
            alt="profile"
            width={320}
            height={320}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex max-w-[60%] flex-col justify-end gap-1">
          <span className="text-end font-quicksand text-xs font-bold">
            <span className="px-2 text-neutral-400 dark:text-neutral-400">
              {created_at?.split(" ")[1] || "00:00"}
            </span>
            {username || "Anonymous"}
          </span>
          <div className="flex w-full justify-end">
            <span className="h-fit w-fit overflow-hidden rounded-2xl rounded-tr-none bg-gradient-to-r from-indigo-600 to-purple-600 py-2 pl-4 pr-4 text-end text-xs text-white shadow-md dark:text-white">
              {content || "No Message"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
