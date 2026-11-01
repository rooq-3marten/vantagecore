import React from 'react';
import Section from './Section';
import SectionHeading from './SectionHeading';
import Button, { navigateTo } from './Button';
import type { ServiceHighlightItem } from '../lib/data';

interface ServiceHighlightGridProps {
  items: ServiceHighlightItem[];
}

export default function ServiceHighlightGrid({ items }: ServiceHighlightGridProps) {
  const [featured, ...secondary] = items;
  const secondarySpans = ['lg:col-span-3', 'lg:col-span-5', 'lg:col-span-4'] as const;

  return (
    <Section layer="surface" spacing="default">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
        <SectionHeading
          kicker="Core Practice Areas"
          title="Cloud migrations, redundant networks, and 24-hour operations."
          description="Four engineering teams working from shared documentation and change-control standards."
        />
        <div className="shrink-0">
          <Button href="/services" variant="secondary" size="md">
            All Practice Areas
          </Button>
        </div>
      </div>

      {featured && (
        <article className="py-10 border-b border-slate-200 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-semibold text-[#1d4ed8] tabular-nums">
                {featured.index} · Featured Practice
              </span>
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              {featured.title}
            </h3>
            <p className="mt-3.5 text-base font-normal leading-relaxed text-slate-600 max-w-2xl">
              {featured.summary}
            </p>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-8 flex flex-col items-start justify-between gap-4">
            {featured.stackNote && (
              <div>
                <p className="text-xs font-semibold text-slate-600">Primary Stack</p>
                <p className="mt-1 text-sm font-normal text-slate-900">{featured.stackNote}</p>
              </div>
            )}
            <button
              type="button"
              data-layer="elevated"
              onClick={() => navigateTo(`/services?category=${featured.slug}`)}
              className="inline-flex items-center rounded-lg border border-[#1d4ed8] px-4 py-2 text-xs font-semibold text-[#1d4ed8] transition-all duration-150 hover:bg-[#1d4ed8] hover:text-white hover:scale-105 cursor-pointer"
            >
              Read cloud migration scope &rarr;
            </button>
          </div>
        </article>
      )}

      <div className="pt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {secondary.map((service, idx) => (
          <article
            key={service.index}
            className={`${secondarySpans[idx] ?? 'lg:col-span-4'} ${
              idx > 0 ? 'border-t border-slate-200 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8' : ''
            } flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-xs font-semibold text-[#1d4ed8] tabular-nums">
                  {service.index}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-base font-normal leading-relaxed text-slate-600">
                {service.summary}
              </p>
            </div>

            <div className="mt-6 pt-4">
              <button
                type="button"
                data-layer="elevated"
                onClick={() => navigateTo(`/services?category=${service.slug}`)}
                className="inline-block text-sm font-semibold text-[#1d4ed8] transition-transform duration-150 hover:scale-105 hover:underline cursor-pointer"
              >
                Read scope &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
