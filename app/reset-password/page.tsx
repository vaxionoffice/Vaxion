import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ResetPasswordForm } from "@/components/reset-password-form";

export const metadata: Metadata = { title: "Choose a new password" };

export default function ResetPasswordPage() {
  return (
    <main className="auth-page auth-page--utility">
      <div className="auth-page__visual" aria-hidden="true"><div className="auth-page__grid" /><div className="auth-page__orb"><span>VXN</span></div><div className="auth-page__line auth-page__line--one" /><div className="auth-page__line auth-page__line--two" /><div className="auth-page__caption">VAXION / RESET<br /><span>THE NEXT LAYER STARTS HERE</span></div></div>
      <div className="auth-page__panel">
        <div className="auth-page__panel-top"><BrandMark /><Link className="back-link" href="/login"><ArrowLeft size={15} /> Back to login</Link></div>
        <div className="auth-page__form-area"><span className="eyebrow"><span className="eyebrow__mark" />New credentials</span><h1>Set a new<br /><em>password.</em></h1><p className="auth-page__intro">Choose a password you can build with.</p><ResetPasswordForm /></div>
        <p className="auth-page__legal">Need another link? <Link href="/forgot-password">Start recovery again.</Link></p>
      </div>
    </main>
  );
}
