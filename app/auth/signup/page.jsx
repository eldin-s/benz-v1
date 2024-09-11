import SignupForm from "@/components/auth/signup-form";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const Signup = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/dashboard");
  }
  return <SignupForm />;
};

export default Signup;
