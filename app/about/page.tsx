import React from 'react';
import type { Metadata } from 'next';
import CertificationsList from '@/components/sections/CertificationsList';
import CompanyStory from '@/components/sections/CompanyStory';
import LeadershipGrid from '@/components/sections/LeadershipGrid';
import MissionSection from '@/components/sections/MissionSection';
import { companyName, siteMetadata } from '@/lib/constants';

export const metadata: Metadata = {
  title: siteMetadata.aboutTitle,
  description: siteMetadata.aboutDescription,
  openGraph: { title: siteMetadata.aboutTitle, description: siteMetadata.aboutDescription, siteName: companyName, type: 'website' },
};

export default function AboutPage() {
  return (
    <main>
      <CompanyStory />
      <MissionSection />
      <LeadershipGrid />
      <CertificationsList />
    </main>
  );
}
