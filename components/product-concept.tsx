import Link from 'next/link';
import { Eyebrow } from './shared';
import { Icon } from './icons';

export default function ProductConcept() {
  return <section className="concept-section" aria-labelledby="concept-heading">
    <div className="container section">
      <div className="section-heading">
        <div><Eyebrow number="02">An example workflow</Eyebrow><h2 id="concept-heading">A construction safety observation report</h2></div>
        <p className="section-aside">See how a record could connect the steps.<br />Fictional example of the workflow in development.</p>
      </div>
      <div className="concept-board">
        <div className="concept-toolbar"><span className="mono">SAFESIGHT / SAMPLE RECORD 001</span><span className="concept-badge">Illustrative workflow</span></div>
        <div className="concept-grid">
          <article className="concept-capture">
            <div className="concept-capture-copy">
              <span className="concept-label"><Icon name="glasses" />01 / FIELD OBSERVATION</span>
              <h3>Materials in a pedestrian route.</h3>
              <dl className="concept-record-meta"><div><dt>Location</dt><dd>Level 2 · East access route</dd></div><div><dt>Source</dt><dd>Site walk · Spoken note</dd></div><div><dt>Recorded by</dt><dd>Site supervisor</dd></div></dl>
              <blockquote className="concept-quote">“Stored materials are narrowing the marked walkway near the east stair. Please review the route before work continues in this area.”</blockquote>
              <p className="concept-caption">Sample field note. All locations, roles, and decisions in this record are fictional.</p>
              <div className="concept-record-summary"><span className="mono">RECORD AT A GLANCE</span><dl><div><dt>Issue</dt><dd>Restricted pedestrian access</dd></div><div><dt>Action owner</dt><dd>Area foreperson</dd></div><div><dt>Example outcome</dt><dd>Route cleared and checked by supervisor</dd></div></dl></div>
            </div>
          </article>
          <ol className="concept-review" start={2}>
            <li><span className="concept-label"><Icon name="layers" />02 / AI SUGGESTION</span><h3>Flag the access concern.</h3><p><strong>Potential issue:</strong> Restricted access and a possible trip hazard. Ask the reviewer to check the route and nearby material storage.</p><span className="concept-status">AI suggestion · Requires review</span></li>
            <li><span className="concept-label"><Icon name="people" />03 / HUMAN REVIEW</span><h3>Check the conditions on site.</h3><p><strong>Reviewer:</strong> Site supervisor. In this example, the supervisor checks the walkway, confirms the obstruction, and requests that the materials be relocated under site procedures.</p><span className="concept-status">Decision recorded by the reviewer</span></li>
            <li><span className="concept-label"><Icon name="arrow" />04 / ACTION & VERIFICATION</span><h3>Assign, resolve, and check.</h3><dl className="concept-action-details"><div><dt>Owner</dt><dd>Area foreperson</dd></div><div><dt>Action</dt><dd>Relocate materials to the designated storage area.</dd></div><div><dt>Due</dt><dd>Before work resumes in the affected area.</dd></div><div><dt>Completion check</dt><dd>The supervisor rechecks the route and records that access has been restored.</dd></div></dl><span className="concept-status">Example status · Closed after human verification</span></li>
          </ol>
        </div>
        <div className="concept-footer"><p>A static example, not a live inspection or product output. AI suggestions can be incorrect; site procedures and qualified judgment guide actual decisions.</p><Link className="text-link" href="/resources/construction-safety-observation-report/">Get the report template <Icon name="arrow" /></Link></div>
      </div>
    </div>
  </section>;
}
