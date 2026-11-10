import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';
import Link from 'next/link';
import { Eyebrow, FAQ, Pilot } from '@/components/shared';
import { Icon } from '@/components/icons';
import ProductConcept from '@/components/product-concept';
import DemoVideo from '@/components/demo-video';
export const metadata = pageMetadata(
  'Wearable AI for Construction Safety',
  site.description,
  '/',
);
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      url: site.url,
      inLanguage: 'en-CA',
    }) }} />
    <section className="hero" aria-labelledby="hero-heading">
      <img className="hero-image" src="/images/construction-hero.webp" alt="" width="1920" height="1080" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-inner">
        <div className="hero-topline"><Eyebrow>Safety Through Intelligence</Eyebrow><span className="development-tag"><span className="status-dot" />In development</span></div>
        <div className="hero-copy"><h1 id="hero-heading">Wearable AI for construction safety</h1><p>Less paperwork. Clearer review. Better follow-through.</p><p className="hero-description">{site.description}</p><div className="hero-actions"><Link className="button" href="/contact/#inquiry">Start a conversation <Icon name="diagonal" /></Link><Link href="/technology/" className="hero-secondary">Discover the technology <Icon name="arrow" /></Link></div></div>
        <div className="hero-bottom"><a href="#approach" className="scroll-link"><span className="scroll-circle"><Icon name="arrow" /></span>Meet the SafeSight approach</a><span className="hero-coordinate mono">A CLEARER VIEW.<br />A HUMAN DECISION.</span></div>
      </div>
    </section>
    <div className="audience-strip container"><span className="mono">DEVELOPING FOR<br />THE PEOPLE ON SITE</span><span><Icon name="people" />Construction teams</span><span><Icon name="shield" />Safety leaders</span><span><Icon name="layers" />Research & technology partners</span></div>
    <DemoVideo />
    <section id="approach" className="container section introduction">
      <div className="introduction-heading"><Eyebrow number="01">The SafeSight perspective</Eyebrow><h2>Better context.<br /><span className="text-muted">More informed decisions.</span></h2></div>
      <div className="introduction-copy"><p className="lead">Every site changes.<br />The commitment to people doesn’t.</p><p>We’re exploring ways to capture what teams see on site and make that information easier to review and act on.</p><Link className="text-link" href="/about/">The thinking behind SafeSight <Icon name="arrow" /></Link></div>
      <div className="principles" aria-label="Development goals"><article><Icon name="glasses" /><div><h3>Simpler records</h3><p>Turn field notes into structured records with less repeated entry.</p></div></article><article><Icon name="scan" /><div><h3>AI-assisted review</h3><p>Bring potential hazards into focus for qualified review.</p></div></article><article><Icon name="people" /><div><h3>Visible next steps</h3><p>Keep responsibilities and progress connected to each observation.</p></div></article></div>
    </section>
    <ProductConcept />
    <section className="container section partner-section"><div className="partner-visual"><img src="/images/site-perspective.webp" alt="Supervisor overlooking a construction site" width="1400" height="1050" loading="lazy" /><div className="partner-image-footer"><span className="mono">BUILT AROUND PEOPLE.</span><Icon name="diagonal" /></div></div><div className="partner-copy"><Eyebrow number="03">Who it is for</Eyebrow><h2>Built around<br />the people<br /><span className="text-muted">responsible for safety.</span></h2><p>What slows your team down: scattered notes, repeated entry, or actions that lose momentum? Help us understand where better tools could make a practical difference.</p><ul className="partner-list"><li><Icon name="check" />Safety managers & site supervisors</li><li><Icon name="check" />Health & safety professionals</li><li><Icon name="check" />Research & technology collaborators</li></ul><Link href="/contact/#inquiry" className="text-link">Tell us about your workflow <Icon name="diagonal" /></Link></div></section>
    <FAQ />
    <Pilot />
  </>;
}
