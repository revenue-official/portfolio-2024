'use client';

import { CircleUserRound, ElipsisVertical, Logout } from '@/components/Icon/DefaultIcons';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';

type SideProfileProps = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

export default function SideProfile() {
  const { data: session } = useSession();
  const [isDataUser, setIsDataUser] = useState<SideProfileProps>({
    name: null,
    email: null,
    image: null,
  });
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [originHostname, setOriginHostname] = useState<string>('');

  useEffect(() => {
    setOriginHostname(window.location.origin);
    if (session) {
      setIsDataUser(session.user as SideProfileProps);
    }
  }, [session, isDataUser]);

  const showProfileMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="hidden h-20 w-full md:flex">
      <div className="flex h-full w-full items-center justify-between">
        {isDataUser.name !== null ? (
          <>
            <Image
              src={isDataUser.image ?? originHostname + '/images/_blankUser.png'}
              alt="profile"
              width={30}
              height={30}
              className="aspect-square h-10 w-10 rounded-full border-2 border-neutral-200 dark:border-neutral-800"
            />
            <div className="flex h-full flex-col justify-center pl-2">
              <span className="w-40 truncate text-sm font-medium text-neutral-900 dark:text-neutral-200">
                {isDataUser.name ?? 'Username'}
              </span>
              <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-500">
                {isDataUser.email ?? 'Email'}
              </span>
            </div>
            <div className="relative flex flex-row">
              <button type="button" onClick={showProfileMenu}>
                <ElipsisVertical className="h-5 w-5" />
              </button>
              <div
                className={
                  'flex-col rounded-sm bg-light-100 shadow-lg duration-200 dark:bg-dark-100 ' +
                  (isShowMenu ? 'flex translate-x-4' : 'hidden')
                }
              >
                <Link
                  className="flex flex-row items-center justify-start gap-2 px-4 py-1 duration-300 hover:gap-4 hover:bg-light-50 dark:hover:bg-dark-50"
                  href="/profile"
                >
                  <CircleUserRound className="h-4 w-4 flex-shrink-0" />
                  <span className="font-poppins text-sm ">Profile</span>
                </Link>

                <button
                  className="flex flex-row items-center justify-start gap-2 px-4 py-1 duration-300 hover:gap-4 hover:bg-light-50 dark:hover:bg-dark-50"
                  type="button"
                  onClick={() => signOut()}
                >
                  <Logout className="h-4 w-4 flex-shrink-0" />
                  <span className="font-poppins text-sm ">Logout</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full justify-center">
              {/* modern button signin  */}
              <button
                className="w-32 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                onClick={() => signIn('google')}
              >
                Sign in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
