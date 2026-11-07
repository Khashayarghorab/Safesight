'use client';

import { useRef, useState } from 'react';
import { Icon } from './icons';
import { site } from '@/lib/site';

type Draft = { subject: string; body: string };

export default function Inquiry() {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [status, setStatus] = useState('');
  const preview = useRef<HTMLDivElement>(null);

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(`To: ${site.email}\nSubject: ${draft.subject}\n\n${draft.body}`);
      setStatus('Draft copied. Paste it into your email app when you’re ready.');
    } catch {
      setStatus('Copy is unavailable in this browser. You can download the draft or select its text below.');
    }
  }

  return <div className="inquiry-card">
    <div className="form-heading"><span className="mono">START A CONVERSATION</span><h2>Tell us what you’re exploring.</h2><p>A few details will help frame the conversation.</p></div>
    <form onChange={() => { if (draft) setDraft(null); setStatus(''); }} onSubmit={event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const name = String(data.get('name') || '').trim();
      const organization = String(data.get('organization') || '').trim();
      const message = String(data.get('message') || '').trim();
      if (!name || !organization || !message) {
        setStatus('Please add your name, organization, and a short message. Fields cannot contain only spaces.');
        return;
      }
      setDraft({
        subject: `SafeSight — ${data.get('interest')}`,
        body: `Hello SafeSight,\n\n${message}\n\nName: ${name}\nWork email: ${String(data.get('email')).trim()}\nOrganization: ${organization}\nInterest: ${data.get('interest')}\n\nSent from the SafeSight website inquiry draft.`,
      });
      setStatus('Your draft is ready below. Nothing has been sent.');
      requestAnimationFrame(() => preview.current?.focus());
    }}>
      <div className="form-grid"><label>Full name <span className="required-word">required</span><input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label><label>Work email <span className="required-word">required</span><input name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@organization.ca" /></label></div>
      <label>Organization <span className="required-word">required</span><input name="organization" autoComplete="organization" required maxLength={200} placeholder="Company, team, or research organization" /></label>
      <label>I’m interested in<select name="interest" defaultValue="Pilot collaboration"><option>Pilot collaboration</option><option>Research partnership</option><option>Technology collaboration</option><option>General inquiry</option></select></label>
      <label>What would you like to explore? <span className="required-word">required</span><textarea name="message" rows={5} required maxLength={2000} placeholder="Tell us about your work, your safety priorities, and where you see an opportunity." /></label>
      <p className="form-note">Please leave out confidential site details, worker images, and sensitive personal information.</p>
      <button className="button form-submit" type="submit">Prepare inquiry <Icon name="arrow" /></button>
      <p className="form-explanation"><Icon name="mail" />This prepares an email draft. You review and send it from your own email app. <a href="/privacy/">Privacy Policy</a></p>
    </form>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
    {draft && <div className="draft-preview" ref={preview} tabIndex={-1}>
      <span className="mono">READY FOR YOUR REVIEW</span><h3>Your conversation starts here.</h3><p className="draft-recipient">To: <strong>{site.email}</strong></p><p className="draft-subject">{draft.subject}</p><pre>{draft.body}</pre>
      <a className="button" href={`mailto:${site.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email draft <Icon name="diagonal" /></a>
      <div className="draft-actions"><button type="button" onClick={copyDraft}><Icon name="copy" />Copy draft</button><a href={`data:text/plain;charset=utf-8,${encodeURIComponent('To: ' + site.email + '\nSubject: ' + draft.subject + '\n\n' + draft.body)}`} download="SafeSight-inquiry.txt"><Icon name="download" />Download draft</a></div>
      <p className="form-note">No email app? Copy or download the draft and send it through your preferred email service. This website does not send the message.</p>
    </div>}
  </div>;
}
