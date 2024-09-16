"use server";

import { createClient } from "@/lib/supabase/server";

const supabase = createClient();

export async function createListing(newCar) {
  const { data, error } = await supabase
    .from("cars")
    .insert([{ ...newCar }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Nije moguće objaviti oglas. Probajte ponovo");
  }

  return data;
}

export async function getListingsForUser(userId) {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .eq("profile_id", userId);

  if (error) {
    throw new Error("Trenutno nije moguće pokazati oglase");
  }

  return cars;
}

export async function getSignleCar(carId) {
  const { data: car, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", carId)
    .single();

  if (error) {
    throw new Error("Trenutno nije moguće pokazati detalje oglasa");
  }

  return car;
}

export async function get5Cars() {
  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .range(0, 4);

  if (error) {
    throw new Error("Trenutno nije moguće pokazati oglase");
  }

  return cars;
}

export async function getAllCars() {
  const { data: cars, error } = await supabase.from("cars").select("*");

  if (error) {
    throw new Error("Trenutno nije moguće pokazati oglase");
  }

  return cars;
}