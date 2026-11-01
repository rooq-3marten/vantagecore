import React from 'react';
import Section from './Section';
import SectionHeading from './SectionHeading';
import type { LeaderItem } from '../lib/data';

interface LeadershipSectionProps {
  leaders: LeaderItem[];
}

export default function LeadershipSection({ leaders }: LeadershipSectionProps) {
  return (
    <Section layer="surface" spacing="default">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-4">
          <SectionHeading
            kicker="Practice Leadership"
            title="Partners who still review runbooks and join cutover bridges."
            description="Every client engagement has a named principal partner responsible for architecture sign-off and escalation governance."
          />
        </div>

        <div className="lg:col-span-8 lg:border-l lg:border-slate-200 lg:pl-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.name} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold tracking-tight text-slate-900"
                  >
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#1d4ed8]">{leader.role}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-normal leading-relaxed text-slate-600">
                  {leader.bio}
                </p>
              </div>

              <p className="mt-4 pt-3 border-t border-slate-200 text-xs font-normal text-slate-600">
                {leader.credentials}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
