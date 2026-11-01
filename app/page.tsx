import React from 'react';
import {
  CtaBanner,
  HeroSection,
  PartnerStrip,
  ServiceHighlightGrid,
  WhyChooseUsSection,
} from '../components';
import { COMPANY_NAME, type SiteMetadata } from '../lib/constants';
import {
  heroContent,
  heroScopeFacts,
  homeCertifications,
  homeFinalCta,
  operatingPrinciples,
  partners,
  serviceHighlights,
} from '../lib/data';

export const metadata: SiteMetadata = {
  title: `${COMPANY_NAME} – Cloud & Network Infrastructure`,
  description:
    'We migrate on-premise server estates to Google Cloud and Microsoft Azure, build redundant multi-site networks, and staff a 24/7 infrastructure operations desk.',
  openGraph: {
    title: `${COMPANY_NAME} – Cloud & Network Infrastructure`,
    description:
      'We migrate on-premise server estates to Google Cloud and Microsoft Azure, build redundant multi-site networks, and staff a 24/7 infrastructure operations desk.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection content={heroContent} scopeFacts={heroScopeFacts} />
      <PartnerStrip partners={partners} />
      <ServiceHighlightGrid items={serviceHighlights} />
      <WhyChooseUsSection
        points={operatingPrinciples}
        certifications={homeCertifications}
      />
      <CtaBanner {...homeFinalCta} />
    </>
  );
}
