/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import RootLayout from '../app/layout';
import HomePage, { metadata as homeMetadata } from '../app/page';
import ServicesPage, { metadata as servicesMetadata } from '../app/services/page';
import AboutPage, { metadata as aboutMetadata } from '../app/about/page';
import ContactPage, { metadata as contactMetadata } from '../app/contact/page';
import { NotFoundState } from '../components';
import type { SiteMetadata } from '../lib/constants';

const notFoundMetadata: SiteMetadata = {
  title: 'Page Not Found',
  description: 'The page you requested does not exist or may have moved.',
};

function getCurrentRoute(): string {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname + window.location.search;
}

export default function App() {
  const [route, setRoute] = useState<string>(getCurrentRoute);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getCurrentRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const pathname = route.split('?')[0].replace(/\/+$/, '') || '/';

  let pageContent: React.ReactNode;
  let activeMetadata: SiteMetadata;

  switch (pathname) {
    case '/':
      pageContent = <HomePage />;
      activeMetadata = homeMetadata;
      break;
    case '/services':
      pageContent = <ServicesPage />;
      activeMetadata = servicesMetadata;
      break;
    case '/about':
      pageContent = <AboutPage />;
      activeMetadata = aboutMetadata;
      break;
    case '/contact':
      pageContent = <ContactPage />;
      activeMetadata = contactMetadata;
      break;
    default:
      pageContent = <NotFoundState />;
      activeMetadata = notFoundMetadata;
      break;
  }

  return (
    <RootLayout currentPath={pathname} pageMetadata={activeMetadata}>
      {pageContent}
    </RootLayout>
  );
}
