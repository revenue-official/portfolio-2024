import { ReactNode } from "react";

interface ConversationLayoutProps {
    children?: ReactNode
}

export default function ConversationLayout({ children }: ConversationLayoutProps) {
    return (
        <div className="w-full h-screen max-h-screen mx-auto overflow-hidden">
            {children}
        </div>
    );
}