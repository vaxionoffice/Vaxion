import { Activity, ArrowUpRight, Orbit, Radio, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="A visual representation of the Vaxion operating layer" data-parallax="true" data-reveal data-parallax-speed="0.08" role="img">
      <div className="hero-visual__image" />
      <div className="hero-visual__wash" />
      <div className="hero-visual__grid" />
      <div className="hero-visual__orbit hero-visual__orbit--one" />
      <div className="hero-visual__orbit hero-visual__orbit--two" />
      <div className="hero-visual__orbit hero-visual__orbit--three" />
      <div className="hero-visual__beam hero-visual__beam--one" />
      <div className="hero-visual__beam hero-visual__beam--two" />
      <div className="hero-core">
        <div className="hero-core__halo" />
        <div className="hero-core__ring hero-core__ring--outer" />
        <div className="hero-core__ring hero-core__ring--inner" />
        <div className="hero-core__center">
          <Sparkles size={20} strokeWidth={1.4} />
        </div>
        <span className="hero-core__label">VXN / 01</span>
      </div>
      <div className="signal-card signal-card--top">
        <div className="signal-card__meta"><span className="live-dot" /> Live signal <span>NOW</span></div>
        <strong>Clarity is compounding</strong>
        <div className="signal-card__chart" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div className="signal-card signal-card--bottom">
        <div className="signal-card__icon"><Orbit size={16} strokeWidth={1.5} /></div>
        <div><span>Founder frequency</span><strong>Aligned / 84%</strong></div>
        <Activity className="signal-card__activity" size={16} strokeWidth={1.5} />
      </div>
      <div className="hero-visual__tag hero-visual__tag--left"><Radio size={12} /> BUILD / 001</div>
      <div className="hero-visual__tag hero-visual__tag--right">NORTH STAR <ArrowUpRight size={12} /></div>
    </div>
  );
}
