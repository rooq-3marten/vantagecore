import React from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { whyChooseUsData } from '@/lib/data';

export default function WhyChooseUs() {
  return (
    <section className="border-t border-[#c5d4cc] bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={whyChooseUsData.eyebrow} title={whyChooseUsData.heading} description={whyChooseUsData.intro} />
          <Link href={whyChooseUsData.aboutLinkHref} className="mt-6 inline-flex text-[13px] font-semibold text-[#0b6b58] underline-offset-4 hover:text-[#07473a] hover:underline">
            {whyChooseUsData.aboutLinkLabel} →
          </Link>

          <div className="mt-8 rounded border border-[#1a4037] bg-[#0e2a24] p-6">
            <p className="text-xs font-semibold text-[#6ee7b7]">{whyChooseUsData.standardsLabel}</p>
            <dl className="mt-3 divide-y divide-[#1d463c] text-sm">
              {whyChooseUsData.standards.slice(0, 3).map((std) => (
                <div key={std.domain} className="flex items-baseline justify-between gap-3 py-2.5">
                  <dt className="font-medium text-[#f4f7f5]">{std.domain}</dt>
                  <dd className="text-xs font-medium text-[#6ee7b7]">{std.verification}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <dl className="divide-y divide-[#dce6e1] border-y border-[#dce6e1]">
            {whyChooseUsData.points.map((point) => (
              <div key={point.step} className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-5">
                  <span className="text-xs font-semibold tabular-nums text-[#0b6b58]">{point.step}.</span>
                  <span className="mt-1 block text-lg font-semibold tracking-tight text-[#0c1f1b]">{point.title}</span>
                </dt>
                <dd className="text-base font-normal leading-relaxed text-[#2d423d] sm:col-span-7">{point.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
