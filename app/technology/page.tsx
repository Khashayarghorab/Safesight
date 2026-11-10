import { Eyebrow, PageIntro, Pilot } from '@/components/shared';
import { Icon } from '@/components/icons';
import Workflow from '@/components/workflow';
export const metadata = { title: 'Technology', description: 'SafeSight is in development: exploring easier safety documentation, AI-assisted review, and human-led corrective-action follow-up.', alternates: { canonical: '/technology/' } };
export default function Technology() {
  return <>
    <PageIntro label="Technology / In development" title="An additional perspective. A human decision."><p>We're exploring how smart glasses, field notes, and AI-assisted review could support useful safety records and follow-up, with people making the decisions.</p></PageIntro>
    <section className="workflow-section"><div className="container section"><div className="section-heading"><div><Eyebrow number="01">The intended workflow</Eyebrow><h2>Observe. Understand. Decide.</h2></div><p className="section-aside">Explore each step below.<br />A concept, not a live system.</p></div><Workflow /></div></section>
    <section className="container section technology-priorities"><div className="section-heading"><div><Eyebrow number="02">What we’re evaluating</Eyebrow><h2>Designed for the job site.<br />Grounded in its realities.</h2></div><p className="section-aside">Field performance has to be earned.<br />These are our development priorities.</p></div><div className="feature-grid">
      <article><Icon name="glasses" /><span className="mono">01 / DOCUMENTATION</span><h3>From observations to useful records</h3><p>Exploring how field images and spoken notes could support clearer safety documentation and reduce repeated entry, while retaining the context people need.</p></article>
      <article><Icon name="layers" /><span className="mono">02 / REASONING</span><h3>Useful context, clearly explained</h3><p>Evaluating how AI could organize notes, highlight potential hazards, and suggest points for qualified people to check. Suggestions may be incomplete or incorrect.</p></article>
      <article><Icon name="shield" /><span className="mono">03 / FOLLOW-UP</span><h3>Keep the next step in view</h3><p>Exploring support for recording corrective-action responsibilities and reviewing progress. People would decide what action is needed and verify what has been done.</p></article>
    </div></section>
    <section className="responsibility-section"><div className="container section responsibility-grid"><div><Eyebrow>Human-led by design</Eyebrow><h2>Good technology knows<br />where its role ends.</h2></div><div><p className="lead">AI can miss hazards, misunderstand context, or produce incorrect suggestions.</p><p>Our intended approach keeps qualified people responsible for reviewing observations, assessing risks, and choosing a course of action.</p><ul className="check-list"><li><Icon name="check" />Site procedures and professional judgment come first.</li><li><Icon name="check" />No replacement for training, supervision, or protective equipment.</li><li><Icon name="check" />No claimed accuracy, certification, or commercial readiness.</li></ul></div></div></section>
    <Pilot />
  </>;
}
