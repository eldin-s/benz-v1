import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const { data: session } = await supabase.auth.getUser();

//   const { pathname } = req.nextUrl;

//   if (!session && pathname === "/dashboard") {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   return NextResponse.next();
// }

export async function middleware(request) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/dashboard"],
};
