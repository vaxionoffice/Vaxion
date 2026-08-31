import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <BrandMark />
            <p className="site-footer__note">A clearer operating rhythm for people building the future.</p>
          </div>
          <div className="site-footer__links">
            <div>
              <span className="footer-label">Explore</span>
              <Link href="#signal">The signal</Link>
              <Link href="#method">The method</Link>
              <Link href="/signup">Early access <ArrowUpRight size={13} /></Link>
            </div>
            <div>
              <span className="footer-label">Connect</span>
              <a href="mailto:hello@vaxion.co">Email the team</a>
              <Link href="/login">Member login</Link>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Vaxion Office</span>
          <span className="footer-status"><span className="live-dot" /> Systems in formation</span>
        </div>
      </div>
    </footer>
  );
}
