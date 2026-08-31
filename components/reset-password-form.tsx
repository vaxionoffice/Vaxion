"use client";

import { ArrowRight, Check, Eye, EyeOff, LoaderCircle, LockKeyhole } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasSession, setHasSession] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setHasSession(false);
      return;
    }
    createClient().auth.getSession().then(({ data }) => setHasSession(Boolean(data.session)));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    if (password.length < 8) {
      setMessage({ type: "error", text: "Your new password must be at least 8 characters." });
      return;
    }
    if (password !== confirmation) {
      setMessage({ type: "error", text: "The passwords do not match." });
      return;
    }
    if (!isSupabaseConfigured) {
      setMessage({ type: "error", text: "Demo mode is active. Add the Supabase variables in .env.local to update your password." });
      return;
    }

    setIsSubmitting(true);
    const { error } = await createClient().auth.updateUser({ password });
    if (error) {
      setMessage({ type: "error", text: error.message });
      setIsSubmitting(false);
      return;
    }
    setMessage({ type: "success", text: "Your password has been updated. Redirecting to your workspace…" });
    window.setTimeout(() => window.location.assign("/dashboard"), 800);
  }

  return (
    <div className="auth-form-wrap">
      {!isSupabaseConfigured && <div className="demo-notice"><span className="demo-notice__dot" /><div><strong>Preview environment</strong><span>Connect Supabase to activate password updates.</span></div></div>}
      {hasSession === false && isSupabaseConfigured && <div className="form-message form-message--error" role="alert">Open the reset link from your email in this browser before choosing a new password.</div>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="field"><span>New password <em>8+ characters</em></span><div className="field__control"><LockKeyhole size={17} /><input autoComplete="new-password" minLength={8} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" required type={showPassword ? "text" : "password"} value={password} /><button aria-label={showPassword ? "Hide password" : "Show password"} className="field__action" onClick={() => setShowPassword((show) => !show)} type="button">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>
        <label className="field"><span>Confirm password</span><div className="field__control"><LockKeyhole size={17} /><input autoComplete="new-password" minLength={8} onChange={(event) => setConfirmation(event.target.value)} placeholder="••••••••" required type={showPassword ? "text" : "password"} value={confirmation} /></div></label>
        {message && <div className={`form-message form-message--${message.type}`} role="status">{message.type === "success" && <Check size={15} />}<span>{message.text}</span></div>}
        <button className="button button--primary button--full" disabled={isSubmitting || hasSession !== true} type="submit">{isSubmitting ? <LoaderCircle className="spin" size={17} /> : <>Update password <ArrowRight size={16} /></>}</button>
      </form>
    </div>
  );
}
