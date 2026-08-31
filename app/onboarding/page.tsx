import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { OnboardingForm } from "@/components/onboarding-form";
import { BrandMark } from "@/components/brand-mark";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Set up your workspace" };

export default async function OnboardingPage() {
  let email = "preview@vaxion.co";
  let name = "Alex Founder";
  let workspace = "";
  let stage = "";
  let focus = "";

  if (isSupabaseConfigured) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) redirect("/login?next=/onboarding");
    const metadata = data.user.user_metadata ?? {};
    email = data.user.email ?? email;
    name = (metadata.full_name as string | undefined) || email.split("@")[0] || name;
    workspace = (metadata.workspace_name as string | undefined) || "";
    stage = (metadata.founder_stage as string | undefined) || "";
    focus = (metadata.founder_focus as string | undefined) || "";
    if (metadata.onboarding_completed === true) redirect("/dashboard");
  }

  return (
    <main className="onboarding-page">
      <div className="onboarding-page__visual" aria-hidden="true"><div className="onboarding-page__image" /><div className="onboarding-page__grid" /><div className="onboarding-page__visual-copy"><span className="eyebrow"><span className="eyebrow__mark" />Vaxion / cycle 01</span><p>Every clear company<br /><em>starts with a clear signal.</em></p><span className="onboarding-page__coordinate">BUILDING WITH INTENTION<br />{email}</span></div></div>
      <div className="onboarding-page__panel">
        <header className="onboarding-page__header"><BrandMark /><Link className="back-link" href="/"><ArrowLeft size={15} /> Exit setup</Link></header>
        <div className="onboarding-page__content">
          <div className="onboarding-progress"><span className="eyebrow"><span className="eyebrow__mark" />First signal</span><span>01 <i /> 04</span></div>
          <h1>Give your<br /><em>signal a home.</em></h1>
          <p className="onboarding-page__intro">A few honest details help us shape a workspace around the season you&apos;re actually in.</p>
          <OnboardingForm initialFocus={focus} initialName={name} initialStage={stage} initialWorkspace={workspace} />
        </div>
        <p className="onboarding-page__footer">Private founder workspace <span>·</span> <Link href="mailto:hello@vaxion.pro">Need help? <ArrowUpRight size={12} /></Link></p>
      </div>
    </main>
  );
}
