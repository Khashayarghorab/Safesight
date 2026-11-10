import Link from 'next/link';
import { PageIntro } from '@/components/shared';
import { pageMetadata } from '@/lib/metadata';
import styles from './report.module.css';

export const metadata = pageMetadata(
  'Construction Safety Observation Report Template and Example',
  'Write a construction safety observation report with a blank text template and a completed walkway example covering the observation, reviewer, action owner, and follow-up.',
  '/resources/construction-safety-observation-report/',
);

const example = [
  { field: 'Date and time', value: '6 October, 09:10, during the morning site walk.' },
  { field: 'Location and activity', value: 'Level 2, marked pedestrian route near the east stair. Materials had been staged alongside the walkway.' },
  { field: 'Recorded by', value: 'Site supervisor.' },
  { field: 'Observation', value: 'Stored materials extended into the marked walkway and narrowed the space available to people approaching the stair.' },
  { field: 'Review and decision', value: 'The supervisor visited the location, confirmed the obstruction, and asked the area foreperson to arrange relocation.' },
  { field: 'Action and owner', value: 'Area foreperson to have the materials moved to the designated storage area.' },
  { field: 'Due', value: 'Before work resumed in the affected area.' },
  { field: 'Verification and status', value: 'At 09:40 the supervisor revisited the east stair, saw that the marked route was clear, and closed the record.' },
];

const template = example.map(({ field }) => field + ':').join('\n\n');
const downloadUrl = 'data:text/plain;charset=utf-8,' + encodeURIComponent(template + '\n');

export default function SafetyObservationReport() {
  return <>
    <PageIntro label="Field documentation" title="How to write a construction safety observation report">
      <p>A crew reading the report on the next shift should be able to find the location, understand what someone saw, and tell who checked the outcome.</p>
    </PageIntro>
    <div className="container privacy-layout section">
      <nav className="privacy-nav" aria-label="Report guide sections">
        <a href="#writing">Writing the observation</a>
        <a href="#template">Blank report template</a>
        <a href="#example">Completed example</a>
      </nav>
      <article className="prose">
        <section id="writing">
          <h2>Start with what you saw</h2>
          <p>“Poor housekeeping on Level 2” leaves the next reader guessing. “Stored materials extended into the marked walkway beside the east stair” identifies both the condition and the place to look. Give a time or shift so someone reviewing the note can check whether conditions have changed.</p>
          <p>Put the reviewer’s decision in its own field. Record who agreed to act and when the action is due. Leave the verification field open until someone has checked the result and can describe what they found.</p>
        </section>
        <section id="template">
          <h2>Blank safety observation report template</h2>
          <p>Copy these fields into your site record or download the editable text file. Use your site’s reporting and escalation procedures for any live concern.</p>
          <pre className={styles.template}>{template}</pre>
          <a className="text-link" href={downloadUrl} download="construction-safety-observation-report.txt">Download the blank template (.txt)</a>
        </section>
        <section id="example">
          <h2>Completed example from a site walk</h2>
          <p>This fictional record follows an observation from the first note to the supervisor’s return visit.</p>
          <dl className={styles.record}>
            {example.map(({ field, value }) => (
              <div key={field}>
                <dt>{field}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p><Link href="/technology/">Explore how SafeSight is researching AI-assisted review of field observations.</Link></p>
        </section>
      </article>
    </div>
  </>;
}
