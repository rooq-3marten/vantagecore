import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import IconGlyph from '@/components/ui/IconGlyph';
import SectionHeading from '@/components/ui/SectionHeading';
import { navbarCopy } from '@/lib/constants';
import { aboutPageData } from '@/lib/data';

export default function DeliveryModel() {
  const [projectModel, retainerModel] = aboutPageData.engagementModels;

  return (
    <section className="bg-[#eff3f0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={aboutPageData.deliveryEyebrow}
          title={aboutPageData.deliveryHeading}
          description={aboutPageData.deliveryIntro}
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <Card featured className="lg:col-span-5">
            <span className="text-xs font-semibold text-[#0b6b58]">{projectModel.cadence}</span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0c1f1b]">{projectModel.title}</h3>
            <p className="mt-3 text-sm font-normal leading-relaxed text-[#2d423d]">{projectModel.summary}</p>
            <ul className="mt-5 space-y-2.5 border-t border-[#dce6e1] pt-5 text-sm text-[#2d423d]">
              {projectModel.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-[#0b6b58]"><IconGlyph name="check" contained={false} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="rounded border border-[#bdd0c6] bg-[#e3ece7] p-8 lg:col-span-7">
            <span className="text-xs font-semibold text-[#0b6b58]">{retainerModel.cadence}</span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0c1f1b]">{retainerModel.title}</h3>
            <p className="mt-3 text-base font-normal leading-relaxed text-[#2d423d]">{retainerModel.summary}</p>
            <ul className="mt-6 divide-y divide-[#c2d4cb] border-t border-[#c2d4cb] text-sm text-[#2d423d]">
              {retainerModel.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3.5 last:pb-0">
                  <span className="mt-0.5 text-[#0b6b58]"><IconGlyph name="check" contained={false} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href={navbarCopy.ctaHref} className="mt-6 inline-flex text-[13px] font-semibold text-[#0b6b58] underline-offset-4 hover:text-[#07473a] hover:underline">
              {navbarCopy.ctaLabel} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
