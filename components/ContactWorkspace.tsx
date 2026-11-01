import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import Section from './Section';
import ContactFormCard from './ContactFormCard';
import { SUPPORT_DESK_EMAIL } from '../lib/constants';

interface ContactWorkspaceProps {
  topicOptions: string[];
  email: string;
  phoneDisplay: string;
  phoneHref: string;
}

export default function ContactWorkspace({
  topicOptions,
  email,
  phoneDisplay,
  phoneHref,
}: ContactWorkspaceProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <Section layer="surface" spacing="default">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7">
          <ContactFormCard topicOptions={topicOptions} />
        </div>

        <div className="lg:col-span-5 border-t border-slate-200 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 space-y-6">
          <div>
            <p className="text-xs font-semibold text-[#1d4ed8]">Direct Desk</p>
            <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900">
              Switchboard &amp; NOC Dispatch
            </h2>
          </div>

          <div className="space-y-4 text-sm font-normal">
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${email}`}
                className="font-semibold text-slate-900 hover:text-[#1d4ed8] truncate"
              >
                {email}
              </a>
              <button
                type="button"
                data-layer="elevated"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#1d4ed8]/40 bg-white px-3 py-1 text-xs font-semibold text-[#1d4ed8] hover:border-[#1d4ed8] hover:scale-105 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-slate-600">
              <a
                href={phoneHref}
                className="font-semibold text-slate-900 hover:text-[#1d4ed8] tabular-nums"
              >
                {phoneDisplay}
              </a>
              <span className="text-xs text-slate-600"> · Main reception</span>
            </div>

            <div className="pt-5 border-t border-slate-200 text-xs text-slate-600 leading-relaxed space-y-3">
              <p>
                Existing SLA clients reporting a severity-1 outage should email{' '}
                <a
                  href={`mailto:${SUPPORT_DESK_EMAIL}`}
                  className="font-semibold text-slate-900 hover:text-[#1d4ed8]"
                >
                  {SUPPORT_DESK_EMAIL}
                </a>{' '}
                or dial their dedicated NOC bridge number.
              </p>
              <p>
                Tender documents and RFP packages can be sent directly to our intake address in PDF
                or DOCX format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
