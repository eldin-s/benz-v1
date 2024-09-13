"use server";

import { supabaseUrl } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";

export async function createListing(newCar) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("cars")
    .insert([{ ...newCar, car_images: newCar.images }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Nije moguće objaviti oglas. Probajte ponovo");
  }

  return data;
}
