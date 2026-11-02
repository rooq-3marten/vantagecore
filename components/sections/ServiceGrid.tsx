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
    <section className="bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={homeServicesData.eyebrow} title={homeServicesData.heading} description={homeServicesData.description} withBracket />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          <Card featured className="md:col-span-7">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
              <div className="sm:col-span-7">
                <p className="text-xs font-medium text-[#2563eb]">{featured.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{featured.title}</h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600">{featured.description}</p>
              </div>
              <div className="sm:col-span-5">
                <PhotoFrame src={featured.imageSrc} alt={featured.imageAlt} />
              </div>
            </div>
            <ul className="mt-6 space-y-2 border-t border-slate-200 pt-5 text-sm text-slate-600">
              {featured.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-[#2563eb]"><IconGlyph name="check" contained={false} /></span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
            <Link href={featured.linkHref} className="mt-5 inline-flex text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline">
              {featured.linkLabel} →
            </Link>
          </Card>

          <div className="flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-900 p-8 text-white md:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3">
                <IconGlyph name={wanItem.icon} />
                <span className="text-xs font-medium text-slate-300">{wanItem.metric}</span>
              </div>
              <p className="mt-6 text-xs font-medium text-slate-400">{wanItem.category}</p>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white">{wanItem.title}</h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-slate-300">{wanItem.summary}</p>
            </div>
            <Link href={wanItem.href} className="mt-8 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline">
              Inspect network architecture →
            </Link>
          </div>

          <Card className="md:col-span-5">
            <div className="flex items-center justify-between gap-3">
              <IconGlyph name={nocItem.icon} />
              <span className="text-xs font-medium text-[#2563eb]">{nocItem.metric}</span>
            </div>
            <p className="mt-5 text-xs font-medium text-slate-600">{nocItem.category}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">{nocItem.title}</h3>
            <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600">{nocItem.summary}</p>
          </Card>

          <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-8 md:col-span-7 sm:flex-row sm:items-center sm:gap-8">
            <div>
              <p className="text-xs font-medium text-[#2563eb]">{dataItem.category} · {dataItem.metric}</p>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900">{dataItem.title}</h3>
              <p className="mt-2.5 text-sm font-normal leading-relaxed text-slate-600">{dataItem.summary}</p>
            </div>
            <Link href={dataItem.href} className="mt-5 shrink-0 text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline sm:mt-0">
              Data scope →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
