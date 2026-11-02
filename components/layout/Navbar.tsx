import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import MobileNav from '@/components/ui/MobileNav';
import NavItems from '@/components/ui/NavItems';
import { companyName, companyTag, contactChannels, navbarCopy, primaryNavLinks, primaryOffice } from '@/lib/constants';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="hidden border-b border-slate-800 bg-slate-900 text-xs text-slate-300 sm:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-6">
          <p className="truncate font-medium text-slate-300">{navbarCopy.utilityBarText}</p>
          <div className="flex items-center gap-4 whitespace-nowrap shrink-0">
            <a href={`mailto:${contactChannels.architectureEmail}`} className="text-slate-300 transition-colors hover:text-white">
              {contactChannels.architectureEmail}
            </a>
            <span aria-hidden="true" className="h-3.5 w-px bg-slate-700" />
            <a href={primaryOffice.phoneHref} className="font-semibold tabular-nums text-white underline-offset-4 hover:underline">
              {primaryOffice.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-slate-300 bg-white">
        <nav aria-label="Primary" className="relative mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">
          <Link
            href="/"
            className="group flex items-center gap-3.5 rounded-lg py-1 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
          >
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#2563eb] bg-slate-900 text-white transition-colors duration-200 group-hover:bg-[#2563eb]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M5 7L12 18L19 7" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 7L12 12L15 7" stroke="#f59e0b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight leading-tight text-slate-900">{companyName}</span>
              <span className="text-xs font-medium text-[#2563eb]">{companyTag}</span>
            </span>
          </Link>

          <div className="flex h-full items-center gap-6">
            <NavItems links={primaryNavLinks} />
            <span aria-hidden="true" className="hidden h-8 w-px bg-slate-300 md:block" />
            <div className="hidden md:block">
              <Button href={navbarCopy.ctaHref} variant="solid">{navbarCopy.ctaLabel}</Button>
            </div>
            <MobileNav
              links={primaryNavLinks}
              ctaLabel={navbarCopy.ctaLabel}
              ctaHref={navbarCopy.ctaHref}
              phoneDisplay={primaryOffice.phoneDisplay}
              phoneHref={primaryOffice.phoneHref}
              openLabel={navbarCopy.openMenuLabel}
              closeLabel={navbarCopy.closeMenuLabel}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
