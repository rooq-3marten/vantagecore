import React from 'react';
import Section from './Section';
import type { MilestoneItem, aboutHistoryContent as AboutHistoryType } from '../lib/data';

interface CompanyHistorySectionProps {
  content: typeof AboutHistoryType;
  milestones: MilestoneItem[];
}

export default function CompanyHistorySection({
  content,
  milestones,
}: CompanyHistorySectionProps) {
  return (
    <Section layer="surface" spacing="hero">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold text-[#1d4ed8] mb-2.5">{content.kicker}</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-slate-900">
            {content.title}
          </h1>
          <p className="mt-5 text-base font-normal leading-relaxed text-slate-600">
            {content.description}
          </p>
          <p className="mt-4 text-base font-normal leading-relaxed text-slate-600">
            {content.extendedParagraph}
          </p>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-slate-200 lg:pl-8">
          <p className="text-xs font-semibold text-slate-600 mb-4">
            Standard Hybrid Reference Topology
          </p>
          <svg
            viewBox="0 0 380 210"
            className="w-full h-auto text-slate-900"
            fill="none"
            role="img"
            aria-label="Hybrid network interconnect diagram showing branch sites connected over dual-ISP links to cloud landing zones and 24/7 NOC monitoring"
          >
            <rect x="4" y="18" width="116" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="16" y="43" fill="#0f172a" fontSize="11" fontWeight="600">HQ &amp; Branches</text>
            <text x="16" y="61" fill="#475569" fontSize="9.5">Core VLANs · ERP</text>
            <text x="16" y="76" fill="#475569" fontSize="9.5">Dual-ISP SD-WAN</text>

            <line x1="120" y1="54" x2="254" y2="54" stroke="#1d4ed8" strokeWidth="1.75" />
            <text x="144" y="46" fill="#1d4ed8" fontSize="9" fontWeight="600">IPsec / Fiber</text>

            <rect x="254" y="18" width="122" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="266" y="43" fill="#0f172a" fontSize="11" fontWeight="600">Cloud Regions</text>
            <text x="266" y="61" fill="#475569" fontSize="9.5">Compute &amp; SQL</text>
            <text x="266" y="76" fill="#475569" fontSize="9.5">Offsite DR Sync</text>

            <line x1="62" y1="90" x2="62" y2="128" stroke="#475569" strokeWidth="1.25" strokeDasharray="3 3" />
            <line x1="315" y1="90" x2="315" y2="128" stroke="#475569" strokeWidth="1.25" strokeDasharray="3 3" />

            <rect x="4" y="128" width="372" height="62" rx="8" fill="#f8fafc" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="20" y="154" fill="#0f172a" fontSize="11" fontWeight="600">24/7 Operations &amp; Security Desk (Lagos · Abuja)</text>
            <text x="20" y="173" fill="#475569" fontSize="9.5">Link telemetry · Monthly OS patching · Immutable backup verification</text>
          </svg>
        </div>
      </div>

      <div className="mt-12 pt-10 border-t border-slate-200">
        <h2 className="text-xs font-semibold text-slate-600 mb-8">
          Company Milestones
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((item) => (
            <div key={item.year}>
              <span className="text-lg font-semibold text-[#1d4ed8] tabular-nums">
                {item.year}
              </span>
              <h3 className="mt-1.5 text-base font-semibold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
