import React from 'react';
import { aboutPageData } from '@/lib/data';

export default function MissionSection() {
  return (
    <section className="border-y border-[#1a4037] bg-[#0e2a24] py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold text-[#6ee7b7]">{aboutPageData.missionEyebrow}</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight leading-snug text-[#f4f7f5] [text-wrap:balance] md:text-3xl">
            {aboutPageData.missionStatement}
          </p>
        </div>

        <div className="space-y-6 lg:col-span-5">
          {aboutPageData.missionPillars.map((pillar) => (
            <div key={pillar.label} className="border-t border-[#1d463c] pt-4 first:border-t-0 first:pt-0">
              <h2 className="text-base font-semibold tracking-tight text-[#f4f7f5]">{pillar.label}</h2>
              <p className="mt-1.5 text-sm font-normal leading-relaxed text-[#c7d8d0]">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
