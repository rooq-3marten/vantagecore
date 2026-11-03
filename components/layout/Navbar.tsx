import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import MobileNav from '@/components/ui/MobileNav';
import NavItems from '@/components/ui/NavItems';
import { companyName, contactChannels, navbarCopy, primaryNavLinks, primaryOffice } from '@/lib/constants';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#0c241f]">
      <div className="hidden border-b border-[#193b33] bg-[#071714] text-xs text-[#c7d8d0] sm:block">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-between gap-4 px-6">
          <p className="truncate font-medium text-[#c7d8d0]">{navbarCopy.utilityBarText}</p>
          <div className="flex items-center gap-4 whitespace-nowrap shrink-0">
            <a href={`mailto:${contactChannels.architectureEmail}`} className="text-[#c7d8d0] transition-colors hover:text-white">
              {contactChannels.architectureEmail}
            </a>
            <span aria-hidden="true" className="h-3.5 w-px bg-[#214a40]" />
            <a href={primaryOffice.phoneHref} className="font-semibold tabular-nums text-white underline-offset-4 hover:underline">
              {primaryOffice.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-[#1d423a] bg-[#0c241f]/95 backdrop-blur-md">
        <nav aria-label="Primary" className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-8 px-6">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded py-1 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d399]"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded border border-[#34d399]/70 bg-[#153830] text-white transition-colors duration-150 group-hover:bg-[#0b6b58]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M5 7L12 18L19 7" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 7L12 12L15 7" stroke="#f59e0b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[17px] font-semibold tracking-tight text-white">{companyName}</span>
          </Link>

          <NavItems links={primaryNavLinks} />

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:block">
              <Button href={navbarCopy.ctaHref} variant="solid" size="sm" withArrow>{navbarCopy.ctaLabel}</Button>
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
