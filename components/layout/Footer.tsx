import React from 'react';
import Link from 'next/link';
import PWAInstallButton from '@/components/ui/PWAInstallButton';
import { companyName, footerCopy, legalEntity, primaryEmail, primaryEmailHref, primaryNavLinks, primaryOffice } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#0b6b58] bg-[#081915] text-[#c7d8d0]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-lg font-semibold tracking-tight text-white">{companyName}</p>
            <p className="mt-3 max-w-sm text-sm font-normal leading-relaxed text-[#c7d8d0]">{footerCopy.summary}</p>
            <a
              href={primaryOffice.phoneHref}
              className="mt-5 inline-block rounded text-xs font-medium tabular-nums text-[#fbbf24] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d399]"
            >
              {footerCopy.nocStatusLabel}
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-white">{footerCopy.navigationHeading}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNavLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#c7d8d0] transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-white">{footerCopy.capabilitiesHeading}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerCopy.capabilityLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#c7d8d0] transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white">{footerCopy.headquartersHeading}</p>
            <address className="mt-4 space-y-2 text-sm font-normal not-italic leading-relaxed text-[#c7d8d0]">
              <p>{primaryOffice.coverageArea}</p>
              <p><a href={primaryOffice.phoneHref} className="tabular-nums text-white hover:underline">{primaryOffice.phoneDisplay}</a></p>
              <p><a href={primaryEmailHref} className="text-[#c7d8d0] hover:text-white hover:underline">{primaryEmail}</a></p>
              <p className="text-xs text-[#9cb3a9]">{primaryOffice.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#17362f] pt-6 text-xs text-[#9cb3a9] sm:flex-row">
          <p>{footerCopy.copyrightNotice}</p>
          <div className="flex items-center gap-4">
            <PWAInstallButton />
            <p>{legalEntity}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
