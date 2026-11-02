import React from 'react';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutPageData } from '@/lib/data';

export default function LeadershipGrid() {
  const [leadPartner, ...principals] = aboutPageData.team;

  return (
    <section className="bg-[#f8faff] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={aboutPageData.leadershipEyebrow} title={aboutPageData.leadershipHeading} description={aboutPageData.leadershipIntro} />

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <Card featured className="lg:col-span-5">
            <span className="text-xs font-semibold text-[#2563eb]">{leadPartner.role}</span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{leadPartner.name}</h3>
            <p className="mt-1.5 text-xs font-medium text-slate-600">{leadPartner.focus}</p>
            <p className="mt-5 border-t border-slate-200 pt-5 text-base font-normal leading-relaxed text-slate-600">{leadPartner.bio}</p>
          </Card>

          <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white px-7 lg:col-span-7">
            {principals.map((member) => (
              <div key={member.name} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-5">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">{member.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-[#2563eb]">{member.role}</p>
                  <p className="mt-1 text-xs font-normal text-slate-600">{member.focus}</p>
                </div>
                <p className="text-sm font-normal leading-relaxed text-slate-600 sm:col-span-7">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
