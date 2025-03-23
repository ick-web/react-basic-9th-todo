import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables } from "../database.types";

export type Todo = Tables<"todos">;

export type Supabase = SupabaseClient<Database>;
