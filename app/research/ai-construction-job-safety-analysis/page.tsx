import Link from 'next/link';
import { PageIntro } from '@/components/shared';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata(
  'AI for Construction Job Safety Analysis',
  'Read how Khashayar Ghorab and Pouya Zangeneh evaluated AI for construction job safety analysis, what their study found, and where site judgment enters the process.',
  '/research/ai-construction-job-safety-analysis/',
);

export default function JobSafetyAnalysis() {
  return <>
    <PageIntro label="Research brief" title="How can AI support construction job safety analysis?">
      <p>A job safety analysis (JSA) connects the steps in a task with hazards and ways to control them. Khashayar Ghorab and Pouya Zangeneh studied whether assigning parts of that analysis to different AI agents could improve the result.</p>
    </PageIntro>
    <div className="container privacy-layout section">
      <nav className="privacy-nav" aria-label="Research brief sections">
        <a href="#study">What the authors tested</a>
        <a href="#findings">What they found</a>
        <a href="#review">What a site team checks</a>
        <a href="#paper">Read the paper</a>
      </nav>
      <article className="prose">
        <section id="study">
          <h2>What the authors tested</h2>
          <p>The researchers built a system in which several language-model agents each worked on a different phase of the JSA. They compared the resulting analyses with those from other approaches, using automated evaluation and expert review.</p>
        </section>
        <section id="findings">
          <h2>What improved in the study?</h2>
          <p>The authors reported that the multiagent system identified and assessed risks more accurately and covered them more fully in its responses. They also examined how prompts, model fine-tuning, and feedback between steps affected performance. The evaluation concerned the quality of the analyses the system produced.</p>
        </section>
        <section id="review">
          <h2>What a site team still needs to check</h2>
          <p>Consider a crew planning a material delivery. A draft analysis might flag pedestrian access. The supervisor and crew can check which route people actually use, when the delivery is scheduled, and how the proposed controls fit the work. Those details can change between the planning meeting and the delivery.</p>
          <p>For SafeSight, the related research question is how a reviewer could trace an AI suggestion back to a field observation. The wearable workflow is still in development. <Link href="/resources/construction-safety-observation-report/">See a fictional observation report with a documented human review.</Link></p>
        </section>
        <section id="paper">
          <h2>Read the published study</h2>
          <p>Khashayar Ghorab and Pouya Zangeneh. <cite>LLM-Based Multiagent System for Construction Job Safety Analysis.</cite> Journal of Management in Engineering, 42(5), 2026. <a href="https://doi.org/10.1061/JMENEA.MEENG-7335">Read the paper at ASCE.</a></p>
          <p><Link href="/research/">Browse all SafeSight research.</Link></p>
        </section>
      </article>
    </div>
  </>;
}
