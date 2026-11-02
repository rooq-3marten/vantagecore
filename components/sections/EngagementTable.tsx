import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { servicesPageData } from '@/lib/data';

export default function EngagementTable() {
  const { slaColumns, slaTiers } = servicesPageData;

  return (
    <section id="sla" className="scroll-mt-28 border-t border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={servicesPageData.slaEyebrow} title={servicesPageData.slaHeading} description={servicesPageData.slaIntro} />

        <div className="mt-10 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f8faff] text-xs font-semibold text-slate-900">
              <tr>
                <th scope="col" className="px-6 py-4">{slaColumns.model}</th>
                <th scope="col" className="px-6 py-4">{slaColumns.response}</th>
                <th scope="col" className="px-6 py-4">{slaColumns.coverage}</th>
                <th scope="col" className="px-6 py-4">{slaColumns.fit}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {slaTiers.map((tier) => (
                <tr key={tier.model} className="transition-colors hover:bg-[#f8fafc]">
                  <td className="px-6 py-5 font-semibold text-slate-900">{tier.model}</td>
                  <td className="px-6 py-5 font-medium tabular-nums text-[#2563eb]">{tier.responseWindow}</td>
                  <td className="px-6 py-5 tabular-nums text-slate-600">{tier.coverage}</td>
                  <td className="px-6 py-5 text-slate-600">{tier.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
