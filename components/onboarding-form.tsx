"use client";

import { ArrowRight, BriefcaseBusiness, Check, Compass, LoaderCircle, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

const stages = ["Idea stage", "Finding product-market fit", "Growing a team", "Scaling with intention"];

export function OnboardingForm({ initialName = "", initialWorkspace = "", initialStage = "", initialFocus = "" }: { initialName?: string; initialWorkspace?: string; initialStage?: string; initialFocus?: string }) {
  const [name, setName] = useState(initialName);
  const [workspace, setWorkspace] = useState(initialWorkspace);
  const [stage, setStage] = useState(initialStage || stages[0]);
  const [focus, setFocus] = useState(initialFocus);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!name.trim() || !workspace.trim() || !focus.trim()) {
      setMessage("Complete the three fields so we can tune your first workspace.");
      return;
    }

    setIsSubmitting(true);
    if (!isSupabaseConfigured) {
      window.localStorage.setItem("vaxion-demo-onboarding", "complete");
      window.setTimeout(() => window.location.assign("/dashboard"), 450);
      return;
    }

    const { error } = await createClient().auth.updateUser({
      data: {
        full_name: name.trim(),
        workspace_name: workspace.trim(),
        founder_stage: stage,
        founder_focus: focus.trim(),
        onboarding_completed: true,
      },
    });

    if (error) {
      setMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    window.location.assign("/dashboard");
  }

  return (
    <form className="onboarding-form" onSubmit={handleSubmit}>
      <div className="onboarding-form__fields">
        <label className="field"><span>Your name</span><div className="field__control"><Sparkles size={16} /><input autoComplete="name" onChange={(event) => setName(event.target.value)} placeholder="Ada Lovelace" required value={name} /></div></label>
        <label className="field"><span>Workspace name</span><div className="field__control"><BriefcaseBusiness size={16} /><input onChange={(event) => setWorkspace(event.target.value)} placeholder="Lumen Labs" required value={workspace} /></div></label>
        <label className="field"><span>Where are you in the build?</span><div className="field__control"><Compass size={16} /><select onChange={(event) => setStage(event.target.value)} value={stage}>{stages.map((option) => <option key={option} value={option}>{option}</option>)}</select></div></label>
        <label className="field"><span>What deserves your clearest attention right now?</span><div className="field__control field__control--textarea"><textarea maxLength={180} onChange={(event) => setFocus(event.target.value)} placeholder="Finding the one useful wedge for our first ten customers…" required rows={3} value={focus} /></div></label>
      </div>
      {message && <div className="form-message form-message--error" role="alert">{message}</div>}
      <div className="onboarding-form__footer"><span><Check size={14} /> You can change this later.</span><button className="button button--primary" disabled={isSubmitting} type="submit">{isSubmitting ? <LoaderCircle className="spin" size={17} /> : <>Open my workspace <ArrowRight size={16} /></>}</button></div>
    </form>
  );
}
