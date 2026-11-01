import React, { useEffect } from 'react';
import { AppShell } from '../components';
import { COMPANY_NAME, type SiteMetadata } from '../lib/constants';

export interface RootLayoutMetadata {
  title: {
    default: string;
    template: string;
  };
  description: string;
  openGraph: {
    title: string;
    description: string;
    siteName: string;
    locale: string;
    type: 'website';
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
  };
}

export const metadata: RootLayoutMetadata = {
  title: {
    default: `${COMPANY_NAME} – Cloud & Network Infrastructure`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    'We migrate on-premise server estates to Google Cloud and Microsoft Azure, build redundant multi-site networks, and staff a 24/7 infrastructure operations desk.',
  openGraph: {
    title: `${COMPANY_NAME} – Cloud & Network Infrastructure`,
    description:
      'We migrate on-premise server estates to Google Cloud and Microsoft Azure, build redundant multi-site networks, and staff a 24/7 infrastructure operations desk.',
    siteName: COMPANY_NAME,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} – Cloud & Network Infrastructure`,
    description:
      'We migrate on-premise server estates to Google Cloud and Microsoft Azure, build redundant multi-site networks, and staff a 24/7 infrastructure operations desk.',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
  pageMetadata?: SiteMetadata;
}

export default function RootLayout({
  children,
  currentPath = '/',
  pageMetadata,
}: RootLayoutProps) {
  useEffect(() => {
    const resolvedTitle = pageMetadata?.title
      ? pageMetadata.title.includes(COMPANY_NAME)
        ? pageMetadata.title
        : metadata.title.template.replace('%s', pageMetadata.title)
      : metadata.title.default;

    const resolvedDescription = pageMetadata?.description ?? metadata.description;
    const ogTitle = pageMetadata?.openGraph?.title ?? resolvedTitle;
    const ogDescription = pageMetadata?.openGraph?.description ?? resolvedDescription;

    document.title = resolvedTitle;

    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', resolvedDescription);
    updateMeta('meta[property="og:title"]', ogTitle);
    updateMeta('meta[property="og:description"]', ogDescription);
    updateMeta('meta[name="twitter:title"]', pageMetadata?.twitter?.title ?? ogTitle);
    updateMeta(
      'meta[name="twitter:description"]',
      pageMetadata?.twitter?.description ?? ogDescription
    );
  }, [currentPath, pageMetadata]);

  return <AppShell currentPath={currentPath}>{children}</AppShell>;
}
