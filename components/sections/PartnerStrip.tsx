import React from 'react';
import { partnerStripData } from '@/lib/data';

export default function PartnerStrip() {
  return (
    <section aria-label={partnerStripData.label} className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium text-slate-600">{partnerStripData.label}</p>
        <ul className="mt-6 flex flex-col divide-y divide-slate-200 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:divide-x sm:divide-y-0">
          {partnerStripData.partners.map((partner, idx) => (
            <li
              key={partner.id}
              className={`group flex items-center gap-3 py-3 opacity-75 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 sm:py-1 ${
                idx === 0 ? 'sm:pr-6' : 'sm:px-6'
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 shrink-0 text-[#2563eb]">
                <path d={partner.markPath} />
              </svg>
              <div>
                <p className="text-sm font-semibold text-slate-900">{partner.name}</p>
                <p className="text-xs font-normal text-slate-600">{partner.tier}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
