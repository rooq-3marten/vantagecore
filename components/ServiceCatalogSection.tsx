import React, { useEffect, useState } from 'react';
import PageHeader from './PageHeader';
import Section from './Section';
import { navigateTo } from './Button';
import SpecListItem from './SpecListItem';
import type { ServiceCategoryDetail, ServiceCategoryKey } from '../lib/data';

interface ServiceCatalogSectionProps {
  categories: ServiceCategoryDetail[];
  filterOptions: { key: ServiceCategoryKey; label: string }[];
}

export default function ServiceCatalogSection({
  categories,
  filterOptions,
}: ServiceCatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryKey>('all');

  useEffect(() => {
    const syncFromQuery = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category') as ServiceCategoryKey | null;
      if (cat && ['cloud', 'security', 'managed', 'data'].includes(cat)) {
        setSelectedCategory(cat);
      } else {
        setSelectedCategory('all');
      }
    };

    syncFromQuery();
    window.addEventListener('popstate', syncFromQuery);
    return () => window.removeEventListener('popstate', syncFromQuery);
  }, []);

  const visibleCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === selectedCategory);

  return (
    <>
      <PageHeader
        kicker="Practice Areas & Scope"
        title="Four practice areas. One accountable engineering team."
        description="Filter by discipline below to review technical scope, supported platforms, and standard project deliverables."
      >
        <div
          role="tablist"
          aria-label="Filter service categories"
          className="flex flex-wrap items-center gap-2"
        >
          {filterOptions.map((opt) => {
            const active = selectedCategory === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                role="tab"
                data-layer="elevated"
                aria-selected={active}
                onClick={() => setSelectedCategory(opt.key)}
                className={`min-h-[40px] rounded-lg border px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] ${
                  active
                    ? 'border-[#1d4ed8] bg-[#1d4ed8] text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#1d4ed8] hover:text-[#1d4ed8]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </PageHeader>

      <Section layer="surface" spacing="generous">
        <div className="divide-y divide-slate-200">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#1d4ed8] tabular-nums">
                    {category.index}
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                    {category.name}
                  </h2>
                  <p className="mt-3 text-base font-normal leading-relaxed text-slate-600">
                    {category.description}
                  </p>
                  <p className="mt-4 text-xs font-normal text-slate-600">
                    {category.platforms}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200">
                  <p className="text-xs font-normal text-slate-600 mb-3.5">
                    {category.deliverableNote}
                  </p>
                  <button
                    type="button"
                    data-layer="elevated"
                    onClick={() =>
                      navigateTo(`/contact?topic=${encodeURIComponent(category.name)}`)
                    }
                    className="inline-flex items-center rounded-lg border border-[#1d4ed8] px-4 py-2 text-xs font-semibold text-[#1d4ed8] transition-all duration-150 hover:bg-[#1d4ed8] hover:text-white hover:scale-105 cursor-pointer"
                  >
                    Discuss {category.name} scope &rarr;
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-slate-200">
                <ul className="space-y-5">
                  {category.bullets.map((bullet) => (
                    <SpecListItem
                      key={bullet.title}
                      title={bullet.title}
                      description={bullet.detail}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
