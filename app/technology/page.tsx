import { pageMetadata } from '@/lib/metadata';
import { Eyebrow, PageIntro, Pilot } from '@/components/shared';
import { Icon } from '@/components/icons';
import Workflow from '@/components/workflow';
export const metadata = pageMetadata(
  'AI-Assisted Construction Safety Inspections',
  'Explore how SafeSight is investigating smart glasses, field notes, and human review to support construction safety inspections and corrective-action follow-up.',
  '/technology/',
);
export default function Technology() {
  return <>
    <PageIntro label="Technology / In development" title="How could AI support construction safety inspections?"><p>Follow an observation from wearable capture to review and action. This is the workflow we are investigating.</p></PageIntro>
    <section className="workflow-section"><div className="container section"><div className="section-heading"><div><Eyebrow number="01">The intended workflow</Eyebrow><h2>Observe. Understand. Decide.</h2></div><p className="section-aside">Explore each step below.<br />A concept, not a live system.</p></div><Workflow /></div></section>
    <section className="container section technology-priorities"><div className="section-heading"><div><Eyebrow number="02">What we’re evaluating</Eyebrow><h2>Designed for the job site.<br />Grounded in its realities.</h2></div><p className="section-aside">Field performance has to be earned.<br />These are our development priorities.</p></div><div className="feature-grid">
      <article><Icon name="glasses" /><span className="mono">01 / DOCUMENTATION</span><h3>From observations to useful records</h3><p>Retain the image, spoken note, and site context together so observations are easier to revisit.</p></article>
      <article><Icon name="layers" /><span className="mono">02 / REASONING</span><h3>Useful context, clearly explained</h3><p>Present potential hazards and supporting context in a form a reviewer can question and check.</p></article>
      <article><Icon name="shield" /><span className="mono">03 / FOLLOW-UP</span><h3>Keep the next step in view</h3><p>Connect each reviewed observation to a responsible person, an action, and a progress record.</p></article>
    </div></section>
    <section className="responsibility-section"><div className="container section responsibility-grid"><div><Eyebrow>Human-led by design</Eyebrow><h2>Good technology knows<br />where its role ends.</h2></div><div><p className="lead">AI can miss hazards, misunderstand context, or produce incorrect suggestions.</p><p>Our intended approach keeps qualified people responsible for reviewing observations, assessing risks, and choosing a course of action.</p><ul className="check-list"><li><Icon name="check" />Site procedures and professional judgment come first.</li><li><Icon name="check" />No replacement for training, supervision, or protective equipment.</li><li><Icon name="check" />No claimed accuracy, certification, or commercial readiness.</li></ul></div></div></section>
    <Pilot />
  </>;
}
