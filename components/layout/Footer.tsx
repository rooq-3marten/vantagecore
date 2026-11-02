import React from 'react';
import Link from 'next/link';
import { companyName, footerCopy, legalEntity, primaryEmail, primaryEmailHref, primaryNavLinks, primaryOffice } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#2563eb] bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-lg font-semibold tracking-tight text-white">{companyName}</p>
            <p className="mt-3 max-w-sm text-sm font-normal leading-relaxed text-slate-300">{footerCopy.summary}</p>
            <a
              href={primaryOffice.phoneHref}
              className="mt-5 inline-block rounded-lg text-xs font-medium tabular-nums text-[#f59e0b] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
            >
              {footerCopy.nocStatusLabel}
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-white">{footerCopy.navigationHeading}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNavLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-300 transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-white">{footerCopy.capabilitiesHeading}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerCopy.capabilityLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-300 transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white">{footerCopy.headquartersHeading}</p>
            <address className="mt-4 space-y-2 text-sm font-normal not-italic leading-relaxed text-slate-300">
              <p>{primaryOffice.addressLine}</p>
              <p>{primaryOffice.cityCountry}</p>
              <p><a href={primaryOffice.phoneHref} className="tabular-nums text-white hover:underline">{primaryOffice.phoneDisplay}</a></p>
              <p><a href={primaryEmailHref} className="text-slate-300 hover:text-white hover:underline">{primaryEmail}</a></p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>{footerCopy.copyrightNotice}</p>
          <p>{legalEntity}</p>
        </div>
      </div>
    </footer>
  );
}
