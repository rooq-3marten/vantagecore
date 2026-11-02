import React, { useEffect } from 'react';
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import AboutPage, { metadata as aboutMetadata } from '@/app/about/page';
import ContactPage, { metadata as contactMetadata } from '@/app/contact/page';
import { AppShell, metadata as rootMetadata } from '@/app/layout';
import HomePage, { metadata as homeMetadata } from '@/app/page';
import ServicesPage, { metadata as servicesMetadata } from '@/app/services/page';

interface RouteEntry {
  Component: React.ComponentType;
  metadata: Metadata;
}

const routes: Record<string, RouteEntry> = {
  '/': { Component: HomePage, metadata: homeMetadata },
  '/services': { Component: ServicesPage, metadata: servicesMetadata },
  '/about': { Component: AboutPage, metadata: aboutMetadata },
  '/contact': { Component: ContactPage, metadata: contactMetadata },
};

function syncDocumentMetadata(meta: Metadata) {
  const title = meta.title ?? rootMetadata.title ?? '';
  const description = meta.description ?? rootMetadata.description ?? '';
  if (title) document.title = title;
  const setMeta = (selector: string, content: string) => {
    const tag = document.querySelector<HTMLMetaElement>(selector);
    if (tag && content) tag.setAttribute('content', content);
  };
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', meta.openGraph?.title ?? title);
  setMeta('meta[property="og:description"]', meta.openGraph?.description ?? description);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
}

export default function App() {
  const pathname = usePathname();
  const activeRoute = routes[pathname] ?? routes['/'];
  const PageComponent = activeRoute.Component;

  useEffect(() => {
    syncDocumentMetadata(activeRoute.metadata);
    const hashId = window.location.hash.replace(/^#/, '');
    if (hashId) {
      document.getElementById(hashId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, activeRoute.metadata]);

  return (
    <AppShell>
      <PageComponent />
    </AppShell>
  );
}
