import React from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import OfflineIndicator from '@/components/ui/OfflineIndicator';
import { companyName, siteMetadata } from '@/lib/constants';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' });

export const metadata: Metadata = {
  title: siteMetadata.homeTitle,
  description: siteMetadata.homeDescription,
  openGraph: {
    title: siteMetadata.homeTitle,
    description: siteMetadata.homeDescription,
    siteName: companyName,
    type: 'website',
  },
};

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${jakarta.className} flex min-h-screen flex-col bg-[#eff3f0] text-[#0c1f1b] antialiased`}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <OfflineIndicator />
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#eff3f0] text-[#0c1f1b]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
