import React from 'react';
import { ContactWorkspace, OfficeDirectory, PageHeader } from '../../components';
import {
  PRIMARY_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  type SiteMetadata,
} from '../../lib/constants';
import { contactTopics, regionalOffices } from '../../lib/data';

export const metadata: SiteMetadata = {
  title: 'Contact & Offices',
  description:
    'Send a technical brief to our solutions architects or contact our offices in Ikoyi, Lagos and Maitama, Abuja.',
  openGraph: {
    title: 'Contact & Offices | VantageCore Systems',
    description:
      'Send a technical brief to our solutions architects or contact our offices in Ikoyi, Lagos and Maitama, Abuja.',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact & Offices"
        title="Talk directly with a solutions architect."
        description="Send over your migration scope, network topology notes, or tender timeline. Messages go straight to our engineering desk in Lagos and Abuja—not an outsourced call center."
      />
      <ContactWorkspace
        topicOptions={contactTopics}
        email={PRIMARY_EMAIL}
        phoneDisplay={PRIMARY_PHONE_DISPLAY}
        phoneHref={PRIMARY_PHONE_HREF}
      />
      <OfficeDirectory offices={regionalOffices} />
    </>
  );
}
