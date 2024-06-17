// Import tipe untuk proyek.
import type { MessagesProps } from "@/types/messagesprops";
import { supabase } from "@/utils/supabase/client";

// Fungsi asinkron untuk mengambil data dari URL.
export async function getMessagesData(): Promise<MessagesProps[]> {
  let { data: messages, error } = await supabase.from("messages").select("*");
  // console.log(messages);

  if (error) {
    console.error("Error fetching messages data:", error);
  }

  return messages as MessagesProps[];
}
