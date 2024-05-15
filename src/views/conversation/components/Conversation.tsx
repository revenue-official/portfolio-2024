import ConversationLayout from "@/components/Layouts/ConversationLayout";
import UsersList from "./UsersList";
import UserListHeader from "./SearchUsers";
import Image from "next/image";
import { MessageCircleOff, Send } from "@/components/Icon/DefaultIcons";
import { HisBubble, MyBubble } from "./MessageBubbles";

export default function Conversation() {
    return (
        <ConversationLayout>
            <div className="flex flex-row h-full gap-4 pr-4">
                {/* side container left */}
                <div className="w-full bg-transparent max-w-72">
                    <UserListHeader />
                    {/* List users  */}
                    <UsersList />
                </div>
                {/* side container right */}
                <div className="flex flex-col w-full gap-2 py-2">
                    {/* Header user  */}
                    <div className="w-full h-16 overflow-hidden bg-light-100 dark:bg-dark-100 rounded-xl">
                        <div className="flex items-center h-full px-4">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="profile"
                                    width={320}
                                    height={320}
                                    className="object-cover w-full h-full aspect-square"
                                />
                            </div>
                            <div className="flex flex-col px-4">
                                <span className="h-5 font-semibold text-md font-poppins text-neutral-900 dark:text-neutral-100">Username</span>
                                <span className="text-xs ">@username</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full p-2 overflow-hidden bg-light-100 dark:bg-dark-100 rounded-xl">
                        {/* chat container  */}
                        <div className="w-full h-full">
                            {/* his message  */}
                            {/* <HisBubble /> */}
                            {/* my message */}
                            {/* <MyBubble /> */}
                            <div className="flex flex-col items-center justify-center h-full gap-2">
                                <MessageCircleOff className="w-32 h-32 text-neutral-200 dark:text-neutral-800" />
                                <span className="text-2xl font-bold font-poppins text-neutral-200 dark:text-neutral-800">No messages</span>
                            </div>
                        </div>
                        <div className="w-full py-2">
                            <label className="relative flex w-full px-2 cursor-text">
                                <input className="block w-full py-2 pl-3 pr-3 text-sm outline-none rounded-xl sm:text-sm peer bg-light-50 dark:bg-dark-50" type="text" name="search" required />
                                <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-6 peer-valid:hidden">
                                    <span className="text-sm font-quicksand text-neutral-400 dark:text-neutral-600">Type your message</span>
                                </div>
                                <button className="px-4 duration-200 text-neutral-400 dark:text-neutral-600 hover:text-blue-500 dark:hover:text-blue-500" type="submit">
                                    <Send className="w-5 h-5" />
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </ConversationLayout>
    );
}