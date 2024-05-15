import Image from "next/image";

export function HisBubble() {
    return (
        <>
            <div className="flex flex-row gap-2 py-2 min-h-10">
                <div className="w-10 h-10 overflow-hidden rounded-full">
                    <Image
                        src={process.env.APP_URL! + "/images/_blankUser.png"}
                        alt="profile"
                        width={320}
                        height={320}
                        className="object-cover w-full h-full aspect-square"
                    />
                </div>
                <div className="flex flex-col gap-2 max-w-[60%]">
                    <span className="text-xs font-bold font-quicksand">John doe<span className="px-2 text-neutral-400 dark:text-neutral-400">17:30</span></span>
                    <span className="py-2 pl-4 pr-8 overflow-hidden text-xs text-black rounded-tl-none shadow-md bg-zinc-200 dark:text-white rounded-2xl w-fit h-fit dark:bg-zinc-800">Hi bro, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, omnis. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
            </div>
        </>
    );
}

export function MyBubble() {
    return (
        <>
            <div className="flex flex-row-reverse gap-2 py-2 min-h-10">
                <div className="w-10 h-10 overflow-hidden rounded-full">
                    <Image
                        src={process.env.APP_URL! + "/images/_blankUser.png"}
                        alt="profile"
                        width={320}
                        height={320}
                        className="object-cover w-full h-full aspect-square"
                    />
                </div>
                <div className="flex flex-col gap-2 max-w-[60%]">
                    <span className="text-xs font-bold font-quicksand text-end"><span className="px-2 text-neutral-400 dark:text-neutral-400">17:40</span>Anira Quic</span>
                    <span className="py-2 pl-4 pr-8 overflow-hidden text-xs text-white rounded-tr-none shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 dark:text-white rounded-2xl w-fit h-fit">Hi moon Lorem ipsum dolor sit amet </span>
                </div>
            </div>
        </>
    );
}    