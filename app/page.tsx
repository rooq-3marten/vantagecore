import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import HomeCta from '@/components/sections/HomeCta';
import PartnerStrip from '@/components/sections/PartnerStrip';
import ServiceGrid from '@/components/sections/ServiceGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import { companyName, siteMetadata } from '@/lib/constants';

export const metadata: Metadata = {
  title: siteMetadata.homeTitle,
  description: siteMetadata.homeDescription,
  openGraph: { title: siteMetadata.homeTitle, description: siteMetadata.homeDescription, siteName: companyName, type: 'website' },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PartnerStrip />
      <ServiceGrid />
      <WhyChooseUs />
      <HomeCta />
    </main>
  );
}
