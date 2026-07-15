import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ylvhhlykyojudldcmzou.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsdmhobHlreW9qdWRsZGNtem91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMjkzNzUsImV4cCI6MjA5OTYwNTM3NX0.iiSRHo_fnDvFHtwEYPGXPHr7YYw6HeWU-LHKL1u2heM";

// Note: intentionally untyped (no <Database> generic) to avoid TS2589
// "type instantiation excessively deep" caused by the very large generated
// Database type. Runtime behavior is identical to the main client.
export const customerPortalSupabase: SupabaseClient<any, 'public', any> = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);
