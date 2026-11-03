import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { servicesPageData } from '@/lib/data';

export default function EngagementTable() {
  const { slaColumns, slaTiers } = servicesPageData;

  return (
    <section id="sla" className="scroll-mt-28 border-t border-[#bdd0c6] bg-[#e3ece7] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={servicesPageData.slaEyebrow} title={servicesPageData.slaHeading} description={servicesPageData.slaIntro} />

        <div className="mt-10 overflow-x-auto rounded border border-[#b5c7be]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="border-b border-[#1a4037] bg-[#11312a] text-xs font-semibold text-[#f4f7f5]">
              <tr>
                <th scope="col" className="px-6 py-4">{slaColumns.model}</th>
                <th scope="col" className="px-6 py-4">{slaColumns.response}</th>
                <th scope="col" className="px-6 py-4">{slaColumns.coverage}</th>
                <th scope="col" className="px-6 py-4">{slaColumns.fit}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dce6e1] bg-white">
              {slaTiers.map((tier) => (
                <tr key={tier.model} className="transition-colors hover:bg-[#f3f7f5]">
                  <td className="px-6 py-5 font-semibold text-[#0c1f1b]">{tier.model}</td>
                  <td className="px-6 py-5 font-semibold tabular-nums text-[#0b6b58]">{tier.responseWindow}</td>
                  <td className="px-6 py-5 tabular-nums text-[#2d423d]">{tier.coverage}</td>
                  <td className="px-6 py-5 text-[#2d423d]">{tier.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
