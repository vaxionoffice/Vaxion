import Link from "next/link";
import { ArrowUpRight, Bell, Blocks, Compass, FileText, LayoutGrid, Settings, Target } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { SignOutButton } from "@/components/sign-out-button";
import { getFirstName, getInitials } from "@/lib/utils";

const navItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: Target, label: "Direction", soon: true },
  { icon: Compass, label: "Signals", soon: true },
  { icon: FileText, label: "Decisions", soon: true },
];

export function DashboardShell({ email, name }: { email: string; name: string }) {
  const firstName = getFirstName(name);
  const initials = getInitials(name || email);

  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar__top">
          <BrandMark />
          <div className="workspace-chip"><span className="live-dot" /> Founder workspace</div>
        </div>
        <nav className="dashboard-nav" aria-label="Workspace navigation">
          <span className="dashboard-nav__label">Workspace</span>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button className={`dashboard-nav__item ${item.active ? "is-active" : ""}`} disabled={item.soon} key={item.label} type="button">
                <Icon size={17} strokeWidth={1.7} />
                <span>{item.label}</span>
                {item.soon && <small>soon</small>}
              </button>
            );
          })}
        </nav>
        <div className="dashboard-sidebar__bottom">
          <button className="dashboard-nav__item" disabled type="button"><Settings size={17} strokeWidth={1.7} /><span>Settings</span><small>soon</small></button>
          <div className="dashboard-user">
            <span className="avatar">{initials || "F"}</span>
            <span className="dashboard-user__copy"><strong>{name || "Founder"}</strong><small>{email}</small></span>
          </div>
          <SignOutButton />
        </div>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div><span className="eyebrow"><span className="eyebrow__mark" />Private beta</span><p>Cycle 01 · signal online</p></div>
          <div className="dashboard-topbar__actions"><button aria-label="Notifications" className="icon-button" type="button"><Bell size={18} /></button><div className="avatar avatar--mobile">{initials || "F"}</div></div>
        </header>
        <div className="dashboard-content">
          <div className="dashboard-greeting">
            <div><span className="eyebrow"><span className="eyebrow__mark" />Vaxion / 01</span><h1>Good morning, {firstName}.</h1><p>The space between your signal and your next move is getting smaller.</p></div>
            <div className="dashboard-date"><span>Cycle</span><strong>01 <small>/ 04</small></strong><div className="cycle-bar"><i /><i /><i /><i /></div></div>
          </div>
          <section className="coming-soon-panel">
            <div className="coming-soon-panel__noise" />
            <div className="coming-soon-panel__content">
              <div className="coming-soon-panel__icon"><Blocks size={25} strokeWidth={1.35} /></div>
              <span className="eyebrow"><span className="eyebrow__mark" />In formation</span>
              <h2>Your operating layer<br /><em>is coming online.</em></h2>
              <p>We’re building the tools that turn founder intent into a rhythm you can trust. Your first workspace is reserved.</p>
              <Link className="button button--primary" href="mailto:hello@vaxion.co?subject=Vaxion%20early%20access">Talk to the team <ArrowUpRight size={16} /></Link>
            </div>
            <div className="coming-soon-panel__status"><span><i className="status-dot status-dot--done" />Signal mapping</span><span><i className="status-dot status-dot--active" />Workspace assembly</span><span><i className="status-dot" />Your next layer</span></div>
          </section>
          <div className="dashboard-footnote"><span className="live-dot" /> You’re early. That’s the point. <span>Vaxion is being built with founders, not just for them.</span></div>
        </div>
      </main>
    </div>
  );
}
