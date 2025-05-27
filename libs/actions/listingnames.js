import { createClient } from "@/lib/supabase/server";

export async function getAllListingNames() {
  const supabase = createClient();

  const { data: listings, error } = await supabase
    .from("cars")
    .select("id, model");

  if (error) {
    throw new Error(error.message);
  }

  return listings;
}