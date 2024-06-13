import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  const cookieStore = cookies();
  const oneDay = 24 * 60 * 60 * 1000;

  return createServerClient(
    "https://nhmcejjijrztrdieybdu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obWNlamppanJ6dHJkaWV5YmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDU5NzEsImV4cCI6MjAzMDA4MTk3MX0.ckGgQjRcXidzmsf_05N4jMa4ez6MeR1hYSXoGtXqwoA",
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({
              name,
              value,
              ...options,
              maxAge: options.maxAge ? options.maxAge : oneDay,
            });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}

export const supabase = createClient();
