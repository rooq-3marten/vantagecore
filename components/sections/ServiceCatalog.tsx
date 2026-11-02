import React from 'react';
import CatalogExplorer from '@/components/ui/CatalogExplorer';
import SectionHeading from '@/components/ui/SectionHeading';
import { servicesPageData } from '@/lib/data';

export default function ServiceCatalog() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading as="h1" eyebrow={servicesPageData.eyebrow} title={servicesPageData.heading} description={servicesPageData.intro} withBracket />
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20">
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
