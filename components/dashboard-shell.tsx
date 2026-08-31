import Link from "next/link";
import { ArrowUpRight, Bell, Blocks, Check, ChevronRight, CircleDot, Compass, FileText, LayoutGrid, Settings, Sparkles, Target, Zap } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { SignOutButton } from "@/components/sign-out-button";
import { getFirstName, getInitials } from "@/lib/utils";

const navItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: Target, label: "Direction", soon: true },
  { icon: Compass, label: "Signals", soon: true },
  { icon: FileText, label: "Decisions", soon: true },
];

const priorities = [
  { label: "Sharpen the one-line promise", category: "Direction", progress: "72%", color: "signal" },
  { label: "Talk to five design partners", category: "Momentum", progress: "48%", color: "violet" },
  { label: "Choose the next useful bet", category: "Decision", progress: "31%", color: "volt" },
];

const activity = [
  { time: "09:42", label: "Signal check-in completed", detail: "Clarity / morning cycle", icon: Check, color: "signal" },
  { time: "Yesterday", label: "New direction added", detail: "Make the next move visible", icon: Target, color: "violet" },
  { time: "Friday", label: "Founder cycle opened", detail: "Cycle 01 / formation", icon: Sparkles, color: "volt" },
];

export function DashboardShell({ email, name, demo = false }: { email: string; name: string; demo?: boolean }) {
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
          <div className="dashboard-greeting" data-reveal>
            <div><span className="eyebrow"><span className="eyebrow__mark" />Vaxion / 01</span><h1>Good morning, {firstName}.</h1><p>The space between your signal and your next move is getting smaller.</p></div>
            <div className="dashboard-date"><span>Cycle</span><strong>01 <small>/ 04</small></strong><div className="cycle-bar"><i /><i /><i /><i /></div></div>
          </div>
          <div className="dashboard-preview-note" data-reveal data-reveal-delay="80"><span className="dashboard-preview-note__dot" /><span><strong>{demo ? "Preview mode" : "Sample workspace"}</strong> These are starter signals to show the shape of your founder dashboard.</span><Link href="/onboarding?edit=1">Edit workspace <ChevronRight size={14} /></Link></div>
          <div className="dashboard-overview-grid">
            <section className="dashboard-panel dashboard-signal-panel" data-reveal data-reveal-delay="120">
              <div className="dashboard-panel__top"><span className="eyebrow"><span className="eyebrow__mark" />Current signal</span><span className="panel-tag">Preview data</span></div>
              <div className="dashboard-signal-panel__body"><div><h2>Make the next move <em>visible.</em></h2><p>Your direction is taking shape. Keep the signal close and the next useful action smaller than the fear around it.</p></div><div className="signal-score"><span>Signal clarity</span><strong>84<small>/100</small></strong><div className="score-track"><i /></div></div></div>
              <div className="dashboard-panel__footer"><span><Zap size={14} /> Momentum is warming up</span><span>Updated just now</span></div>
            </section>
            <section className="dashboard-panel dashboard-stat-panel" data-reveal data-reveal-delay="180">
              <div className="dashboard-panel__top"><span className="eyebrow"><span className="eyebrow__mark" />Open loops</span><CircleDot size={17} className="panel-icon" /></div>
              <strong className="dashboard-big-stat">06</strong>
              <p>Worth a closer look<br />this cycle.</p>
              <div className="mini-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            </section>
          </div>
          <div className="dashboard-board-grid">
            <section className="dashboard-panel dashboard-priority-panel" data-reveal data-reveal-delay="120">
              <div className="dashboard-panel__heading"><div><span className="eyebrow"><span className="eyebrow__mark" />Operating board</span><h2>This week&apos;s direction</h2></div><span className="panel-tag">03 active</span></div>
              <div className="priority-list">{priorities.map((priority) => <div className="priority-item" key={priority.label}><span className={`priority-marker priority-marker--${priority.color}`} /><div className="priority-item__copy"><strong>{priority.label}</strong><span>{priority.category}</span></div><div className="priority-progress"><span>{priority.progress}</span><i className={`progress-${priority.color}`}><b style={{ width: priority.progress }} /></i></div></div>)}</div>
              <button className="panel-action" disabled type="button">Open direction <ArrowUpRight size={15} /></button>
            </section>
            <section className="dashboard-panel dashboard-activity-panel" data-reveal data-reveal-delay="180">
              <div className="dashboard-panel__heading"><div><span className="eyebrow"><span className="eyebrow__mark" />Recent signal</span><h2>Activity</h2></div><span className="panel-tag">Today</span></div>
              <div className="activity-list">{activity.map((item) => { const Icon = item.icon; return <div className="activity-item" key={item.label}><div className={`activity-item__icon activity-item__icon--${item.color}`}><Icon size={14} /></div><div className="activity-item__copy"><strong>{item.label}</strong><span>{item.detail}</span></div><time>{item.time}</time></div>; })}</div>
              <button className="panel-action" disabled type="button">View all activity <ArrowUpRight size={15} /></button>
            </section>
          </div>
          <section className="coming-soon-panel" data-reveal data-reveal-delay="160">
            <div className="coming-soon-panel__noise" />
            <div className="coming-soon-panel__content">
              <div className="coming-soon-panel__icon"><Blocks size={25} strokeWidth={1.35} /></div>
              <span className="eyebrow"><span className="eyebrow__mark" />In formation</span>
              <h2>Your deeper operating layer<br /><em>is coming online.</em></h2>
              <p>The sample view is live. We’re building the tools that turn these signals into a rhythm you can trust.</p>
              <Link className="button button--primary" href="mailto:hello@vaxion.pro?subject=Vaxion%20early%20access">Talk to the team <ArrowUpRight size={16} /></Link>
            </div>
            <div className="coming-soon-panel__status"><span><i className="status-dot status-dot--done" />Signal mapping</span><span><i className="status-dot status-dot--active" />Workspace assembly</span><span><i className="status-dot" />Your next layer</span></div>
          </section>
          <div className="dashboard-footnote"><span className="live-dot" /> You’re early. That’s the point. <span>Vaxion is being built with founders, not just for them.</span></div>
        </div>
      </main>
    </div>
  );
}
