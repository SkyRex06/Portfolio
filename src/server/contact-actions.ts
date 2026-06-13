import { getSupabaseServerClient } from "@/lib/supabase.server";

export type ContactMessageInput = {
  name: string;
  email: string;
  message: string;
};

export async function saveContactMessage(input: ContactMessageInput) {
  const supabase = getSupabaseServerClient();

  // Table name suggestion: contact_messages
  // Columns suggestion: name, email, message
  // If your table uses different column names, update here.
  const { error } = await supabase.from("contact_messages").insert({
    name: input.name,
    email: input.email,
    message: input.message,
  });

  if (error) throw error;
  return { ok: true };
}


