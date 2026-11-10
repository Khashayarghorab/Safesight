import Link from 'next/link';
import { Icon } from './icons';
export function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return <p className="eyebrow">{number ? <span className="section-number">{number}</span> : <span className="eyebrow-mark" />}{children}</p>;
}
export function Pilot() {
  return <section className="pilot-cta"><div className="container pilot-content">
    <div><Eyebrow>A shared starting point</Eyebrow><h2>Useful ideas start<br />with a conversation<span className="yellow">.</span></h2><p>Help shape the safety workflows we're developing.</p></div>
    <Link className="button" href="/contact/#inquiry">Start a conversation <Icon name="diagonal" /></Link>
  </div></section>;
}
export function PageIntro({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro container"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><div className="intro-description">{children}</div></section>;
}
export const faqs = [
  ['What is SafeSight being developed to support?', 'Our intended focus is easier safety documentation, AI-assisted review, and corrective-action follow-up. We are exploring ways to organize field observations, reduce repeated entry, and help people keep track of responsibilities and progress. These are development goals, not verified product capabilities.'],
  ['Is SafeSight available today?', 'SafeSight is in development and is not commercially available. Conversations with prospective industry and research partners would help shape the work. Capabilities, field performance, and pilot timing have not yet been validated or confirmed.'],
  ['Who would be a good pilot partner?', 'Construction organizations, general contractors, health and safety teams, and research or technology collaborators who want to help define and evaluate a practical use case. We would discuss site context, goals, participation requirements, and feasibility together.'],
  ['Does SafeSight replace safety professionals?', 'No. AI may be incomplete or incorrect. The intended role is decision support. Qualified people remain responsible for reviewing observations, assessing risks, and deciding what action to take. SafeSight is not a replacement for training, supervision, protective equipment, or established site safety procedures.'],
  ['How would worker and site data be handled?', 'Data collection, worker consent, access, retention, and responsibilities would be agreed before any pilot begins. The website does not collect worker imagery. A future pilot would have its own data arrangements, separate from this website’s privacy notice.'],
];
export function FAQ({ compact = false }: { compact?: boolean }) {
  return <section className={`container section faq-section${compact ? ' faq-compact' : ''}`}>
    <div><Eyebrow number="04">A few things to know</Eyebrow><h2>Good questions.<br />Clear answers.</h2><Link href="/contact/" className="text-link">Start a conversation <Icon name="arrow" /></Link></div>
    <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span className="mono faq-number">0{index + 1}</span><span>{question}</span><Icon name="plus" /></summary><p>{answer}</p></details>)}</div>
  </section>;
}
