"use server";

import { createClient } from "@/lib/supabase/server";

const supabase = createClient();

export async function getCarsWithFilters({
  yearRange,
  priceRange,
  fuelType,
  carType,
  carState,
}) {
  let query = supabase.from("cars").select("*");

  // Apply filters if they are provided
  if (yearRange?.min !== undefined || yearRange?.max !== undefined) {
    query = query
      .gte("production_year", yearRange?.min || 0)
      .lte("production_year", yearRange?.max || 9999);
  }

  if (
    priceRange?.min !== undefined ||
    priceRange?.max !== undefined ||
    priceRange?.max === "50000+"
  ) {
    if (priceRange?.max === "50000+") {
      query = query.gte("price", priceRange?.min || 0);
    } else {
      query = query
        .gte("price", priceRange?.min || 0)
        .lte(
          "price",
          priceRange?.max !== undefined ? priceRange.max : Infinity
        );
    }
  }

  if (fuelType) {
    query = query.eq("fuel_type", fuelType);
  }

  if (carType) {
    query = query.eq("car_type", carType);
  }

  if (carState) {
    query = query.eq("car_state", carState);
  }

  const { data: cars, error } = await query;
  if (error) {
    throw new Error(error.message);
  }

  return cars;
}
