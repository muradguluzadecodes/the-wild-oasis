import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jwmkeejdythtohrxbphn.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3bWtlZWpkeXRodG9ocnhicGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMDA2OTEsImV4cCI6MjAxNTU3NjY5MX0.qrdhnw1tohxqEhd7C9wejIdDozWftZ_uIRgByUXqnwI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
