'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { ServiceCategory } from '@/lib/types';

export interface CatalogExplorerProps {
  categories: readonly ServiceCategory[];
  allLabel: string;
  deliverablesLabel: string;
}

export default function CatalogExplorer({ categories, allLabel, deliverablesLabel }: CatalogExplorerProps) {
  const [activeId, setActiveId] = useState<string>('all');
  const visible = activeId === 'all' ? categories : categories.filter((c) => c.id === activeId);

  return (
    <div>
      <div role="tablist" aria-label="Filter service disciplines" className="flex flex-wrap gap-6 border-b border-[#bdcdc5]">
        <button
          type="button"
          role="tab"
          aria-selected={activeId === 'all'}
          onClick={() => setActiveId('all')}
          className={`-mb-px border-b-2 pb-3 pt-1 text-[13px] font-semibold whitespace-nowrap transition-colors ${
            activeId === 'all' ? 'border-[#0b6b58] text-[#0b6b58]' : 'border-transparent text-[#4b635d] hover:text-[#0c1f1b]'
          }`}
        >
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeId === cat.id}
            onClick={() => setActiveId(cat.id)}
            className={`-mb-px border-b-2 pb-3 pt-1 text-[13px] font-semibold whitespace-nowrap transition-colors ${
              activeId === cat.id ? 'border-[#0b6b58] text-[#0b6b58]' : 'border-transparent text-[#4b635d] hover:text-[#0c1f1b]'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="mt-10 divide-y divide-[#c8d7d0]">
        {visible.map((category) => (
          <article key={category.id} id={category.id} className="grid scroll-mt-32 grid-cols-1 gap-8 py-12 first:pt-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold tabular-nums text-[#0b6b58]">{category.index}. Practice</span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0c1f1b]">{category.title}</h2>
              <p className="mt-3 text-base font-normal leading-relaxed text-[#2d423d]">{category.summary}</p>
              <Link href={`/contact?scope=${category.id}`} className="mt-5 inline-flex items-center rounded text-[13px] font-semibold text-[#0b6b58] underline-offset-4 hover:text-[#07473a] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b58]">
                {category.scopeAction} →
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="rounded border border-[#c5d4cc] bg-white px-6 py-5">
                <p className="text-xs font-semibold text-[#0c1f1b]">{deliverablesLabel}</p>
                <ul className="mt-3 divide-y divide-[#e2ebe6] text-sm leading-relaxed text-[#2d423d]">
                  {category.deliverables.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 py-3 first:pt-1 last:pb-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0b6b58]"><path d="M5 12.5l4.2 4.2L19 7" /></svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
