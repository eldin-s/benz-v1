import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import DashboardLayout from "./dashboard-layout";

const Dashboard = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <section className="mt-20 max-w-[80rem] mx-auto px-9">
      <DashboardLayout userId={data?.user?.id} />
    </section>
  );
};

export default Dashboard;
