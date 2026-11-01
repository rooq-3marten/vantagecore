import React from 'react';
import Section from './Section';
import SectionHeading from './SectionHeading';
import type { OfficeLocation } from '../lib/data';

interface OfficeDirectoryProps {
  offices: OfficeLocation[];
}

export default function OfficeDirectory({ offices }: OfficeDirectoryProps) {
  return (
    <Section layer="base" spacing="generous">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-4">
          <SectionHeading
            kicker="Regional Presence"
            title="Physical engineering offices."
            description="In-person architecture workshops and hardware staging run out of our Ikoyi and Maitama facilities."
          />
        </div>

        <div className="lg:col-span-8 lg:border-l lg:border-slate-200 lg:pl-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {offices.map((office) => (
            <div key={office.city}>
              <h3 className="text-base font-semibold tracking-tight text-slate-900">
                {office.city}
              </h3>
              <address className="mt-2.5 not-italic space-y-1.5 text-sm font-normal leading-relaxed text-slate-600">
                <p>{office.address}</p>
                <p>
                  <a
                    href={office.telHref}
                    className="font-semibold text-slate-900 hover:text-[#1d4ed8] tabular-nums"
                  >
                    {office.phone}
                  </a>
                </p>
                <p className="pt-1 text-xs text-slate-600">{office.hours}</p>
              </address>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
