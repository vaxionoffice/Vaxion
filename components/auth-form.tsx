"use client";

import Link from "next/link";
import { ArrowRight, Check, Eye, EyeOff, LoaderCircle, LockKeyhole, Mail, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function AuthForm({ mode, nextPath = "/dashboard" }: { mode: "login" | "signup"; nextPath?: string }) {
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!isSupabaseConfigured) {
      setMessage({
        type: "error",
        text: "Demo mode is active. Add the Supabase variables in .env.local to enable authentication.",
      });
      return;
    }

    setIsSubmitting(true);
    const supabase = createClient();

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setMessage({ type: "error", text: error.message });
        setIsSubmitting(false);
        return;
      }

      if (data.user) {
        void fetch("/api/auth/welcome", {
          body: JSON.stringify({ email, name }),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        });
      }

      if (data.session) {
        window.location.assign(nextPath);
      } else {
        setMessage({
          type: "success",
          text: "You’re on the list. Check your inbox to confirm your email and enter Vaxion.",
        });
        setIsSubmitting(false);
      }
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage({ type: "error", text: error.message });
      setIsSubmitting(false);
      return;
    }

    window.location.assign(nextPath);
  }

  return (
    <div className="auth-form-wrap">
      {!isSupabaseConfigured && (
        <div className="demo-notice">
          <span className="demo-notice__dot" />
          <div><strong>Preview environment</strong><span>Connect Supabase to activate this form.</span></div>
        </div>
      )}
      <form className="auth-form" onSubmit={handleSubmit}>
        {isSignup && (
          <label className="field">
            <span>Your name</span>
            <div className="field__control">
              <UserRound size={17} />
              <input autoComplete="name" onChange={(event) => setName(event.target.value)} placeholder="Ada Lovelace" required value={name} />
            </div>
          </label>
        )}
        <label className="field">
          <span>Email address</span>
          <div className="field__control">
            <Mail size={17} />
            <input autoComplete="email" onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required type="email" value={email} />
          </div>
        </label>
        <label className="field">
          <span>Password <em>{isSignup ? "8+ characters" : ""}</em></span>
          <div className="field__control">
            <LockKeyhole size={17} />
            <input autoComplete={isSignup ? "new-password" : "current-password"} minLength={8} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" required type={showPassword ? "text" : "password"} value={password} />
            <button aria-label={showPassword ? "Hide password" : "Show password"} className="field__action" onClick={() => setShowPassword((show) => !show)} type="button">
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </label>
        {message && (
          <div className={`form-message form-message--${message.type}`} role="status">
            {message.type === "success" && <Check size={15} />}
            <span>{message.text}</span>
          </div>
        )}
        <button className="button button--primary button--full" disabled={isSubmitting} type="submit">
          {isSubmitting ? <LoaderCircle className="spin" size={17} /> : <>{isSignup ? "Create your account" : "Enter Vaxion"} <ArrowRight size={16} /></>}
        </button>
      </form>
      <p className="auth-switch">
        {isSignup ? "Already have an account?" : "New to Vaxion?"}{" "}
        <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Log in" : "Request access"}</Link>
      </p>
    </div>
  );
}
