import React from 'react';
import Section from './Section';
import SectionHeading from './SectionHeading';
import BadgePill from './BadgePill';
import type { AwardRegistryItem } from '../lib/data';

interface CertificationsGridSectionProps {
  items: AwardRegistryItem[];
}

export default function CertificationsGridSection({ items }: CertificationsGridSectionProps) {
  return (
    <Section layer="base" spacing="generous">
      <SectionHeading
        kicker="Compliance & Audits"
        title="Audited security and service management standards."
        description="External auditors review our access controls, change logs, and backup procedures every year. Copies of current ISO certificates and SOC 2 reports are available under NDA during procurement."
      />

      <div className="flex flex-wrap items-center gap-2 mt-8 mb-10">
        {items.map((item) => (
          <BadgePill key={item.title} label={item.title} />
        ))}
      </div>

      <div className="border-t border-slate-200 pt-8 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+2)]:pb-0"
          >
            <p className="text-xs font-semibold text-[#1d4ed8]">{item.category}</p>
            <h3 className="mt-1 text-base font-semibold tracking-tight text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm font-normal leading-relaxed text-slate-600">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
