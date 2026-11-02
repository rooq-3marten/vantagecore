import React from 'react';
import Button from '@/components/ui/Button';
import SectionDivider from '@/components/ui/SectionDivider';
import { homeCtaData } from '@/lib/data';

export default function HomeCta() {
  return (
    <>
      <SectionDivider fromColor="#ffffff" toColor="#eff6ff" />
      <section className="bg-[#eff6ff] py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold text-[#2563eb]">{homeCtaData.eyebrow}</p>
            <h2 className="anim-heading mt-2 text-3xl font-semibold tracking-tight text-slate-900">{homeCtaData.heading}</h2>
            <p className="mt-3 max-w-2xl text-base font-normal leading-relaxed text-slate-600">{homeCtaData.body}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:justify-end">
            <Button href={homeCtaData.primaryHref} variant="solid">{homeCtaData.primaryLabel}</Button>
            <Button href={homeCtaData.secondaryHref} variant="outline">{homeCtaData.secondaryLabel}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
