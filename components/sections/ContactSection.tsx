import React from 'react';
import CopyEmailButton from '@/components/ui/CopyEmailButton';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  contactChannels, primaryEmail, primaryEmailHref,
  primaryOffice, primaryPhoneDisplay, primaryPhoneHref, secondaryOffice,
} from '@/lib/constants';
import { contactPageData } from '@/lib/data';

export interface ContactSectionProps {
  formSlot: React.ReactNode;
}

const offices = [primaryOffice, secondaryOffice] as const;

export default function ContactSection({ formSlot }: ContactSectionProps) {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading as="h1" eyebrow={contactPageData.eyebrow} title={contactPageData.heading} description={contactPageData.intro} withBracket />
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">{formSlot}</div>

          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-7">
              <h2 className="text-xs font-semibold text-[#2563eb]">{contactPageData.directLinesHeading}</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-normal text-slate-600">{contactChannels.architectureLabel}</p>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                    <a href={primaryEmailHref} className="text-base font-semibold text-slate-900 underline-offset-4 hover:text-[#2563eb] hover:underline">
                      {primaryEmail}
                    </a>
                    <CopyEmailButton
                      email={primaryEmail}
                      copyLabel={contactChannels.copyEmailLabel}
                      copiedLabel={contactChannels.copiedEmailLabel}
                    />
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-normal text-slate-600">{contactChannels.nocLabel}</p>
                  <a href={primaryPhoneHref} className="mt-1 inline-block text-xl font-semibold tabular-nums text-slate-900 underline-offset-4 hover:text-[#2563eb] hover:underline">
                    {primaryPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-600">{contactPageData.officesHeading}</h2>
              <div className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
                {offices.map((office) => (
                  <div key={office.region} className="py-5">
                    <h3 className="text-base font-semibold tracking-tight text-slate-900">{office.region}</h3>
                    <div className="mt-2 space-y-1 text-sm font-normal leading-relaxed text-slate-600">
                      <p>{office.coverageArea}</p>
                      <p className="tabular-nums">{office.hours}</p>
                    </div>
                    <p className="mt-2 text-xs font-medium text-[#2563eb]">{office.deskNote}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
