"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login({ email, password }) {
  const supabase = createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    throw new Error("Prijava je neuspešna");
  }

  revalidatePath("/", "dashboard");
  redirect("/");
}

export async function signup({ fullName, email, password, role = "user" }) {
  const supabase = createClient();
  const data = {
    email,
    password,
    options: {
      data: {
        fullName,
        role,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    throw new Error("Kreiranje naloga je neuspešno");
  }

  revalidatePath("/", "dashboard");
  redirect("/");
}

export async function logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Greška!");
  }
}
