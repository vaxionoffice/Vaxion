import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuthForm } from "@/components/auth-form";
import { BrandMark } from "@/components/brand-mark";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const params = await searchParams;
  const nextPath = params.next?.startsWith("/") && !params.next.startsWith("//") ? params.next : "/dashboard";
  return (
    <main className="auth-page">
      <div className="auth-page__visual" aria-hidden="true"><div className="auth-page__grid" /><div className="auth-page__orb"><span>VXN</span></div><div className="auth-page__line auth-page__line--one" /><div className="auth-page__line auth-page__line--two" /><div className="auth-page__caption">VAXION / SIGNAL 001<br /><span>THE WORK CONTINUES</span></div></div>
      <div className="auth-page__panel">
        <div className="auth-page__panel-top"><BrandMark /><Link className="back-link" href="/"><ArrowLeft size={15} /> Back to home</Link></div>
        <div className="auth-page__form-area"><span className="eyebrow"><span className="eyebrow__mark" />Member access</span><h1>Welcome<br /><em>back, founder.</em></h1><p className="auth-page__intro">Pick up where the signal left you.</p>{params.error && <div className="form-message form-message--error" role="alert">{params.error}</div>}<AuthForm mode="login" nextPath={nextPath} /></div>
        <p className="auth-page__legal">By continuing, you agree to build with intention. <Link href="mailto:hello@vaxion.co">Questions?</Link></p>
      </div>
    </main>
  );
}
