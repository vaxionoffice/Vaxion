"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";

const links = [
  { href: "#signal", label: "The signal" },
  { href: "#method", label: "The method" },
  { href: "#founders", label: "For founders" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark />
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <Link className="header-login" href="/login">
            Log in
          </Link>
          <Link className="button button--small button--ghost" href="/signup">
            Start building <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
        </div>
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-nav">
          <div className="container mobile-nav__inner">
            {links.map((link) => (
              <Link href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link className="button button--small button--ghost" href="/signup" onClick={() => setIsOpen(false)}>
              Start building <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
