import React from 'react';
import Section from './Section';
import SectionHeading from './SectionHeading';
import type { SlaModelItem } from '../lib/data';

interface SlaComparisonSectionProps {
  models: SlaModelItem[];
}

export default function SlaComparisonSection({ models }: SlaComparisonSectionProps) {
  return (
    <Section layer="base" spacing="generous">
      <SectionHeading
        kicker="Contract Structures"
        title="How clients engage us."
        description="Work with us on a standalone migration, add 24/7 escalation backing to your internal IT staff, or hand over daily infrastructure administration under a multi-year SLA."
      />

      <div className="mt-10 overflow-x-auto border-y border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-semibold text-slate-600">
              <th className="py-4 pr-6">Engagement Model</th>
              <th className="py-4 px-6">Typical Scope</th>
              <th className="py-4 px-6">Response Window</th>
              <th className="py-4 pl-6">Review Cadence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm font-normal">
            {models.map((row) => (
              <tr key={row.tier} className="hover:bg-white/60 transition-colors">
                <td className="py-4 pr-6 font-semibold text-slate-900 whitespace-nowrap">
                  {row.tier}
                </td>
                <td className="py-4 px-6 text-slate-600">{row.focus}</td>
                <td className="py-4 px-6 text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                  {row.response}
                </td>
                <td className="py-4 pl-6 text-slate-600">{row.cadence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-xs font-normal text-slate-600">
        Regulated institutions operating across multiple sites can also contract dedicated resident systems engineers alongside 24/7 NOC coverage.
      </p>
    </Section>
  );
}
