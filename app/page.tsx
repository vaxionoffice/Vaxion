import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Command,
  Gauge,
  Layers3,
  MoveUpRight,
  Radio,
  Sparkles,
  Target,
  Waypoints,
} from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const pillars = [
  {
    number: "01",
    icon: Target,
    title: "Find the signal",
    copy: "Separate what feels urgent from what actually moves the company forward.",
    accent: "signal",
  },
  {
    number: "02",
    icon: Waypoints,
    title: "Make the map",
    copy: "Give your big ideas a shape, a sequence, and a next move you can see.",
    accent: "violet",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Keep the rhythm",
    copy: "Build a cadence that keeps your ambition alive when the noise gets loud.",
    accent: "volt",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient ambient--top" aria-hidden="true" />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy" data-reveal data-reveal-delay="120">
              <div className="announcement"><span className="announcement__pulse" />Vaxion / Founder OS <span className="announcement__line" />Now in formation <ArrowUpRight size={14} /></div>
              <h1>Build from a <span>clearer signal.</span></h1>
              <p className="hero__lede">Vaxion is the operating layer for founders turning a hard-won idea into a company with momentum.</p>
              <div className="hero__actions">
                <Link className="button button--primary" href="/signup">Enter the first cycle <ArrowRight size={17} /></Link>
                <Link className="text-link" href="#signal">See the signal <ArrowDownRight size={16} /></Link>
              </div>
              <div className="hero__proof">
                <div className="proof-avatars" aria-hidden="true"><span>AK</span><span>JM</span><span>+</span></div>
                <p><strong>Built alongside early founders.</strong><br /><span>For the ones making the next thing real.</span></p>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="container hero__foot">
            <span className="eyebrow"><span className="eyebrow__mark" />The founder operating layer</span>
            <span className="hero__scroll">Scroll to explore <ArrowDownRight size={15} /></span>
            <span className="hero__index">VXN <strong>001</strong> / 026</span>
          </div>
        </section>

        <div className="signal-strip" aria-label="Vaxion principles">
          <div className="signal-strip__track">
            <span>Intent into motion</span><i /> <span>Clarity over chaos</span><i /> <span>Make the next move visible</span><i /> <span>Intent into motion</span><i /> <span>Clarity over chaos</span><i /> <span>Make the next move visible</span><i />
          </div>
        </div>

        <section className="section section--signal" id="signal">
          <div className="container">
            <SectionHeading eyebrow="The signal" title={<>Your best work starts<br /><em>before the work.</em></>} copy="The founder’s job is rarely a lack of ideas. It is knowing which one deserves the next hour, the next conversation, the next bet." />
            <div className="pillars-grid">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article className={`pillar-card pillar-card--${pillar.accent}`} key={pillar.number}>
                    <div className="pillar-card__top"><span className="card-number">{pillar.number} / 03</span><Icon size={21} strokeWidth={1.45} /></div>
                    <div className="pillar-card__visual" aria-hidden="true"><span /><span /><span /><span /><b /></div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.copy}</p>
                    <span className="card-arrow"><ArrowUpRight size={17} /></span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--method" id="method">
          <div className="container method-grid">
            <div className="method-sticky">
              <SectionHeading eyebrow="The method" title={<>Less noise.<br /><em>More becoming.</em></>} copy="A simple operating rhythm for the complicated season between starting and scaling." />
              <Link className="text-link text-link--bright" href="/signup">Reserve your place <ArrowUpRight size={16} /></Link>
            </div>
            <div className="method-list">
              <article className="method-step">
                <span className="method-step__count">01</span>
                <div className="method-step__body"><div className="method-step__icon"><Command size={19} /></div><h3>Name what matters now.</h3><p>Turn a cloud of competing priorities into one honest direction. The kind you can repeat to your team without a slide deck.</p><span className="method-step__tag">Direction / 01</span></div>
              </article>
              <article className="method-step">
                <span className="method-step__count">02</span>
                <div className="method-step__body"><div className="method-step__icon"><Layers3 size={19} /></div><h3>Give the idea somewhere to go.</h3><p>Move from instinct to an intentional sequence. See the dependencies, the open loops, and the smallest useful move.</p><span className="method-step__tag">Architecture / 02</span></div>
              </article>
              <article className="method-step">
                <span className="method-step__count">03</span>
                <div className="method-step__body"><div className="method-step__icon"><Radio size={19} /></div><h3>Return to the signal.</h3><p>Create a repeatable cadence that makes reflection part of the build, not something you do when you finally have time.</p><span className="method-step__tag">Momentum / 03</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--founders" id="founders">
          <div className="container founder-card">
            <div className="founder-card__visual" aria-hidden="true">
              <div className="founder-card__orb"><div /><span>VXN</span></div>
              <div className="founder-card__orbit founder-card__orbit--a" /><div className="founder-card__orbit founder-card__orbit--b" />
              <span className="founder-card__coordinate">37° 46&apos; 30.2&quot; N<br />122° 25&apos; 09.6&quot; W</span>
            </div>
            <div className="founder-card__copy">
              <span className="eyebrow"><span className="eyebrow__mark" />For the people in the arena</span>
              <h2>Make room for the <em>next version</em> of your company.</h2>
              <p>Vaxion is being built with founders who are still close enough to the problem to care, and far enough into the unknown to need a better way through it.</p>
              <Link className="button button--light" href="/signup">Join the first cycle <ArrowUpRight size={16} /></Link>
              <div className="founder-card__foot"><span><Check size={14} /> No noise, no nurture sequence.</span><span><Sparkles size={14} /> Just the next right move.</span></div>
            </div>
          </div>
        </section>

        <section className="section section--closing">
          <div className="container closing-inner" data-reveal>
            <span className="eyebrow"><span className="eyebrow__mark" />The next move is yours</span>
            <h2>Good things get<br /><em>built on purpose.</em></h2>
            <Link className="button button--primary" href="/signup">Start with Vaxion <MoveUpRight size={17} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
