import Image from "next/image";
import Link from "next/link";

interface UserCardsProps {
    className?: string
    href?: string
    image?: string
    name?: string
    message?: string
    time?: string
}

export default function UserCards({ className = "", href = "", image, name, message, time }: UserCardsProps) {
    return (
        <Link
            href={href}
            className={`inline-flex w-full items-center px-4 py-2 h-16 text-md font-medium transition duration-200 ease-in-out focus:outline-none bg-light-100 dark:bg-dark-100 gap-2 rounded-xl ${className}`}
        >
            <div className="w-10 overflow-hidden rounded-full">
                <Image
                    src={image ?? process.env.NEXTAUTH_URL! + "/images/_blankUser.png"}
                    alt="image"
                    width={320}
                    height={320}
                    loading="lazy"
                    className="object-cover w-full h-full aspect-square"
                />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full h-full flex-nowrap">
                    <span className="text-xs font-semibold truncate text-nowrap">{name ?? "Username"}</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500 text-nowrap">{time ?? "Just now"}</span>
                </div>
                <span className="text-xs leading-4 truncate text-wrap line-clamp-2 font-quicksand text-neutral-600 dark:text-neutral-400">{message ?? "User message"}</span>
            </div>
        </Link >
    );
}