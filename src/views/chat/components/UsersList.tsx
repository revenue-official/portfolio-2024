import UserCards from "./UserCards";

export default function UsersList() {
  const baseurl = process.env.BASE_URL;

  return (
    <section className="flex h-full justify-center">
      <div className="h-full w-full">
        {/*global chat */}
        <>
          <UserCards
            name="Global Chats"
            image={baseurl + "/images/earth-icon.png"}
            href="/chat"
          />
        </>
        <UserCards href="" />
      </div>
    </section>
  );
}
