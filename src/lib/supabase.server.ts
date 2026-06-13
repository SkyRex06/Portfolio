import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client.
// IMPORTANT: For inserting to your table you typically need a service role key.
// This portfolio uses VITE_... variables (public anon key). That will ONLY work
// if your table has RLS configured to allow inserts from unauthenticated users.
// For secure production: use SUPABASE_SERVICE_ROLE_KEY instead.

export function getSupabaseServerClient() {
  const url = process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (!url) throw new Error("Missing VITE_SUPABASE_URL");
  if (!anonKey) throw new Error("Missing VITE_SUPABASE_PUBLISHABLE_KEY");

  return createClient(url, anonKey);
}

