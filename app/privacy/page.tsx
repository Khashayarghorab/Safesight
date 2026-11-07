import { PageIntro } from '@/components/shared';
import { site } from '@/lib/site';
export const metadata = { title: 'Privacy Policy', alternates: { canonical: '/privacy/' } };
export default function Privacy() {
  return <>
    <PageIntro label="Website privacy" title="Clear about your information."><p>Website privacy notice · Updated November 7, 2026</p></PageIntro>
    <div className="container privacy-layout section">
      <nav className="privacy-nav" aria-label="Privacy sections"><span className="mono">ON THIS PAGE</span><a href="#scope">This website</a><a href="#inquiries">Your inquiry</a><a href="#tracking">Cookies & hosting</a><a href="#pilots">Future pilots</a><a href="#privacy-contact">Questions & requests</a></nav>
      <article className="prose">
        <section id="scope"><h2>This website</h2><p>This notice describes the SafeSight business website as currently implemented. It does not cover a future SafeSight product or field pilot.</p><p>This site is being prepared for public launch. The final responsible business identity, email retention schedule, and hosting arrangements must be confirmed before publication.</p></section>
        <section id="inquiries"><h2>Your inquiry</h2><p>The inquiry form uses your name, email, organization, selected area of interest, and message to prepare a draft in your browser. It does not submit those details to a website server or save them in browser storage.</p><p>You can open the draft in your email application, copy it, or download a text file. Copying places the text on your clipboard; downloading creates a file on your device. Nothing is sent to SafeSight unless you choose to send the email yourself.</p><p>Emails you choose to send to <a href={`mailto:${site.email}`}>{site.email}</a> are handled through the email services used by you and the recipient. Information in those emails is intended to support a response and a conversation about your inquiry. Do not include confidential project details, worker images, or sensitive personal information.</p></section>
        <section id="tracking"><h2>Cookies, analytics & hosting</h2><p>This version includes no advertising tools, third-party analytics, tracking cookies, or persistent browser storage for form entries. Images and fonts are served with the website rather than loaded from third-party image or font services.</p><p>When the site is hosted, infrastructure may process technical request information, such as IP addresses, requested pages, and access logs. Hosting practices and retention must be confirmed for the chosen deployment before launch.</p></section>
        <section id="pilots"><h2>Future pilots</h2><p>This website does not collect worker imagery. Any future pilot would require separate arrangements covering worker notice and consent, collection, access, storage, retention, and responsibilities before field activity begins.</p></section>
        <section id="privacy-contact"><h2>Questions & requests</h2><p>For questions about this website or information you have emailed, contact <a href={`mailto:${site.email}?subject=SafeSight%20privacy%20question`}>{site.email}</a>. You can use that address to ask about access, correction, or deletion of information you provided. Requests need to be assessed against the actual records and applicable obligations.</p></section>
      </article>
    </div>
  </>;
}
