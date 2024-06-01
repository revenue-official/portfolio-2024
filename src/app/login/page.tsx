// app/page.tsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>
      ) : (
        <div className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          <p>Welcome, {session?.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
}
