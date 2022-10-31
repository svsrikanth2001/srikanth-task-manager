import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://cjsefhmavyismyfivarj.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqc2VmaG1hdnlpc215Zml2YXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyMDY3NjcsImV4cCI6MTk3OTc4Mjc2N30.h8oMWPg0g10axtU7KxmVd290OtFawN17fP9CxiU_PAw";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
