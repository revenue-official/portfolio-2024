import ConversationLayout from "@/components/Layouts/ConversationLayout";

export default function Conversation() {
    return (
        <ConversationLayout>
            <div className="flex flex-row h-full gap-2">
                {/* side container left */}
                <div className="w-1/3 bg-blue-500">
                    <div className="flex justify-center"></div>
                </div>
                {/* side container right */}
                <div className="w-full bg-gray-500"></div>
            </div>
        </ConversationLayout>
    );
}