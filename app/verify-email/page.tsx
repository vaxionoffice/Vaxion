import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MailCheck } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ResendConfirmationForm } from "@/components/resend-confirmation-form";

export const metadata: Metadata = { title: "Verify your email" };

export default async function VerifyEmailPage({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const params = await searchParams;
  return (
    <main className="auth-page auth-page--utility">
      <div className="auth-page__visual" aria-hidden="true"><div className="auth-page__grid" /><div className="auth-page__orb"><span>VXN</span></div><div className="auth-page__line auth-page__line--one" /><div className="auth-page__line auth-page__line--two" /><div className="auth-page__caption">VAXION / VERIFY<br /><span>CONFIRM YOUR SIGNAL</span></div></div>
      <div className="auth-page__panel">
        <div className="auth-page__panel-top"><BrandMark /><Link className="back-link" href="/signup"><ArrowLeft size={15} /> Back to signup</Link></div>
        <div className="auth-page__form-area"><div className="auth-utility-icon"><MailCheck size={23} strokeWidth={1.4} /></div><span className="eyebrow"><span className="eyebrow__mark" />One last step</span><h1>Check your<br /><em>inbox.</em></h1><p className="auth-page__intro">Confirm your email to activate your Vaxion workspace. If it didn’t arrive, request a fresh link below.</p><ResendConfirmationForm initialEmail={params.email} /></div>
        <p className="auth-page__legal">Already confirmed? <Link href="/login">Enter Vaxion.</Link></p>
      </div>
    </main>
  );
}
