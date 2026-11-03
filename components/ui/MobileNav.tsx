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
        className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#26574c] bg-[#153830] text-white transition-colors hover:border-[#34d399] hover:bg-[#0b6b58] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d399]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
          <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b-2 border-[#0b6b58] bg-[#0c241f] px-6 py-5">
          <ul className="flex flex-col divide-y divide-[#1a3d35]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm font-semibold ${
                    pathname === link.href ? 'text-white' : 'text-[#c7d8d0] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={phoneHref} className="mt-4 block text-xs font-medium tabular-nums text-[#6ee7b7] hover:text-white">
            {phoneDisplay}
          </a>
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-10 w-full items-center justify-center rounded border border-[#07473a] bg-[#0b6b58] px-5 text-[13px] font-semibold text-white hover:bg-[#085243]"
          >
            {ctaLabel} →
          </Link>
        </div>
      )}
    </div>
  );
}
