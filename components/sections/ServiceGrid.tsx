import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import IconGlyph from '@/components/ui/IconGlyph';
import PhotoFrame from '@/components/ui/PhotoFrame';
import SectionHeading from '@/components/ui/SectionHeading';
import { homeServicesData } from '@/lib/data';

export default function ServiceGrid() {
  const { featured, highlights } = homeServicesData;
  const [wanItem, nocItem, dataItem] = highlights;

  return (
    <section className="bg-[#eff3f0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={homeServicesData.eyebrow} title={homeServicesData.heading} description={homeServicesData.description} withBracket />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          <Card featured className="md:col-span-7">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
              <div className="sm:col-span-7">
                <p className="text-xs font-semibold text-[#0b6b58]">{featured.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0c1f1b]">{featured.title}</h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-[#2d423d]">{featured.description}</p>
              </div>
              <div className="sm:col-span-5">
                <PhotoFrame src={featured.imageSrc} fallbackSrc={featured.fallbackImageSrc} alt={featured.imageAlt} />
              </div>
            </div>
            <ul className="mt-6 space-y-2 border-t border-[#dce6e1] pt-5 text-sm text-[#2d423d]">
              {featured.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-[#0b6b58]"><IconGlyph name="check" contained={false} /></span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
            <Link href={featured.linkHref} className="mt-5 inline-flex text-[13px] font-semibold text-[#0b6b58] underline-offset-4 hover:text-[#07473a] hover:underline">
              {featured.linkLabel} →
            </Link>
          </Card>

          <div className="group flex flex-col justify-between rounded border border-[#1f4d42] bg-[#11312a] p-8 text-white md:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3">
                <IconGlyph name={wanItem.icon} tone="dark" />
                <span className="text-xs font-medium text-[#6ee7b7]">{wanItem.metric}</span>
              </div>
              <p className="mt-6 text-xs font-medium text-[#c7d8d0]">{wanItem.category}</p>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white">{wanItem.title}</h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-[#d9e6e0]">{wanItem.summary}</p>
            </div>
            <Link href={wanItem.href} className="mt-8 inline-flex text-[13px] font-semibold text-[#6ee7b7] underline-offset-4 hover:text-white hover:underline">
              Inspect network architecture →
            </Link>
          </div>

          <Card className="md:col-span-5">
            <div className="flex items-center justify-between gap-3">
              <IconGlyph name={nocItem.icon} />
              <span className="text-xs font-semibold text-[#0b6b58]">{nocItem.metric}</span>
            </div>
            <p className="mt-5 text-xs font-medium text-[#4b635d]">{nocItem.category}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#0c1f1b]">{nocItem.title}</h3>
            <p className="mt-2 text-sm font-normal leading-relaxed text-[#2d423d]">{nocItem.summary}</p>
          </Card>

          <div className="flex flex-col justify-between rounded border border-[#bdd0c6] bg-[#e3ece7] p-8 md:col-span-7 sm:flex-row sm:items-center sm:gap-8">
            <div>
              <p className="text-xs font-semibold text-[#0b6b58]">{dataItem.category} · {dataItem.metric}</p>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-[#0c1f1b]">{dataItem.title}</h3>
              <p className="mt-2.5 text-sm font-normal leading-relaxed text-[#2d423d]">{dataItem.summary}</p>
            </div>
            <Link href={dataItem.href} className="mt-5 shrink-0 text-[13px] font-semibold text-[#0b6b58] underline-offset-4 hover:text-[#07473a] hover:underline sm:mt-0">
              Data scope →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
