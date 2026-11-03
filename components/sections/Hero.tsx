import React from 'react';
import Button from '@/components/ui/Button';
import PhotoFrame from '@/components/ui/PhotoFrame';
import { heroData } from '@/lib/data';

export default function Hero() {
  return (
    <section aria-label={heroData.eyebrow} className="relative bg-[#eff3f0] pb-16">
      <div
        aria-hidden="true"
        style={{ backgroundImage: `url(${heroData.imageSrc})` }}
        className="relative h-64 overflow-hidden bg-[#0e2a24] bg-cover bg-center md:h-80"
      >
        <img
          src={heroData.imageSrc}
          alt=""
          loading="eager"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="hero-dot-grid absolute inset-0 bg-[#0e2a24]/72" />
      </div>

      <div className="relative mx-auto -mt-36 grid max-w-6xl grid-cols-1 items-start gap-8 px-6 md:-mt-48 lg:grid-cols-12">
        <div className="hero-surface-wash relative rounded border border-[#b5c7be] border-t-2 border-t-[#0b6b58] p-8 md:p-11 lg:col-span-7">
          <div className="accent-gradient-bar mb-5 h-1 w-14 rounded" />

          <div className="anim-hero-1">
            <p className="text-xs font-semibold text-[#0b6b58]">{heroData.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.1] text-[#0c1f1b] [text-wrap:balance] sm:text-5xl">
              {heroData.headlinePrefix}{' '}
              <span className="underline decoration-[#d97706] decoration-4 underline-offset-8">{heroData.headlineAccentWord}</span>{' '}
              {heroData.headlineSuffix}
            </h1>
          </div>

          <p className="anim-hero-2 mt-6 max-w-xl text-base font-normal leading-relaxed text-[#2d423d] md:text-lg">
            {heroData.subheadline}
          </p>

          <div className="anim-hero-3 mt-8 flex flex-wrap items-center gap-3.5">
            <Button href={heroData.primaryCtaHref} variant="gradient" size="md" withArrow>{heroData.primaryCtaLabel}</Button>
            <Button href={heroData.secondaryCtaHref} variant="outline" size="compact">{heroData.secondaryCtaLabel}</Button>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-5">
          <PhotoFrame
            src={heroData.imageSrc}
            fallbackSrc={heroData.fallbackImageSrc}
            alt={heroData.imageAlt}
            priority
            aspectClass="aspect-[16/10]"
          />

          <dl className="divide-y divide-[#1d463c] rounded border border-[#1a4037] bg-[#0e2a24] px-6 py-2">
            {heroData.pillars.map((pillar) => (
              <div key={pillar.scope} className="py-3.5">
                <dt className="text-sm font-semibold tracking-tight text-[#f4f7f5]">{pillar.scope}</dt>
                <dd className="mt-1 text-xs font-normal leading-relaxed text-[#c7d8d0]">{pillar.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
