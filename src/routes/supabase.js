import { createClient } from "@supabase/supabase-js";

//const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
//const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

const supabaseUrl= 'https://atcsbatgltwfolkrlbko.supabase.co'; 
const supabaseAnonKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0Y3NiYXRnbHR3Zm9sa3JsYmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU3MDQ5NzIsImV4cCI6MTk4MTI4MDk3Mn0.V01dUTz5gqIYfNNXFp20O4YKnlYCew0Hoy5sbPqImiM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);