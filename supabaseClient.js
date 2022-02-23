import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL;
const anon = process.env.SUPABASE_ANON;

const supabase = createClient(`${url}`, `${anon}`);
export default supabase;