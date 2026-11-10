import { Eyebrow, PageIntro } from '@/components/shared';
import { Icon } from '@/components/icons';
import Inquiry from '@/components/inquiry';
import { site } from '@/lib/site';

export const metadata = { title: 'Explore Pilot Opportunities', description: 'SafeSight is in development. Discuss intended support for safety documentation, AI-assisted review, and follow-up with our team.', alternates: { canonical: '/contact/' } };

export default function Contact() {
  return <>
    <PageIntro label="Let’s explore what’s possible" title="Bring your perspective. Let’s build from there."><p>For construction teams, safety leaders, and collaborators who want to help shape what comes next.</p></PageIntro>
    <section id="inquiry" className="container section contact-layout">
      <div className="contact-context"><Eyebrow>Explore Pilot Opportunities</Eyebrow><h2>Start with your site.<br />And your questions.</h2><p>We'd like to understand your safety documentation, review, and follow-up needs, and where the approach we're developing might help.</p>
        <div className="contact-steps"><h3>What a first conversation could cover</h3><ol><li><span className="mono">01</span><div><strong>Your work</strong><p>The site conditions and safety workflows that matter to your team.</p></div></li><li><span className="mono">02</span><div><strong>A possible fit</strong><p>Where a scoped evaluation could be useful—and where it may not be.</p></div></li><li><span className="mono">03</span><div><strong>The next step</strong><p>Goals, feasibility, responsibilities, and data arrangements before any activity.</p></div></li></ol></div>
        <div className="direct-contact"><Icon name="mail" /><div><span className="mono">PREFER EMAIL?</span><a href={`mailto:${site.email}`}>{site.email}<Icon name="diagonal" /></a></div></div>
        <p className="contact-disclaimer">SafeSight is in development. An inquiry is an invitation to talk, not enrolment in a pilot or a commitment to a timeline.</p>
      </div>
      <Inquiry />
    </section>
  </>;
}
