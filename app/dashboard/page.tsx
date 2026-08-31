import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard-shell";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "Founder workspace" };

export default async function DashboardPage() {
  let email = "preview@vaxion.co";
  let name = "Alex Founder";

  if (isSupabaseConfigured) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      redirect("/login?next=/dashboard");
    }
    email = data.user.email ?? email;
    name = (data.user.user_metadata?.full_name as string | undefined) || email.split("@")[0] || name;
  }

  return <DashboardShell email={email} name={name} />;
}
