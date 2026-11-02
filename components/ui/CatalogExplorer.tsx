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
      <div role="tablist" aria-label="Filter service disciplines" className="inline-flex flex-wrap gap-1.5 rounded-lg border border-slate-200 bg-white p-1.5">
        <button type="button" role="tab" aria-selected={activeId === 'all'} onClick={() => setActiveId('all')} className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${activeId === 'all' ? 'bg-[#2563eb] text-white' : 'text-slate-600 hover:bg-[#f8fafc] hover:text-slate-900'}`}>
          {allLabel}
        </button>
        {categories.map((cat) => (
          <button key={cat.id} type="button" role="tab" aria-selected={activeId === cat.id} onClick={() => setActiveId(cat.id)} className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${activeId === cat.id ? 'bg-[#2563eb] text-white' : 'text-slate-600 hover:bg-[#f8fafc] hover:text-slate-900'}`}>
            {cat.title}
          </button>
        ))}
      </div>

      <div className="mt-12 divide-y divide-slate-200 border-t border-slate-200">
        {visible.map((category) => (
          <article key={category.id} id={category.id} className="grid scroll-mt-32 grid-cols-1 gap-8 py-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold tabular-nums text-[#2563eb]">{category.index}. Practice</span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{category.title}</h2>
              <p className="mt-3 text-base font-normal leading-relaxed text-slate-600">{category.summary}</p>
              <Link href={`/contact?scope=${category.id}`} className="mt-5 inline-flex items-center rounded-lg text-sm font-semibold text-[#2563eb] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]">
                {category.scopeAction} →
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-lg border border-slate-200 bg-white px-6 py-5">
                <p className="text-xs font-semibold text-slate-600">{deliverablesLabel}</p>
                <ul className="mt-3 divide-y divide-slate-200 text-sm leading-relaxed text-slate-600">
                  {category.deliverables.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 py-3 first:pt-1 last:pb-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]"><path d="M5 12.5l4.2 4.2L19 7" /></svg>
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
