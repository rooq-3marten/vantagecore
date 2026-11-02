'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { contactFormCopy, primaryEmail, primaryPhoneDisplay, primaryPhoneHref } from '@/lib/constants';

const fieldClass =
  'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/35';

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
      <div className="rounded-lg border border-[#2563eb] bg-[#eff6ff] p-8">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">{contactFormCopy.successHeading}</h2>
        <p className="mt-2.5 text-sm font-normal leading-relaxed text-slate-600">{contactFormCopy.successBody}</p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 font-sans text-xs leading-relaxed text-slate-600">{state.summary}</pre>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={state.mailto} className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1d4ed8]">
            {contactFormCopy.sendEmailLabel}
          </a>
          <Button type="button" variant="outline" onClick={() => navigator.clipboard?.writeText(state.summary ?? '').then(() => setCopied(true))}>
            {copied ? contactFormCopy.copiedBriefLabel : contactFormCopy.copyBriefLabel}
          </Button>
          <a href={primaryPhoneHref} className="px-3 py-2 text-sm font-semibold tabular-nums text-slate-900 underline-offset-4 hover:underline">{primaryPhoneDisplay}</a>
        </div>
        <button type="button" onClick={() => setState({ status: 'idle' })} className="mt-5 block text-xs font-medium text-slate-600 underline hover:text-slate-900">
          {contactFormCopy.resetLabel}
        </button>
      </div>
    );
  }

  return (
    <form key={initialScope} onSubmit={handleSubmit} noValidate className="rounded-lg border border-[#2563eb] bg-[#eff6ff] p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{contactFormCopy.heading}</h2>
      <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600">{contactFormCopy.subheading}</p>
      {state.status === 'error' && state.error && (
        <p role="alert" className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900">{state.error}</p>
      )}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-900">{contactFormCopy.nameLabel}<input name="name" type="text" required placeholder={contactFormCopy.namePlaceholder} className={fieldClass} /></label>
        <label className="block text-sm font-medium text-slate-900">{contactFormCopy.emailLabel}<input name="email" type="email" required placeholder={contactFormCopy.emailPlaceholder} className={fieldClass} /></label>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-900">
          {contactFormCopy.scopeLabel}
          <select name="scope" defaultValue={initialScope} className={fieldClass}>
            {contactFormCopy.scopeOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-900">{contactFormCopy.organizationLabel}<input name="organization" type="text" placeholder={contactFormCopy.organizationPlaceholder} className={fieldClass} /></label>
      </div>
      <label className="mt-5 block text-sm font-medium text-slate-900">{contactFormCopy.messageLabel}<textarea name="message" rows={5} required placeholder={contactFormCopy.messagePlaceholder} className={fieldClass} /></label>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="solid">{contactFormCopy.submitLabel}</Button>
        <p className="text-xs font-normal text-slate-600">{contactFormCopy.privacyNote}</p>
      </div>
    </form>
  );
}
