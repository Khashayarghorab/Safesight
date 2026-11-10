import { Eyebrow, PageIntro, Pilot } from '@/components/shared';
import { site } from '@/lib/site';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import ResearchAffiliation from '@/components/research-affiliation';
export const metadata = { title: 'About', description: 'SafeSight is developing wearable AI to support safety documentation, AI-assisted review, and human-led follow-up for construction teams.', alternates: { canonical: '/about/' } };
export default function About() {
  return <>
    <PageIntro label="About SafeSight" title="A clearer view of safety starts with people."><p>We're developing ways to make safety documentation, review, and follow-up more useful for the people on site.</p></PageIntro>
    <div className="about-panorama"><img src="/images/construction-hero.webp" alt="Illustrative construction frame and tower cranes" width="1920" height="1080" /><div className="container"><span className="mono">OUR FOCUS / PEOPLE, CONTEXT, CONSTRUCTION</span><span>Illustrative construction scene</span></div></div>
    <section className="container section story-grid"><div><Eyebrow number="01">Why we’re here</Eyebrow><h2>Safety Through<br />Intelligence</h2></div><div><p className="lead">SafeSight is exploring wearable AI and human-centred decision support for construction safety.</p><p>Our intended approach would connect field observations with clearer records, AI suggestions for qualified review, and follow-up on corrective actions. We want to reduce repeated paperwork while retaining the information teams need.</p><p>We're taking a research-informed approach: learn from site workflows, investigate technical limitations, and evaluate ideas with industry collaborators. Qualified people would remain responsible for assessing risks and deciding what to do.</p><p>We are in development. Pilot scope, timing, and participation would be defined with prospective partners.</p></div></section>
    <ResearchAffiliation />
    <section className="container about-research-link"><div><Eyebrow>Explore the research</Eyebrow><h2>Research in progress. Ideas in practice.</h2><p>Explore ongoing studies, published research, and perspectives on AI and construction safety.</p></div><Link className="text-link" href="/research/">Explore the research <Icon name="diagonal" /></Link></section>
    <section className="values-section"><div className="container section"><Eyebrow number="02">Principles before promises</Eyebrow><h2>What guides the work.</h2><div className="values-list"><article><span className="mono">01</span><h3>People first.</h3><p>Support the experience and judgment of the people doing the work. Technology should serve their needs.</p></article><article><span className="mono">02</span><h3>Evidence before claims.</h3><p>Evaluate ideas honestly, communicate limitations, and distinguish an intended capability from a proven outcome.</p></article><article><span className="mono">03</span><h3>Learn together.</h3><p>Bring construction professionals and research partners into the conversation. Useful questions come from real experience.</p></article></div></div></section>
    <section className="container section project-contact" aria-labelledby="project-contact-heading">
      <div><Eyebrow>Build the conversation</Eyebrow><h2 id="project-contact-heading">Your experience.<br />Our next question.</h2></div>
      <div className="project-contact-card"><span className="mono">CONNECT WITH SAFESIGHT</span><h3>Start a conversation.</h3><p>Share a safety workflow, ask about the research, or explore a potential collaboration with SafeSight.</p><a className="text-link" href={`mailto:${site.email}`}>Email SafeSight <Icon name="diagonal" /></a><p className="project-contact-note">SafeSight is in development. A conversation does not imply an agreed pilot or partnership.</p></div>
    </section>
    <Pilot />
  </>;
}
