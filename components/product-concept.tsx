import Link from 'next/link';
import { Eyebrow } from './shared';
import { Icon } from './icons';

export default function ProductConcept() {
  return <section className="concept-section" aria-labelledby="concept-heading">
    <div className="container section">
      <div className="section-heading">
        <div><Eyebrow number="02">A closer look</Eyebrow><h2 id="concept-heading">One observation.<br />A clearer next step.</h2></div>
        <p className="section-aside">An example of the experience we are developing.<br />Illustrative content, not a working product.</p>
      </div>
      <div className="concept-board">
        <div className="concept-toolbar"><span className="mono">SAFESIGHT / RECORD CONCEPT</span><span className="concept-badge">Illustrative example</span></div>
        <div className="concept-grid">
          <article className="concept-capture">
            <div className="concept-photo"><img src="/images/site-perspective.webp" alt="Illustrative construction site used as context for a fictional safety record" width="1400" height="1050" loading="lazy" /><span className="mono">ILLUSTRATIVE SITE IMAGE</span></div>
            <div className="concept-capture-copy"><span className="concept-label"><Icon name="glasses" />01 / FIELD OBSERVATION</span><h3>Keep the context.</h3><p className="concept-quote">“Materials appear to be narrowing an access route. Check the area before deciding what action is needed.”</p><p className="concept-caption">Fictional note for discussion. The image is not evidence of this condition.</p></div>
          </article>
          <ol className="concept-review">
            <li><span className="concept-label"><Icon name="layers" />02 / AI SUGGESTION</span><h3>A prompt to look closer.</h3><p>Could access be restricted? AI could organize the observation and suggest questions for a qualified reviewer.</p><span className="concept-status">May be incomplete or incorrect</span></li>
            <li><span className="concept-label"><Icon name="people" />03 / HUMAN REVIEW</span><h3>The decision stays with people.</h3><p>A safety professional would check the actual conditions, apply site procedures, and decide whether action is needed.</p><span className="concept-status">Human assessment required</span></li>
            <li><span className="concept-label"><Icon name="arrow" />04 / FOLLOW-UP</span><h3>Make the next step visible.</h3><p>Intended support would help record who is responsible and review progress. People would confirm what has been done.</p><span className="concept-status">Proposed capability</span></li>
          </ol>
        </div>
        <div className="concept-footer"><p>This preview illustrates an idea. No record is created, analyzed, approved, or assigned.</p><Link className="text-link" href="/technology/">Explore the approach <Icon name="arrow" /></Link></div>
      </div>
    </div>
  </section>;
}
