import React from 'react';
import Button from './Button';
import Section from './Section';
import type { HeroScopeFact, heroContent as HeroContentType } from '../lib/data';

interface HeroSectionProps {
  content: typeof HeroContentType;
  scopeFacts: HeroScopeFact[];
}

export default function HeroSection({ content, scopeFacts }: HeroSectionProps) {
  return (
    <Section layer="surface" spacing="hero">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold text-[#1d4ed8]">
            {content.kicker}
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.06]">
            {content.headline}
          </h1>

          <p className="mt-6 text-base sm:text-lg font-normal leading-relaxed text-slate-600 max-w-2xl">
            {content.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={content.primaryCta.href} variant="primary" size="lg">
              {content.primaryCta.label}
            </Button>
            <Button href={content.secondaryCta.href} variant="secondary" size="lg">
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-4 border-t border-slate-200 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <dl className="space-y-4">
            {scopeFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold text-slate-600">{fact.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-slate-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
