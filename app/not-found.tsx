import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

export default function NotFound() {
  return (
    <main className="system-page">
      <div className="system-page__grid" aria-hidden="true" />
      <div className="system-page__orb" aria-hidden="true"><span>404</span></div>
      <div className="system-page__content">
        <BrandMark />
        <span className="eyebrow"><span className="eyebrow__mark" />Signal not found</span>
        <h1>This path<br /><em>is still forming.</em></h1>
        <p>The page you’re looking for moved beyond the current map. Return to the Vaxion signal and keep building forward.</p>
        <div className="system-page__actions"><Link className="button button--primary" href="/">Return home <ArrowLeft size={16} /></Link><Link className="text-link" href="/signup">Enter the first cycle <ArrowUpRight size={15} /></Link></div>
      </div>
      <span className="system-page__code">VXN / 404 / NEXT MOVE VISIBLE</span>
    </main>
  );
}
