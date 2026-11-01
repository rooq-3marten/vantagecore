import React from 'react';
import Section from './Section';
import SectionHeading from './SectionHeading';
import BadgePill from './BadgePill';
import SpecListItem from './SpecListItem';
import type {
  CertificationBadgeItem,
  OperatingPrincipleItem,
} from '../lib/data';

interface WhyChooseUsSectionProps {
  points: OperatingPrincipleItem[];
  certifications: CertificationBadgeItem[];
}

export default function WhyChooseUsSection({
  points,
  certifications,
}: WhyChooseUsSectionProps) {
  return (
    <Section layer="base" spacing="generous">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            kicker="Operating Model"
            title="Senior engineers on the keyboard, backed by written SLAs."
            description="Most infrastructure outages trace back to rushed cutovers or undocumented firewall edits. Every engagement runs through peer-reviewed runbooks, and the same engineers stay on your account after launch."
          />

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-xs font-semibold text-slate-600 mb-3">
              Audited Standards &amp; Accreditations
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {certifications.map((cert) => (
                <BadgePill
                  key={cert.title}
                  label={cert.title}
                  title={`${cert.issuer} — ${cert.meta}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-slate-200">
          <ul className="space-y-6">
            {points.map((point) => (
              <SpecListItem
                key={point.index}
                index={point.index}
                title={point.title}
                description={point.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
