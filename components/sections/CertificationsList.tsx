import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutPageData, whyChooseUsData } from '@/lib/data';

export default function CertificationsList() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow={aboutPageData.standardsEyebrow} title={aboutPageData.standardsHeading} />
        </div>

        <dl className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-8">
          {whyChooseUsData.standards.map((item) => (
            <div key={item.domain} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
              <dt className="text-base font-semibold tracking-tight text-slate-900 sm:col-span-4">{item.domain}</dt>
              <dd className="text-sm font-normal leading-relaxed text-slate-600 sm:col-span-5">{item.practice}</dd>
              <dd className="text-xs font-semibold text-[#2563eb] sm:col-span-3 sm:text-right">{item.verification}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
