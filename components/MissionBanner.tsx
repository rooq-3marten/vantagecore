import React from 'react';
import Section from './Section';
import MetaList from './MetaList';
import type { missionContent as MissionContentType } from '../lib/data';

interface MissionBannerProps {
  content: typeof MissionContentType;
}

export default function MissionBanner({ content }: MissionBannerProps) {
  return (
    <Section layer="base" spacing="default">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold text-[#1d4ed8]">{content.kicker}</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-slate-900">
            {content.title}
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pl-10 lg:border-l lg:border-slate-200">
          <p className="text-base sm:text-lg font-normal leading-relaxed text-slate-600">
            {content.statement}
          </p>
          <MetaList
            items={content.pillars}
            className="mt-6 text-xs font-semibold text-slate-900"
          />
        </div>
      </div>
    </Section>
  );
}
