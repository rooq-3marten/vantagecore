'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ServiceCategory } from '@/lib/types';

export interface CatalogExplorerProps {
  categories: readonly ServiceCategory[];
  allLabel: string;
  deliverablesLabel: string;
}

export default function CatalogExplorer({ categories, allLabel, deliverablesLabel }: CatalogExplorerProps) {
  const [activeId, setActiveId] = useState<string>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (categories.some((c) => c.id === hash)) setActiveId(hash);
  }, [categories]);

  const selectTab = (id: string) => { setActiveId(id); window.history.replaceState(null, '', id === 'all' ? window.location.pathname : `#${id}`); };
  const toggleItem = (item: string) => setSelectedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  const visible = activeId === 'all' ? categories : categories.filter((c) => c.id === activeId);
  const matched = categories.filter((c) => c.deliverables.some((d) => selectedItems.includes(d)));
  const briefHref = `/contact?scope=${matched.length === 1 ? matched[0].id : (activeId !== 'all' ? activeId : 'general')}&items=${encodeURIComponent(selectedItems.join('; '))}`;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#bdcdc5]">
        <div role="tablist" aria-label="Filter service disciplines" className="flex flex-wrap gap-6">
          <button type="button" role="tab" aria-selected={activeId === 'all'} onClick={() => selectTab('all')} className={`-mb-px border-b-2 pb-3 pt-1 text-[13px] font-semibold whitespace-nowrap transition-colors ${activeId === 'all' ? 'border-[#0b6b58] text-[#0b6b58]' : 'border-transparent text-[#4b635d] hover:text-[#0c1f1b]'}`}>
            {allLabel}
          </button>
          {categories.map((cat) => (
            <button key={cat.id} type="button" role="tab" aria-selected={activeId === cat.id} onClick={() => selectTab(cat.id)} className={`-mb-px border-b-2 pb-3 pt-1 text-[13px] font-semibold whitespace-nowrap transition-colors ${activeId === cat.id ? 'border-[#0b6b58] text-[#0b6b58]' : 'border-transparent text-[#4b635d] hover:text-[#0c1f1b]'}`}>
              {cat.title}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => window.print()} className="pb-3 pt-1 text-xs font-medium text-[#4b635d] hover:text-[#0b6b58]">Print Brief (PDF) ↗</button>
      </div>

      <div className="mt-10 divide-y divide-[#c8d7d0]">
        {visible.map((cat) => (
          <article key={cat.id} id={cat.id} className="grid scroll-mt-32 grid-cols-1 gap-8 py-12 first:pt-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold tabular-nums text-[#0b6b58]">{cat.index}. Practice</span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0c1f1b]">{cat.title}</h2>
              <p className="mt-3 text-base font-normal leading-relaxed text-[#2d423d]">{cat.summary}</p>
              <Link href={selectedItems.length > 0 ? briefHref : `/contact?scope=${cat.id}`} className="mt-5 inline-flex items-center rounded text-[13px] font-semibold text-[#0b6b58] hover:text-[#07473a] hover:underline">
                {cat.scopeAction} →
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="rounded border border-[#c5d4cc] bg-white px-6 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#0c1f1b]">{deliverablesLabel}</p>
                  <span className="text-[11px] font-medium text-[#0b6b58]">Select items to pre-fill brief</span>
                </div>
                <ul className="mt-3 divide-y divide-[#e2ebe6] text-sm leading-relaxed text-[#2d423d]">
                  {cat.deliverables.map((bullet) => {
                    const isChecked = selectedItems.includes(bullet);
                    return (
                      <li key={bullet} role="checkbox" aria-checked={isChecked} tabIndex={0} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleItem(bullet); } }} onClick={() => toggleItem(bullet)} className={`group flex cursor-pointer items-start gap-3 rounded p-2.5 transition-colors first:pt-2.5 last:pb-2.5 ${isChecked ? 'bg-[#edf5f1] text-[#0c1f1b]' : 'hover:bg-[#f6faf8]'}`}>
                        <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${isChecked ? 'border-[#0b6b58] bg-[#0b6b58] text-white' : 'border-[#96b8ab] bg-white text-transparent group-hover:border-[#0b6b58]'}`}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-2.5 w-2.5"><path d="M5 12.5l4.2 4.2L19 7" /></svg>
                        </span>
                        <span className={isChecked ? 'font-medium text-[#0c1f1b]' : ''}>{bullet}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedItems.length > 0 && (
        <aside aria-label="Scope brief selection" className="sticky bottom-6 z-30 mt-8 flex flex-wrap items-center justify-between gap-4 rounded border border-[#07473a] bg-[#0c241f] px-5 py-3.5 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0b6b58] text-xs font-semibold tabular-nums text-white">{selectedItems.length}</span>
            <div>
              <p className="text-[13px] font-medium text-[#f4f7f5]">{selectedItems.length === 1 ? '1 deliverable selected for brief' : `${selectedItems.length} deliverables selected for brief`}</p>
              <p className="text-[11px] text-[#96b8ab]">Carried directly into Contact message</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setSelectedItems([])} className="text-xs font-normal text-[#96b8ab] hover:underline">Clear</button>
            <Link href={briefHref} className="inline-flex h-9 items-center justify-center rounded bg-[#0b6b58] px-4 text-xs font-semibold text-white hover:bg-[#085243]">
              Configure Scope in Contact →
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
}
