import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ForgotPasswordForm } from "@/components/forgot-password-form";

export const metadata: Metadata = { title: "Reset your password" };

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page auth-page--utility">
      <div className="auth-page__visual" aria-hidden="true"><div className="auth-page__grid" /><div className="auth-page__orb"><span>VXN</span></div><div className="auth-page__line auth-page__line--one" /><div className="auth-page__line auth-page__line--two" /><div className="auth-page__caption">VAXION / RECOVERY<br /><span>RETURN TO THE SIGNAL</span></div></div>
      <div className="auth-page__panel">
        <div className="auth-page__panel-top"><BrandMark /><Link className="back-link" href="/login"><ArrowLeft size={15} /> Back to login</Link></div>
        <div className="auth-page__form-area"><span className="eyebrow"><span className="eyebrow__mark" />Account recovery</span><h1>Find your<br /><em>way back.</em></h1><p className="auth-page__intro">Enter your account email and we’ll send a secure reset link.</p><ForgotPasswordForm /></div>
        <p className="auth-page__legal">Remembered your password? <Link href="/login">Return to login.</Link></p>
      </div>
    </main>
  );
}
