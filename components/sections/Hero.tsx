import React from 'react';
import Button from '@/components/ui/Button';
import PhotoFrame from '@/components/ui/PhotoFrame';
import { heroData } from '@/lib/data';

export default function Hero() {
  return (
    <section aria-label={heroData.eyebrow} className="relative bg-[#f8fafc] pb-16">
      <div aria-hidden="true" className="hero-dot-grid absolute inset-x-0 top-0 h-56 bg-slate-900 md:h-64" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-6 pt-10 lg:grid-cols-12 lg:pt-14">
        <div className="hero-surface-wash relative rounded-lg border border-slate-200 p-8 md:p-11 lg:col-span-7">
          <div className="accent-gradient-bar mb-5 h-1 w-16 rounded-lg" />

          <div className="anim-hero-1">
            <p className="text-xs font-medium text-[#2563eb]">{heroData.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.1] text-slate-900 sm:text-5xl">
              {heroData.headlinePrefix}{' '}
              <span className="underline decoration-[#f59e0b] decoration-4 underline-offset-8">{heroData.headlineAccentWord}</span>{' '}
              {heroData.headlineSuffix}
            </h1>
          </div>

          <p className="anim-hero-2 mt-6 max-w-xl text-base font-normal leading-relaxed text-slate-600 md:text-lg">
            {heroData.subheadline}
          </p>

          <div className="anim-hero-3 mt-8 flex flex-wrap items-center gap-4">
            <Button href={heroData.primaryCtaHref} variant="gradient">{heroData.primaryCtaLabel}</Button>
            <Button href={heroData.secondaryCtaHref} variant="outline">{heroData.secondaryCtaLabel}</Button>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-5">
          <PhotoFrame src={heroData.imageSrc} alt={heroData.imageAlt} priority aspectClass="aspect-[16/10]" />

          <dl className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white px-6 py-2">
            {heroData.stats.map((stat) => (
              <div key={stat.value} className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-sm font-normal leading-snug text-slate-600">{stat.label}</dt>
                <dd className="shrink-0 text-xl font-semibold tracking-tight tabular-nums text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
