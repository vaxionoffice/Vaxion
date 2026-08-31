"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep this hook ready for error monitoring without exposing server details to users.
  }, []);

  return (
    <main className="system-page">
      <div className="system-page__grid" aria-hidden="true" />
      <div className="system-page__orb system-page__orb--error" aria-hidden="true"><span>!</span></div>
      <div className="system-page__content">
        <BrandMark />
        <span className="eyebrow"><span className="eyebrow__mark" />Temporary interruption</span>
        <h1>The signal<br /><em>lost its shape.</em></h1>
        <p>Something interrupted this view. Try the request again, or return to the Vaxion home signal.</p>
        <div className="system-page__actions"><button className="button button--primary" onClick={() => reset()} type="button">Try again <RefreshCw size={16} /></button><Link className="text-link" href="/"><ArrowLeft size={15} /> Return home</Link></div>
      </div>
      <span className="system-page__code">VXN / 500 / RECALIBRATING</span>
    </main>
  );
}
