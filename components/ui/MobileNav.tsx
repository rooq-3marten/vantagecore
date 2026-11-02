'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/lib/types';

export interface MobileNavProps {
  links: readonly NavLink[];
  ctaLabel: string;
  ctaHref: string;
  phoneDisplay: string;
  phoneHref: string;
  openLabel: string;
  closeLabel: string;
}

export default function MobileNav({ links, ctaLabel, ctaHref, phoneDisplay, phoneHref, openLabel, closeLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden" onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}>
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-900 bg-slate-900 text-white transition-colors hover:border-[#2563eb] hover:bg-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
          <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b-2 border-[#2563eb] bg-white px-6 py-6">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg border px-4 py-3 text-base font-semibold ${
                    pathname === link.href
                      ? 'border-[#2563eb] bg-[#eff6ff] text-[#2563eb]'
                      : 'border-slate-200 text-slate-900 hover:bg-[#f8fafc]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={phoneHref} className="mt-4 block text-sm font-medium tabular-nums text-slate-600 hover:text-[#2563eb]">
            {phoneDisplay}
          </a>
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
