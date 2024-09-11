import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <section>
      <h1>Dashboard</h1>
      <p>Hello {data.user.email}</p>
    </section>
  );
};

export default Dashboard;
