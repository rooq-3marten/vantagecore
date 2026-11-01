import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface AppShellProps {
  currentPath: string;
  children: React.ReactNode;
}

export default function AppShell({ currentPath, children }: AppShellProps) {
  return (
    <div data-layer="base" className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-normal">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#1d4ed8] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar currentPath={currentPath} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
