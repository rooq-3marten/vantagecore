import React from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { whyChooseUsData } from '@/lib/data';

export default function WhyChooseUs() {
  return (
    <section className="border-t border-slate-200 bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={whyChooseUsData.eyebrow} title={whyChooseUsData.heading} description={whyChooseUsData.intro} />
          <Link href={whyChooseUsData.aboutLinkHref} className="mt-6 inline-flex text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline">
            {whyChooseUsData.aboutLinkLabel} →
          </Link>

          <div className="mt-8 rounded-lg border border-slate-200 bg-[#f8faff] p-6">
            <p className="text-xs font-semibold text-slate-900">{whyChooseUsData.standardsLabel}</p>
            <dl className="mt-3 divide-y divide-slate-200 text-sm">
              {whyChooseUsData.standards.slice(0, 3).map((std) => (
                <div key={std.domain} className="flex items-baseline justify-between gap-3 py-2.5">
                  <dt className="font-medium text-slate-900">{std.domain}</dt>
                  <dd className="text-xs font-medium text-[#2563eb]">{std.verification}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {whyChooseUsData.points.map((point) => (
              <div key={point.step} className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-5">
                  <span className="text-xs font-semibold tabular-nums text-[#2563eb]">{point.step}.</span>
                  <span className="mt-1 block text-lg font-semibold tracking-tight text-slate-900">{point.title}</span>
                </dt>
                <dd className="text-base font-normal leading-relaxed text-slate-600 sm:col-span-7">{point.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
