import React from 'react';
import CatalogExplorer from '@/components/ui/CatalogExplorer';
import SectionHeading from '@/components/ui/SectionHeading';
import { servicesPageData } from '@/lib/data';

export default function ServiceCatalog() {
  return (
    <>
      <section className="border-b border-[#1a4037] bg-[#0e2a24] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading as="h1" tone="dark" eyebrow={servicesPageData.eyebrow} title={servicesPageData.heading} description={servicesPageData.intro} withBracket />
        </div>
      </section>

      <section className="bg-[#eff3f0] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <CatalogExplorer
            categories={servicesPageData.categories}
            allLabel={servicesPageData.allFilterLabel}
            deliverablesLabel={servicesPageData.deliverablesLabel}
          />
        </div>
      </section>
    </>
  );
}
