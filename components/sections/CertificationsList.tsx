import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutPageData, whyChooseUsData } from '@/lib/data';

export default function CertificationsList() {
  return (
    <section className="border-t border-[#c5d4cc] bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow={aboutPageData.standardsEyebrow} title={aboutPageData.standardsHeading} />
        </div>

        <dl className="divide-y divide-[#dce6e1] border-y border-[#dce6e1] lg:col-span-8">
          {whyChooseUsData.standards.map((item) => (
            <div key={item.domain} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
              <dt className="text-base font-semibold tracking-tight text-[#0c1f1b] sm:col-span-4">{item.domain}</dt>
              <dd className="text-sm font-normal leading-relaxed text-[#2d423d] sm:col-span-5">{item.practice}</dd>
              <dd className="text-xs font-semibold text-[#0b6b58] sm:col-span-3 sm:text-right">{item.verification}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
