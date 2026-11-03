'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { contactFormCopy, primaryEmail, primaryPhoneDisplay, primaryPhoneHref } from '@/lib/constants';

const fieldClass =
  'mt-1.5 block w-full rounded border border-[#b3c7be] bg-white px-3.5 py-2.5 text-sm text-[#0c1f1b] placeholder:text-[#6e857e] transition-colors focus:border-[#0b6b58] focus:outline-none focus:ring-2 focus:ring-[#d97706]/30';

export default function ContactForm() {
  const initialScope = useSearchParams().get('scope') ?? 'cloud';
  const [state, setState] = useState<{ status: 'idle' | 'error' | 'submitted'; error?: string; mailto?: string; summary?: string }>({ status: 'idle' });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const scope = String(data.get('scope') ?? 'general').trim();
    const org = String(data.get('organization') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) return setState({ status: 'error', error: contactFormCopy.errorRequired });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setState({ status: 'error', error: contactFormCopy.errorEmail });

    const summary = `Name: ${name}\nEmail: ${email}\nDiscipline: ${scope}\nOrganization: ${org || 'N/A'}\n\nTechnical Context:\n${message}`;
    const mailto = `mailto:${primaryEmail}?subject=${encodeURIComponent(`Architecture Inquiry [${scope.toUpperCase()}] – ${name}`)}&body=${encodeURIComponent(summary)}`;
    setCopied(false);
    setState({ status: 'submitted', mailto, summary });
  };

  if (state.status === 'submitted' && state.mailto && state.summary) {
    return (
      <div className="rounded border border-[#96b8ab] border-t-2 border-t-[#0b6b58] bg-[#f3f7f5] p-8">
        <h2 className="text-xl font-semibold tracking-tight text-[#0c1f1b]">{contactFormCopy.successHeading}</h2>
        <p className="mt-2.5 text-sm font-normal leading-relaxed text-[#2d423d]">{contactFormCopy.successBody}</p>
        <pre className="mt-4 overflow-x-auto rounded border border-[#c5d4cc] bg-white p-4 font-sans text-xs leading-relaxed text-[#2d423d]">{state.summary}</pre>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={state.mailto} className="inline-flex h-10 items-center justify-center rounded border border-[#07473a] bg-[#0b6b58] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#085243]">
            {contactFormCopy.sendEmailLabel} →
          </a>
          <Button type="button" variant="outline" size="compact" onClick={() => navigator.clipboard?.writeText(state.summary ?? '').then(() => setCopied(true))}>
            {copied ? contactFormCopy.copiedBriefLabel : contactFormCopy.copyBriefLabel}
          </Button>
          <a href={primaryPhoneHref} className="px-3 py-2 text-sm font-semibold tabular-nums text-[#0c1f1b] underline-offset-4 hover:underline">{primaryPhoneDisplay}</a>
        </div>
        <button type="button" onClick={() => setState({ status: 'idle' })} className="mt-5 block text-xs font-medium text-[#4b635d] underline hover:text-[#0c1f1b]">
          {contactFormCopy.resetLabel}
        </button>
      </div>
    );
  }

  return (
    <form key={initialScope} onSubmit={handleSubmit} noValidate className="rounded border border-[#96b8ab] border-t-2 border-t-[#0b6b58] bg-[#f3f7f5] p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#0c1f1b]">{contactFormCopy.heading}</h2>
      <p className="mt-2 text-sm font-normal leading-relaxed text-[#2d423d]">{contactFormCopy.subheading}</p>
      {state.status === 'error' && state.error && (
        <p role="alert" className="mt-4 rounded border border-[#0b6b58]/50 bg-white px-4 py-3 text-sm font-medium text-[#0c1f1b]">{state.error}</p>
      )}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#162d28]">{contactFormCopy.nameLabel}<input name="name" type="text" required placeholder={contactFormCopy.namePlaceholder} className={fieldClass} /></label>
        <label className="block text-sm font-medium text-[#162d28]">{contactFormCopy.emailLabel}<input name="email" type="email" required placeholder={contactFormCopy.emailPlaceholder} className={fieldClass} /></label>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#162d28]">
          {contactFormCopy.scopeLabel}
          <select name="scope" defaultValue={initialScope} className={fieldClass}>
            {contactFormCopy.scopeOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium text-[#162d28]">{contactFormCopy.organizationLabel}<input name="organization" type="text" placeholder={contactFormCopy.organizationPlaceholder} className={fieldClass} /></label>
      </div>
      <label className="mt-5 block text-sm font-medium text-[#162d28]">{contactFormCopy.messageLabel}<textarea name="message" rows={5} required placeholder={contactFormCopy.messagePlaceholder} className={fieldClass} /></label>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="solid" size="md" withArrow>{contactFormCopy.submitLabel}</Button>
        <p className="text-xs font-normal text-[#4b635d]">{contactFormCopy.privacyNote}</p>
      </div>
    </form>
  );
}
