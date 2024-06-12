import { ReactNode } from "react";

interface ConversationLayoutProps {
  children?: ReactNode;
}

export default function ConversationLayout({
  children,
}: ConversationLayoutProps) {
  return (
    <div className="mx-auto h-screen max-h-screen w-full overflow-hidden px-4">
      {children}
    </div>
  );
}
