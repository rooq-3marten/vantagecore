import React from 'react';
import type { Metadata } from 'next';
import EngagementTable from '@/components/sections/EngagementTable';
import ServiceCatalog from '@/components/sections/ServiceCatalog';
import { companyName, siteMetadata } from '@/lib/constants';

export const metadata: Metadata = {
  title: siteMetadata.servicesTitle,
  description: siteMetadata.servicesDescription,
  openGraph: { title: siteMetadata.servicesTitle, description: siteMetadata.servicesDescription, siteName: companyName, type: 'website' },
};

export default function ServicesPage() {
  return (
    <main>
      <ServiceCatalog />
      <EngagementTable />
    </main>
  );
}
