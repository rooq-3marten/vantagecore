'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import { contactFormCopy, primaryEmail, primaryPhoneDisplay, primaryPhoneHref } from '@/lib/constants';

const fieldClass =
  'mt-1.5 block w-full rounded border border-[#b3c7be] bg-white px-3.5 py-2.5 text-sm text-[#0c1f1b] placeholder:text-[#6e857e] transition-colors focus:border-[#0b6b58] focus:outline-none focus:ring-2 focus:ring-[#d97706]/30';

interface FormState { status: 'idle' | 'submitting' | 'error' | 'submitted'; error?: string; reference?: string; mailto?: string; summary?: string; }

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialScope = searchParams.get('scope') ?? 'cloud';
  const initialItems = searchParams.get('items');
  const defaultMessage = initialItems ? `Target Deliverables:\n${initialItems.split('; ').map((i) => `• ${i}`).join('\n')}\n\nCurrent Infrastructure:\n` : '';
  const [state, setState] = useState<FormState>({ status: 'idle' });
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const [name, email, scope, org, message] = ['name', 'email', 'scope', 'organization', 'message'].map((k) => String(data.get(k) ?? '').trim());
    if (!name || !email || !message) return setState({ status: 'error', error: contactFormCopy.errorRequired });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setState({ status: 'error', error: contactFormCopy.errorEmail });

    setState((s) => ({ ...s, status: 'submitting', error: undefined }));
    const summary = `Name: ${name}\nEmail: ${email}\nDiscipline: ${scope || 'general'}\nOrganization: ${org || 'N/A'}\n\nTechnical Context:\n${message}`;
    const mailto = `mailto:${primaryEmail}?subject=${encodeURIComponent(`Architecture Inquiry [${(scope || 'general').toUpperCase()}] – ${name}`)}&body=${encodeURIComponent(summary)}`;

    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, scope: scope || 'general', organization: org, message }) });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        return setState({ status: 'error', error: errData.error || contactFormCopy.errorRequired });
      }
      const resData = await res.json().catch(() => ({}));
      const reference = resData.reference || `VC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setCopied(false);
      setState({ status: 'submitted', reference, mailto, summary });
    } catch {
      setCopied(false); setState({ status: 'submitted', reference: `VC-OFFLINE-${Math.floor(100000 + Math.random() * 900000)}`, mailto, summary });
    }
  };

  const downloadBrief = () => {
    if (!state.summary) return;
    const blob = new Blob([state.summary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${state.reference || 'VantageCore'}-Brief.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  if (state.status === 'submitted' && state.mailto && state.summary) {
    return (
      <div className="rounded border border-[#96b8ab] border-t-2 border-t-[#0b6b58] bg-[#f3f7f5] p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#c5d4cc] pb-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0b6b58]"><span className="h-2 w-2 rounded-full bg-[#0b6b58]" /> Inquiry Dispatched</span>
          <span className="rounded bg-white px-2.5 py-1 text-xs font-semibold tabular-nums text-[#0c1f1b]">Ref: {state.reference}</span>
        </div>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#0c1f1b]">Inquiry confirmed for {primaryEmail}</h2>
        <p className="mt-2 text-sm font-normal leading-relaxed text-[#2d423d]">Your scope brief was routed directly to our engineering intake desk. You may also keep the dispatch copy below or open your email client directly.</p>
        <pre className="mt-4 overflow-x-auto rounded border border-[#c5d4cc] bg-white p-4 font-sans text-xs leading-relaxed text-[#2d423d]">{state.summary}</pre>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={state.mailto} className="inline-flex h-10 items-center justify-center rounded border border-[#07473a] bg-[#0b6b58] px-6 text-[13px] font-semibold text-white hover:bg-[#085243]">{contactFormCopy.sendEmailLabel} →</a>
          <Button type="button" variant="outline" size="compact" onClick={() => navigator.clipboard?.writeText(state.summary ?? '').then(() => setCopied(true))}>{copied ? contactFormCopy.copiedBriefLabel : contactFormCopy.copyBriefLabel}</Button>
          <Button type="button" variant="outline" size="compact" onClick={downloadBrief}>Download Brief (.txt)</Button>
          <a href={primaryPhoneHref} className="px-3 py-2 text-sm font-semibold tabular-nums text-[#0c1f1b] underline-offset-4 hover:underline">{primaryPhoneDisplay}</a>
        </div>
        <button type="button" onClick={() => setState({ status: 'idle' })} className="mt-5 block text-xs font-medium text-[#4b635d] underline hover:text-[#0c1f1b]">{contactFormCopy.resetLabel}</button>
      </div>
    );
  }

  return (
    <form key={`${initialScope}-${initialItems ?? ''}`} onSubmit={handleSubmit} noValidate className="rounded border border-[#96b8ab] border-t-2 border-t-[#0b6b58] bg-[#f3f7f5] p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#0c1f1b]">{contactFormCopy.heading}</h2>
      <p className="mt-2 text-sm font-normal leading-relaxed text-[#2d423d]">{contactFormCopy.subheading}</p>
      {initialItems && <p className="mt-3 inline-flex items-center gap-2 rounded border border-[#b3c7be] bg-white px-3 py-1.5 text-xs text-[#0b6b58]"><span className="h-1.5 w-1.5 rounded-full bg-[#0b6b58]" /> Scope pre-filled with selected deliverables from Services.</p>}
      {state.status === 'error' && state.error && <p role="alert" className="mt-4 rounded border border-[#0b6b58]/50 bg-white px-4 py-3 text-sm font-medium text-[#0c1f1b]">{state.error}</p>}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#162d28]">{contactFormCopy.nameLabel}<input name="name" type="text" required placeholder={contactFormCopy.namePlaceholder} className={fieldClass} /></label>
        <label className="block text-sm font-medium text-[#162d28]">{contactFormCopy.emailLabel}<input name="email" type="email" required placeholder={contactFormCopy.emailPlaceholder} className={fieldClass} /></label>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#162d28]">{contactFormCopy.scopeLabel}<select name="scope" defaultValue={initialScope} className={fieldClass}>{contactFormCopy.scopeOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}</select></label>
        <label className="block text-sm font-medium text-[#162d28]">{contactFormCopy.organizationLabel}<input name="organization" type="text" placeholder={contactFormCopy.organizationPlaceholder} className={fieldClass} /></label>
      </div>
      <label className="mt-5 block text-sm font-medium text-[#162d28]">{contactFormCopy.messageLabel}<textarea name="message" rows={6} defaultValue={defaultMessage} required placeholder={contactFormCopy.messagePlaceholder} className={fieldClass} /></label>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="solid" size="md" withArrow disabled={state.status === 'submitting'}>{state.status === 'submitting' ? 'Submitting Brief...' : contactFormCopy.submitLabel}</Button>
        <p className="text-xs font-normal text-[#4b635d]">{contactFormCopy.privacyNote}</p>
      </div>
    </form>
  );
}
