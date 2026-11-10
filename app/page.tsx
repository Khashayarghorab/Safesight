import Link from 'next/link';
import { Eyebrow, FAQ, Pilot } from '@/components/shared';
import { Icon } from '@/components/icons';
import ProductConcept from '@/components/product-concept';
export const metadata = { alternates: { canonical: '/' } };
export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-heading">
      <img className="hero-image" src="/images/construction-hero.webp" alt="" width="1920" height="1080" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-inner">
        <div className="hero-topline"><Eyebrow>Construction safety. A new perspective.</Eyebrow><span className="development-tag"><span className="status-dot" />In development</span></div>
        <div className="hero-copy"><h1 id="hero-heading">Safety Through<br />Intelligence</h1><p>Less paperwork. Clearer review. Better follow-through.</p><p className="hero-description">SafeSight is developing tools to help safety managers turn field observations into useful records, review AI suggestions, and keep track of next steps.</p><div className="hero-actions"><Link className="button" href="/contact/#inquiry">Start a conversation <Icon name="diagonal" /></Link><Link href="/technology/" className="hero-secondary">Discover the technology <Icon name="arrow" /></Link></div></div>
        <div className="hero-bottom"><a href="#approach" className="scroll-link"><span className="scroll-circle"><Icon name="arrow" /></span>Meet the SafeSight approach</a><span className="hero-coordinate mono">A CLEARER VIEW.<br />A HUMAN DECISION.</span></div>
      </div>
      <span className="hero-image-credit">Illustrative construction scene</span>
    </section>
    <div className="audience-strip container"><span className="mono">DEVELOPING FOR<br />THE PEOPLE ON SITE</span><span><Icon name="people" />Construction teams</span><span><Icon name="shield" />Safety leaders</span><span><Icon name="layers" />Research & technology partners</span></div>
    <section id="approach" className="container section introduction">
      <div className="introduction-heading"><Eyebrow number="01">The SafeSight perspective</Eyebrow><h2>Better context.<br /><span className="text-muted">More informed decisions.</span></h2></div>
      <div className="introduction-copy"><p className="lead">Every site changes.<br />The commitment to people doesn’t.</p><p>Safety work extends from observations on site to the records and actions that follow. SafeSight is exploring how wearable capture and AI could make that process easier for construction teams.</p><p>Our focus is simple: support the people doing the work, with human judgment at the centre.</p><Link className="text-link" href="/about/">The thinking behind SafeSight <Icon name="arrow" /></Link></div>
      <div className="principles"><article><Icon name="glasses" /><div><h3>Easier safety documentation</h3><p>We're exploring ways to turn field observations and notes into useful records with less repeated entry.</p></div></article><article><Icon name="scan" /><div><h3>AI-assisted review</h3><p>Our intended approach would help teams organize observations and review potential hazards, with qualified people checking AI suggestions.</p></div></article><article><Icon name="people" /><div><h3>Corrective-action follow-up</h3><p>We're exploring support for recording who is responsible and checking progress. People would remain accountable for decisions and follow-through.</p></div></article></div>
    </section>
    <ProductConcept />
    <section className="container section partner-section"><div className="partner-visual"><img src="/images/site-perspective.webp" alt="Illustrative supervisor reviewing a construction site" width="1400" height="1050" loading="lazy" /><div className="partner-image-footer"><span className="mono">BUILT AROUND PEOPLE.</span><Icon name="diagonal" /></div><span className="image-disclosure">Illustrative scene · not a SafeSight pilot</span></div><div className="partner-copy"><Eyebrow number="03">Who it is for</Eyebrow><h2>Built around<br />the people<br /><span className="text-muted">responsible for safety.</span></h2><p>For safety managers balancing time on site with the paperwork that follows. For construction teams who need observations to stay connected to the people and actions involved.</p><p>We welcome conversations about repeated entry, scattered notes, and the practical challenges of follow-up. Your experience can help shape the work.</p><ul className="partner-list"><li><Icon name="check" />Safety managers & site supervisors</li><li><Icon name="check" />Health & safety professionals</li><li><Icon name="check" />Research & technology collaborators</li></ul><Link href="/contact/#inquiry" className="text-link">Tell us about your workflow <Icon name="diagonal" /></Link></div></section>
    <FAQ />
    <Pilot />
  </>;
}
