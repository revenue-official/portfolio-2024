import ConversationLayout from "@/components/Layouts/ChatLayout";
import UsersList from "./UsersList";
import UserListHeader from "./SearchUsers";
import Image from "next/image";
import { MessageCircleOff, Send } from "@/components/Icon/DefaultIcons";
import { HisBubble, MyBubble } from "./MessageBubbles";
import type { MessagesDataProps } from "@/types/messagedataprops";
import BackButton from "@/components/Elements/Button/BackButton";

// based url
const baseurl = process.env.BASE_URL;

export async function fetchMessageData() {
  const res = await fetch(`${baseurl}/data/exMessagesData.json`);
  const data = await res.json();
  return data;
}

export default async function Chat() {
  const MessagesData: MessagesDataProps[] = await fetchMessageData();

  // shorting by created_at in typesscript
  const MessagesDataSorting = MessagesData.sort((a, b) => {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });

  // console.log(MessagesDataSorting);

  return (
    <ConversationLayout>
      <div className="flex h-full flex-row gap-4 pr-4">
        {/* side container left */}
        <div className="w-full max-w-72 bg-transparent">
          <BackButton />
          <UserListHeader />
          {/* List users  */}
          <UsersList />
        </div>
        {/* side container right */}
        <div className="flex w-full flex-col gap-2 py-2">
          {/* Header user  */}
          <div className="h-16 w-full overflow-hidden rounded-xl bg-light-100 dark:bg-dark-100">
            <div className="flex h-full items-center px-4">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profile"
                  width={320}
                  height={320}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col px-4">
                <span className="text-md h-5 font-poppins font-semibold text-neutral-900 dark:text-neutral-100">
                  Username
                </span>
                <span className="text-xs ">@username</span>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col overflow-hidden rounded-xl bg-light-100 p-4 dark:bg-dark-100">
            {/* chat container  */}
            <div className="h-full w-full">
              {MessagesDataSorting.map((data, index: number) => {
                const { username, content, created_at, sender_id } = data;

                if (sender_id === "1234") {
                  return (
                    <HisBubble
                      key={index}
                      username={username}
                      content={content}
                      created_at={created_at}
                    />
                  );
                }
                if (sender_id === "5555") {
                  return (
                    <MyBubble
                      key={index}
                      username={username}
                      content={content}
                      created_at={created_at}
                    />
                  );
                }
              })}
              <div
                className={
                  "flex h-full flex-col items-center justify-center gap-2 " +
                  (MessagesData.length ? "hidden" : "")
                }
              >
                <MessageCircleOff className="h-32 w-32 text-neutral-200 dark:text-neutral-800" />
                <span className="font-poppins text-2xl font-bold text-neutral-200 dark:text-neutral-800">
                  No messages
                </span>
              </div>
            </div>
            <div className="w-full py-2">
              <label className="relative flex w-full cursor-text px-2">
                <input
                  className="peer block w-full rounded-xl bg-light-50 py-2 pl-3 pr-3 text-sm outline-none focus:border focus:border-indigo-600 dark:bg-dark-50 sm:text-sm"
                  type="text"
                  name="search"
                  required
                  autoComplete="off"
                />
                <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-6 peer-valid:hidden">
                  <span className="font-quicksand text-sm text-neutral-400 dark:text-neutral-600">
                    Type your message
                  </span>
                </div>
                <button
                  className="px-4 text-neutral-400 duration-200 hover:text-blue-500 dark:text-neutral-600 dark:hover:text-blue-500"
                  type="submit"
                >
                  <Send className="h-5 w-5" />
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </ConversationLayout>
  );
}
