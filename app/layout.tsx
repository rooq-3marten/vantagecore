import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { companyName, siteMetadata } from '@/lib/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' });

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
    <div className={`${inter.className} flex min-h-screen flex-col bg-[#f8fafc] text-slate-900 antialiased`}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
