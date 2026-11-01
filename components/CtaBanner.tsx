import React from 'react';
import Section from './Section';
import Button from './Button';

interface CtaBannerProps {
  kicker?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CtaBanner({
  kicker,
  title,
  description,
  ctaLabel,
  ctaHref,
}: CtaBannerProps) {
  return (
    <Section layer="surface" spacing="asymmetric">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8 max-w-2xl">
          {kicker && (
            <p className="text-xs font-semibold text-[#1d4ed8]">{kicker}</p>
          )}
          <h2 className="mt-2.5 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 leading-snug">
            {title}
          </h2>
          <p className="mt-3 text-base font-normal leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
