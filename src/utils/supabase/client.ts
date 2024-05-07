
import { createBrowserClient } from "@supabase/ssr";

const createClient = () =>
    createBrowserClient(
        "https://nhmcejjijrztrdieybdu.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5obWNlamppanJ6dHJkaWV5YmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDU5NzEsImV4cCI6MjAzMDA4MTk3MX0.ckGgQjRcXidzmsf_05N4jMa4ez6MeR1hYSXoGtXqwoA",
    );


export const supabase = createClient();
