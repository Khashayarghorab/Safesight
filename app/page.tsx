import Link from 'next/link';
import { Eyebrow, FAQ, Pilot } from '@/components/shared';
import { Icon } from '@/components/icons';
import Workflow from '@/components/workflow';
export const metadata = { alternates: { canonical: '/' } };
export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-heading">
      <img className="hero-image" src="/images/construction-hero.webp" alt="" width="1920" height="1080" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-inner">
        <div className="hero-topline"><Eyebrow>Construction safety. A new perspective.</Eyebrow><span className="development-tag"><span className="status-dot" />In development</span></div>
        <div className="hero-copy"><h1 id="hero-heading">Safety Through<br />Intelligence</h1><p>More context for the decisions that matter.</p><p className="hero-description">We’re developing wearable AI to help construction teams recognize potential hazards—and see the next step more clearly.</p><div className="hero-actions"><Link className="button" href="/contact/#inquiry">Explore Pilot Opportunities <Icon name="diagonal" /></Link><Link href="/technology/" className="hero-secondary">Discover the technology <Icon name="arrow" /></Link></div></div>
        <div className="hero-bottom"><a href="#approach" className="scroll-link"><span className="scroll-circle"><Icon name="arrow" /></span>Meet the SafeSight approach</a><span className="hero-coordinate mono">A CLEARER VIEW.<br />A HUMAN DECISION.</span></div>
      </div>
      <span className="hero-image-credit">Illustrative construction scene</span>
    </section>
    <div className="audience-strip container"><span className="mono">DEVELOPING FOR<br />THE PEOPLE ON SITE</span><span><Icon name="people" />Construction teams</span><span><Icon name="shield" />Safety leaders</span><span><Icon name="layers" />Research & technology partners</span></div>
    <section id="approach" className="container section introduction">
      <div className="introduction-heading"><Eyebrow number="01">The SafeSight perspective</Eyebrow><h2>Better context.<br /><span className="text-muted">More informed decisions.</span></h2></div>
      <div className="introduction-copy"><p className="lead">Every site changes.<br />The commitment to people doesn’t.</p><p>Construction teams navigate changing conditions, complex tasks, and decisions with real consequences. SafeSight is exploring how wearable AI could add useful context to their safety workflows.</p><p>Our focus is simple: support the people doing the work, with human judgment at the centre.</p><Link className="text-link" href="/about/">The thinking behind SafeSight <Icon name="arrow" /></Link></div>
      <div className="principles"><article><Icon name="glasses" /><div><h3>A field-first perspective</h3><p>Start with what workers see, in the environments where decisions happen.</p></div></article><article><Icon name="scan" /><div><h3>Context, not just capture</h3><p>Explore potential hazards alongside the reasoning that makes them relevant.</p></div></article><article><Icon name="people" /><div><h3>People stay in control</h3><p>Support qualified review, site procedures, and professional judgment.</p></div></article></div>
    </section>
    <section className="workflow-section"><div className="container section"><div className="section-heading"><div><Eyebrow number="02">The technology we’re exploring</Eyebrow><h2>From a point of view<br />to a considered next step.</h2></div><Link className="text-link light-link" href="/technology/">Explore the technology <Icon name="arrow" /></Link></div><Workflow /></div></section>
    <section className="container section partner-section"><div className="partner-visual"><img src="/images/site-perspective.webp" alt="Illustrative supervisor reviewing a construction site" width="1400" height="1050" loading="lazy" /><div className="partner-image-footer"><span className="mono">BUILT AROUND PEOPLE.</span><Icon name="diagonal" /></div><span className="image-disclosure">Illustrative scene · not a SafeSight pilot</span></div><div className="partner-copy"><Eyebrow number="03">Build with us</Eyebrow><h2>Real sites.<br />Real perspectives.<br /><span className="text-muted">Better questions.</span></h2><p>Useful technology starts with listening. We’re interested in working with people who know the realities of construction safety.</p><p>A first conversation is about your workflows, your priorities, and where a carefully scoped evaluation might make sense.</p><ul className="partner-list"><li><Icon name="check" />Construction organizations & contractors</li><li><Icon name="check" />Health & safety professionals</li><li><Icon name="check" />Research & technology collaborators</li></ul><Link href="/contact/#inquiry" className="text-link">Let’s explore a potential pilot <Icon name="diagonal" /></Link></div></section>
    <FAQ />
    <Pilot />
  </>;
}
