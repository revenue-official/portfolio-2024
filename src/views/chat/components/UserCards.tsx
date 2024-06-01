import Image from 'next/image';
import Link from 'next/link';

interface UserCardsProps {
  className?: string;
  href?: string;
  image?: string;
  name?: string;
  message?: string;
  time?: string;
}

export default function UserCards({
  className = '',
  href = '',
  image,
  name,
  message,
  time,
}: UserCardsProps) {
  return (
    <Link
      href={href}
      className={`text-md inline-flex h-16 w-full items-center gap-2 rounded-xl bg-light-100 px-4 py-2 font-medium transition duration-200 ease-in-out focus:outline-none dark:bg-dark-100 ${className}`}
    >
      <div className="w-10 overflow-hidden rounded-full">
        <Image
          src={image ?? process.env.NEXT_URL! + '/images/_blankUser.png'}
          alt="image"
          width={320}
          height={320}
          loading="lazy"
          className="aspect-square h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col">
        <div className="flex h-full w-full flex-nowrap items-center justify-between">
          <span className="truncate text-nowrap text-xs font-semibold">{name ?? 'Username'}</span>
          <span className="text-nowrap text-xs text-neutral-500 dark:text-neutral-500">
            {time ?? 'Just now'}
          </span>
        </div>
        <span className="line-clamp-2 truncate text-wrap font-quicksand text-xs leading-4 text-neutral-600 dark:text-neutral-400">
          {message ?? 'User message'}
        </span>
      </div>
    </Link>
  );
}
