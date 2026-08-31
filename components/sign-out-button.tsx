"use client";

import { LogOut, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function SignOutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function signOut() {
    if (!isSupabaseConfigured) return;
    setIsSigningOut(true);
    await createClient().auth.signOut();
    window.location.assign("/");
  }

  return (
    <button className="dashboard-signout" disabled={isSigningOut} onClick={signOut} type="button">
      {isSigningOut ? <LoaderCircle className="spin" size={16} /> : <LogOut size={16} />}
      <span>Sign out</span>
    </button>
  );
}
