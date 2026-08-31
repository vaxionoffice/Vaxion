import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { AuthForm } from "@/components/auth-form";
import { BrandMark } from "@/components/brand-mark";

export const metadata: Metadata = { title: "Start building" };

export default function SignupPage() {
  return (
    <main className="auth-page auth-page--signup">
      <div className="auth-page__visual" aria-hidden="true"><div className="auth-page__grid" /><div className="auth-page__orb"><span>VXN</span></div><div className="auth-page__line auth-page__line--one" /><div className="auth-page__line auth-page__line--two" /><div className="auth-page__caption">VAXION / CYCLE 001<br /><span>MAKE THE NEXT MOVE VISIBLE</span></div></div>
      <div className="auth-page__panel">
        <div className="auth-page__panel-top"><BrandMark /><Link className="back-link" href="/"><ArrowLeft size={15} /> Back to home</Link></div>
        <div className="auth-page__form-area"><span className="eyebrow"><span className="eyebrow__mark" />First cycle access</span><h1>Build what’s<br /><em>next.</em></h1><p className="auth-page__intro">Reserve your place in the first Vaxion workspace.</p><div className="signup-perks"><span><Check size={14} /> Founder-first tools</span><span><Check size={14} /> Signal over noise</span><span><Check size={14} /> Early access updates</span></div><AuthForm mode="signup" /></div>
        <p className="auth-page__legal">Already have access? <Link href="/login">Log in instead.</Link></p>
      </div>
    </main>
  );
}
