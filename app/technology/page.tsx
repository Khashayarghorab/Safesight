import { Eyebrow, PageIntro, Pilot } from '@/components/shared';
import { Icon } from '@/components/icons';
import Workflow from '@/components/workflow';
export const metadata = { title: 'Technology', description: 'Explore SafeSight’s intended workflow: wearable capture, AI-assisted reasoning, and qualified human review. Technology currently in development.', alternates: { canonical: '/technology/' } };
export default function Technology() {
  return <>
    <PageIntro label="Technology / In development" title="An additional perspective. A human decision."><p>We’re exploring how smart glasses and vision-language AI could help construction teams make better sense of site conditions.</p></PageIntro>
    <section className="workflow-section"><div className="container section"><div className="section-heading"><div><Eyebrow number="01">The intended workflow</Eyebrow><h2>Observe. Understand. Decide.</h2></div><p className="section-aside">Explore each step below.<br />A concept, not a live system.</p></div><Workflow /></div></section>
    <section className="container section technology-priorities"><div className="section-heading"><div><Eyebrow number="02">What we’re evaluating</Eyebrow><h2>Designed for the job site.<br />Grounded in its realities.</h2></div><p className="section-aside">Field performance has to be earned.<br />These are our development priorities.</p></div><div className="feature-grid">
      <article><Icon name="glasses" /><span className="mono">01 / CAPTURE</span><h3>The worker’s point of view</h3><p>Understanding how wearable capture could fit into real work, including movement, lighting, visibility, and the practical constraints of a site.</p></article>
      <article><Icon name="layers" /><span className="mono">02 / REASONING</span><h3>Useful context, clearly explained</h3><p>Evaluating AI-assisted hazard identification, risk reasoning, and suggested mitigation measures as inputs for qualified review.</p></article>
      <article><Icon name="shield" /><span className="mono">03 / EVALUATION</span><h3>Responsible learning</h3><p>Defining meaningful evaluation criteria, worker consent, data handling, and responsibilities before any field activity.</p></article>
    </div></section>
    <section className="responsibility-section"><div className="container section responsibility-grid"><div><Eyebrow>Human-led by design</Eyebrow><h2>Good technology knows<br />where its role ends.</h2></div><div><p className="lead">AI can miss hazards, misunderstand context, or produce incorrect suggestions.</p><p>Our intended approach keeps qualified people responsible for reviewing observations, assessing risks, and choosing a course of action.</p><ul className="check-list"><li><Icon name="check" />Site procedures and professional judgment come first.</li><li><Icon name="check" />No replacement for training, supervision, or protective equipment.</li><li><Icon name="check" />No claimed accuracy, certification, or commercial readiness.</li></ul></div></div></section>
    <Pilot />
  </>;
}
