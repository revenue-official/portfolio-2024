import Image from 'next/image';

export function HisBubble() {
  return (
    <>
      <div className="flex min-h-10 flex-row gap-2 py-2">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={process.env.APP_URL! + '/images/_blankUser.png'}
            alt="profile"
            width={320}
            height={320}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex max-w-[60%] flex-col gap-2">
          <span className="font-quicksand text-xs font-bold">
            John doe<span className="px-2 text-neutral-400 dark:text-neutral-400">17:30</span>
          </span>
          <span className="h-fit w-fit overflow-hidden rounded-2xl rounded-tl-none bg-zinc-200 py-2 pl-4 pr-8 text-xs text-black shadow-md dark:bg-zinc-800 dark:text-white">
            Hi bro, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, omnis. Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </>
  );
}

export function MyBubble() {
  return (
    <>
      <div className="flex min-h-10 flex-row-reverse gap-2 py-2">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={process.env.APP_URL! + '/images/_blankUser.png'}
            alt="profile"
            width={320}
            height={320}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex max-w-[60%] flex-col gap-2">
          <span className="text-end font-quicksand text-xs font-bold">
            <span className="px-2 text-neutral-400 dark:text-neutral-400">17:40</span>Anira Quic
          </span>
          <span className="h-fit w-fit overflow-hidden rounded-2xl rounded-tr-none bg-gradient-to-r from-indigo-600 to-purple-600 py-2 pl-4 pr-8 text-xs text-white shadow-md dark:text-white">
            Hi moon Lorem ipsum dolor sit amet{' '}
          </span>
        </div>
      </div>
    </>
  );
}
