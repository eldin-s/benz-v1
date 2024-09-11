import SigninForm from "@/components/auth/signin-form";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const Login = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/dashboard");
  }

  return <SigninForm />;
};

export default Login;
