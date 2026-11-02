import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import ContactSection from '@/components/sections/ContactSection';
import { companyName, siteMetadata } from '@/lib/constants';

export const metadata: Metadata = {
  title: siteMetadata.contactTitle,
  description: siteMetadata.contactDescription,
  openGraph: { title: siteMetadata.contactTitle, description: siteMetadata.contactDescription, siteName: companyName, type: 'website' },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection formSlot={<ContactForm />} />
    </main>
  );
}
