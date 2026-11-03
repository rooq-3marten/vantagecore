import React from 'react';
import PhotoFrame from '@/components/ui/PhotoFrame';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutPageData } from '@/lib/data';

export default function CompanyStory() {
  return (
    <section className="bg-[#eff3f0] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading as="h1" eyebrow={aboutPageData.eyebrow} title={aboutPageData.heading} withBracket />
            <p className="mt-6 text-base font-normal leading-relaxed text-[#2d423d]">{aboutPageData.storyParagraphOne}</p>
            <p className="mt-4 text-base font-normal leading-relaxed text-[#2d423d]">{aboutPageData.storyParagraphTwo}</p>
          </div>
          <div className="lg:col-span-5">
            <PhotoFrame
              src={aboutPageData.imageSrc}
              fallbackSrc={aboutPageData.fallbackImageSrc}
              alt={aboutPageData.imageAlt}
              priority
            />
          </div>
        </div>

        <div className="mt-16 pt-8">
          <p className="text-xs font-semibold text-[#2d423d]">{aboutPageData.workflowLabel}</p>
          <ol className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {aboutPageData.workflowStages.map((stage) => (
              <li key={stage.step} className={`border-t-2 border-[#95b3a6] pt-4 ${stage.wide ? 'lg:col-span-4' : 'lg:col-span-2'}`}>
                <span className="text-sm font-semibold tabular-nums text-[#0b6b58]">{stage.step}</span>
                <h2 className="mt-1.5 text-base font-semibold tracking-tight text-[#0c1f1b]">{stage.heading}</h2>
                <p className="mt-1.5 text-sm font-normal leading-relaxed text-[#2d423d]">{stage.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
