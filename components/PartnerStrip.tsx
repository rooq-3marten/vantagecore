import React from 'react';
import Section from './Section';
import type { PartnerItem } from '../lib/data';

interface PartnerStripProps {
  partners: PartnerItem[];
}

function GenericPartnerShape({ id }: { id: PartnerItem['id'] }) {
  switch (id) {
    case 'cloud-partner':
      return (
        <svg className="h-5 w-5 shrink-0 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        </svg>
      );
    case 'network-partner':
      return (
        <svg className="h-5 w-5 shrink-0 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" fill="currentColor" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" fill="currentColor" />
        </svg>
      );
    case 'compute-partner':
      return (
        <svg className="h-5 w-5 shrink-0 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <polygon points="12,2.5 21,7.5 21,16.5 12,21.5 3,16.5 3,7.5" stroke="currentColor" strokeWidth="2" />
          <polyline points="3.5,8 12,12.5 20.5,8" stroke="currentColor" strokeWidth="1.8" />
          <line x1="12" y1="12.5" x2="12" y2="21.2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'security-partner':
      return (
        <svg className="h-5 w-5 shrink-0 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <polygon points="12,2.5 21.5,12 12,21.5 2.5,12" stroke="currentColor" strokeWidth="2" />
          <polygon points="12,7.5 16.5,12 12,16.5 7.5,12" fill="currentColor" />
        </svg>
      );
    case 'data-partner':
      return (
        <svg className="h-5 w-5 shrink-0 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="4.5" rx="1.5" fill="currentColor" />
          <rect x="3" y="10" width="18" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="3" y="16" width="12" height="4" rx="1.5" fill="currentColor" />
        </svg>
      );
  }
}

export default function PartnerStrip({ partners }: PartnerStripProps) {
  return (
    <Section layer="base" spacing="tight" ariaLabel="Supported Platforms">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <p className="text-xs font-semibold text-slate-600 lg:max-w-[210px] shrink-0">
          Platforms &amp; hardware we deploy and manage
        </p>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              title={`${partner.name} — ${partner.tier}`}
              className="flex h-8 items-center gap-2 grayscale opacity-60 transition-opacity duration-150 hover:grayscale-0 hover:opacity-100 select-none"
            >
              <GenericPartnerShape id={partner.id} />
              <span className="text-base font-semibold tracking-tight text-slate-900 whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
