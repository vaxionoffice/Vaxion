"use client";

import { ArrowRight, Check, LoaderCircle, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function ResendConfirmationForm({ initialEmail = "" }: { initialEmail?: string }) {
  const [email, setEmail] = useState(initialEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!isSupabaseConfigured) {
      setMessage({ type: "error", text: "Demo mode is active. Add the Supabase variables in .env.local to resend confirmation emails." });
      return;
    }

    setIsSubmitting(true);
    const callback = new URL("/auth/callback", window.location.origin);
    const { error } = await createClient().auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo: callback.toString() },
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({ type: "success", text: "A fresh confirmation link is on its way." });
    }
    setIsSubmitting(false);
  }

  return (
    <div className="auth-form-wrap">
      {!isSupabaseConfigured && <div className="demo-notice"><span className="demo-notice__dot" /><div><strong>Preview environment</strong><span>Connect Supabase to activate confirmation emails.</span></div></div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="field"><span>Email address</span><div className="field__control"><Mail size={17} /><input autoComplete="email" onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required type="email" value={email} /></div></label>
        {message && <div className={`form-message form-message--${message.type}`} role="status">{message.type === "success" && <Check size={15} />}<span>{message.text}</span></div>}
        <button className="button button--primary button--full" disabled={isSubmitting} type="submit">{isSubmitting ? <LoaderCircle className="spin" size={17} /> : <>Resend confirmation <ArrowRight size={16} /></>}</button>
      </form>
    </div>
  );
}
