import React from 'react';
import { navigateTo } from './Button';
import Container from './Container';
import MetaList from './MetaList';
import {
  COMPANY_NAME,
  COMPANY_REG_ID,
  COMPLIANCE_CREDENTIALS,
  HEADQUARTERS_ADDRESS,
  LEGAL_COMPANY_NAME,
  MAINTENANCE_NOTICE,
  PRIMARY_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  SERVICE_HUBS,
  SITE_TAGLINE,
  SUPPORT_DESK_EMAIL,
} from '../lib/constants';
import { footerCompanyLinks, footerServiceLinks } from '../lib/data';

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigateTo(href);
    }
  };

  return (
    <footer data-layer="base" className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <Container className="pt-14 pb-12 md:pt-16 md:pb-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="text-base sm:text-lg font-semibold tracking-tight text-slate-900"
            >
              {COMPANY_NAME}
            </a>
            <p className="mt-3.5 max-w-md text-sm font-normal leading-relaxed text-slate-600">
              {SITE_TAGLINE}
            </p>
            <address className="mt-5 not-italic text-xs font-normal leading-relaxed text-slate-600 space-y-1">
              <p>{HEADQUARTERS_ADDRESS.full}</p>
              <p>{HEADQUARTERS_ADDRESS.hours}</p>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-slate-900">Practice Areas</h3>
            <ul className="mt-4 space-y-2.5 text-sm font-normal">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-slate-600 hover:text-[#1d4ed8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm font-normal">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-slate-600 hover:text-[#1d4ed8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-slate-900">Direct Desks</h3>
            <div className="mt-4 space-y-2.5 text-xs font-normal leading-relaxed text-slate-600">
              <p className="tabular-nums">
                <a
                  href={PRIMARY_PHONE_HREF}
                  className="font-semibold text-slate-900 hover:text-[#1d4ed8] transition-colors"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="hover:text-[#1d4ed8] transition-colors break-all"
                >
                  {PRIMARY_EMAIL}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SUPPORT_DESK_EMAIL}`}
                  className="hover:text-[#1d4ed8] transition-colors break-all"
                >
                  {SUPPORT_DESK_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 text-xs font-normal text-slate-600">
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-slate-900 font-semibold">
              &copy; {new Date().getFullYear()} {LEGAL_COMPANY_NAME} ({COMPANY_REG_ID}). All rights reserved.
            </p>
            <p>{MAINTENANCE_NOTICE}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-1.5">
            <MetaList items={COMPLIANCE_CREDENTIALS} className="font-semibold text-slate-900" />
            <MetaList items={SERVICE_HUBS} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
