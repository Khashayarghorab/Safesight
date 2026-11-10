import { pageMetadata } from '@/lib/metadata';
import { Eyebrow, PageIntro } from '@/components/shared';
import { Icon } from '@/components/icons';
import Inquiry from '@/components/inquiry';
import { site } from '@/lib/site';

export const metadata = pageMetadata(
  'Contact the SafeSight Research Team',
  'Contact the SafeSight team to discuss construction safety workflows, research collaboration, or a potential industry pilot.',
  '/contact/',
);

export default function Contact() {
  return <>
    <PageIntro label="Let’s explore what’s possible" title="Contact the SafeSight research team"><p>For construction teams, safety leaders, and collaborators who want to help shape what comes next.</p></PageIntro>
    <section id="inquiry" className="container section contact-layout">
      <div className="contact-context"><Eyebrow>Start a conversation</Eyebrow><h2>Start with your site.<br />And your questions.</h2><p>Tell us where your current process gets difficult and what you would like to explore.</p>
        <div className="contact-steps"><h3>What a first conversation could cover</h3><ol><li><span className="mono">01</span><div><strong>Your work</strong><p>The site conditions and safety workflows that matter to your team.</p></div></li><li><span className="mono">02</span><div><strong>A possible fit</strong><p>Where a scoped evaluation could be useful—and where it may not be.</p></div></li><li><span className="mono">03</span><div><strong>The next step</strong><p>Goals, feasibility, responsibilities, and data arrangements before any activity.</p></div></li></ol></div>
        <div className="direct-contact"><Icon name="mail" /><div><span className="mono">PREFER EMAIL?</span><a href={`mailto:${site.email}`}>{site.email}<Icon name="diagonal" /></a></div></div>
        <p className="contact-disclaimer">Pilot scope and participation are discussed individually.</p>
      </div>
      <Inquiry />
    </section>
  </>;
}
