// app/page.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
    const { data: session } = useSession();
    console.log("🚀 ~ LoginPage ~ session:", session)

    return (
        <div>
            {!session ? (
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={() => signIn("google")}>Sign in with Google</button>
            ) : (
                <div className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    <p>Welcome, {session?.user?.name}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            )}
        </div>
    );
}
