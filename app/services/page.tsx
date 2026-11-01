import React from 'react';
import {
  ServiceCatalogSection,
  SlaComparisonSection,
} from '../../components';
import type { SiteMetadata } from '../../lib/constants';
import {
  serviceCategories,
  serviceFilterOptions,
  slaModels,
} from '../../lib/data';

export const metadata: SiteMetadata = {
  title: 'Services & SLA Structures',
  description:
    'Cloud workload migrations, dual-ISP SD-WAN and firewall architecture, 24/7 NOC support, and cloud data warehouse pipelines.',
  openGraph: {
    title: 'Services & SLA Structures | VantageCore Systems',
    description:
      'Cloud workload migrations, dual-ISP SD-WAN and firewall architecture, 24/7 NOC support, and cloud data warehouse pipelines.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceCatalogSection
        categories={serviceCategories}
        filterOptions={serviceFilterOptions}
      />
      <SlaComparisonSection models={slaModels} />
    </>
  );
}
