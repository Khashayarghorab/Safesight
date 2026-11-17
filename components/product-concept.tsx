import Link from 'next/link';
import { Eyebrow } from './shared';
import { Icon } from './icons';

export default function ProductConcept() {
  return <section className="concept-section" aria-labelledby="concept-heading">
    <div className="container section">
      <div className="section-heading">
        <div><Eyebrow number="02">The SafeSight approach</Eyebrow><h2 id="concept-heading">From observation to informed action</h2></div>
        <p className="section-aside">See how a site observation could move through AI-assisted review, human judgment, and corrective action.</p>
      </div>
      <div className="concept-board">
        <div className="concept-toolbar"><span className="mono">Illustrative workflow · In development</span></div>
        <div className="concept-grid">
          <article className="concept-capture">
            <div className="concept-capture-copy">
              <span className="concept-label"><Icon name="glasses" />01 / FIELD OBSERVATION</span>
              <h3>Capture the observation</h3>
              <p>Record site conditions using smart glasses and a spoken note.</p>
            </div>
          </article>
          <ol className="concept-review" start={2}>
            <li><span className="concept-label"><Icon name="layers" />02 / AI SUGGESTION</span><h3>Review the AI suggestion</h3><p>Examine potential hazards and their supporting context.</p></li>
            <li><span className="concept-label"><Icon name="people" />03 / HUMAN REVIEW</span><h3>Make the decision</h3><p>A safety professional checks the conditions and chooses an appropriate response.</p></li>
            <li><span className="concept-label"><Icon name="arrow" />04 / ACTION &amp; VERIFICATION</span><h3>Act and follow up</h3><p>Assign responsibility and record completion after verification.</p></li>
          </ol>
        </div>
        <div className="concept-footer"><p>People remain responsible for safety decisions.</p><Link className="text-link" href="/technology/">Explore the technology <Icon name="arrow" /></Link></div>
      </div>
    </div>
  </section>;
}
