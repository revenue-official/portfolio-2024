"use client";

import {
  CircleUserRound,
  ElipsisVertical,
  Logout,
} from "@/components/Icon/DefaultIcons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SideProfileProps {
  username?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export default function SideProfile() {
  const router = useRouter();
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [originHostname, setOriginHostname] = useState<string>("");
  const [isDataUser, setIsDataUser] = useState<SideProfileProps>({
    username: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    const hostname = window.location.origin;
    setOriginHostname(hostname);

    async function getUserData() {
      const data = {
        user_metadata: {
          username: "",
          email: "",
          image: "",
        },
      };

      setIsDataUser(
        data?.user_metadata ?? {
          username: "",
          email: "",
          image: "",
        },
      );
    }

    getUserData();
  }, []);

  const showProfileMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="hidden h-20 w-full md:flex">
      <div className="flex h-full w-full items-center justify-between">
        {isDataUser?.username ? (
          <>
            <Image
              src={
                isDataUser?.image ?? originHostname + "/images/_blankUser.png"
              }
              alt="profile"
              width={30}
              height={30}
              className="aspect-square h-10 w-10 rounded-full border-2 border-neutral-200 dark:border-neutral-800"
            />
            <div className="flex h-full flex-col justify-center pl-2">
              <span className="w-40 truncate text-sm font-medium text-neutral-900 dark:text-neutral-200">
                {isDataUser?.username ?? "Username"}
              </span>
              <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-500">
                {isDataUser?.email ?? "Email"}
              </span>
            </div>
            <div className="relative flex flex-row">
              <button type="button" onClick={showProfileMenu}>
                <ElipsisVertical className="h-5 w-5" />
              </button>
              <div
                className={
                  "flex-col rounded-sm bg-light-100 shadow-lg duration-200 dark:bg-dark-100 " +
                  (isShowMenu ? "flex translate-x-4" : "hidden")
                }
              >
                <Link
                  className="flex flex-row items-center justify-start gap-2 px-4 py-1 duration-300 hover:gap-4"
                  href="/profile"
                >
                  <CircleUserRound className="h-4 w-4 flex-shrink-0" />
                  <span className="font-poppins text-sm ">Profile</span>
                </Link>

                <button
                  className="flex flex-row items-center justify-start gap-2 px-4 py-1 duration-300 hover:gap-4"
                  type="button"
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
                type="button"
                className="group relative w-32 rounded border border-indigo-600 px-4 py-2 font-bold  text-dark-50 duration-200 dark:text-light-50"
                onClick={() => router.push("/auth")}
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
