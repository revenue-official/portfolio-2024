import Image from "next/image";

export default function SideHeader() {
    return (
        <div className="flex items-center justify-center mt-2 cursor-default h-14">
            <Image
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="TailwindCSS"
                width={100}
                height={100}
                priority
                className="w-5 h-5"
            />
            <div className="flex-col justify-center hidden pt-1 md:flex">
                <span className="h-5 ml-2 text-lg font-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text font-quicksand text-nowrap">
                    RevCodes.
                </span>
                <span className="ml-2 h-5 text-[10px] font-bold font-mono text-neutral-500 text-nowrap">
                    Web Development
                </span>
            </div>
        </div>
    );
}