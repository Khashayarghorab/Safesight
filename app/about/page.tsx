import { pageMetadata } from '@/lib/metadata';
import { Eyebrow, PageIntro } from '@/components/shared';
import { site } from '@/lib/site';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import ResearchAffiliation from '@/components/research-affiliation';
export const metadata = pageMetadata(
  'About the SafeSight Research Project',
  'Learn why EPM Research at the University of Calgary is developing SafeSight and how construction teams can help shape its wearable AI research.',
  '/about/',
);
export default function About() {
  return <>
    <PageIntro label="About SafeSight" title="A clearer view of safety starts with people."><p>A research project connecting construction experience with wearable AI.</p></PageIntro>
    <div className="about-panorama"><img src="/images/construction-hero.webp" alt="Tower cranes above a concrete building under construction" width="1920" height="1080" /></div>
    <ResearchAffiliation />
    <section className="container section story-grid"><div><Eyebrow number="01">Why we’re here</Eyebrow><h2>Safety Through<br />Intelligence</h2></div><div><p className="lead">Construction sites change throughout the day. Recognizing hazards, understanding their implications, and documenting observations require sustained attention.</p><p>SafeSight investigates how technology can support these tasks within everyday site workflows. Qualified people remain responsible for assessing risks and deciding what action to take.</p></div></section>
    <section className="values-section"><div className="container section"><Eyebrow number="02">Principles before promises</Eyebrow><h2>What guides the work.</h2><div className="values-list"><article><span className="mono">01</span><h3>People first.</h3><p>Design around the needs, experience, and working conditions of the people using the technology.</p></article><article><span className="mono">02</span><h3>Evidence before claims.</h3><p>Evaluate ideas honestly, communicate limitations, and distinguish intended capabilities from demonstrated results.</p></article><article><span className="mono">03</span><h3>Learn together.</h3><p>Work with construction professionals and research partners to shape practical questions and evaluate potential solutions.</p></article></div></div></section>
    <section className="container about-research-link"><div><Eyebrow>Explore the research</Eyebrow><h2>Research in progress. Ideas in practice.</h2><p>Explore the studies informing SafeSight’s development.</p></div><Link className="text-link" href="/research/">Explore the research <Icon name="diagonal" /></Link></section>
    <section className="container section project-contact" aria-labelledby="project-contact-heading">
      <div><h2 id="project-contact-heading">Start a conversation.</h2></div>
      <div className="project-contact-card"><p>Share a safety workflow, ask about the research, or explore a potential collaboration with SafeSight.</p><a className="text-link" href={`mailto:${site.email}`}>Email SafeSight <Icon name="diagonal" /></a></div>
    </section>
  </>;
}
