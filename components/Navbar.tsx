import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button, { navigateTo } from './Button';
import Container from './Container';
import { COMPANY_NAME } from '../lib/constants';
import { mainNavLinks } from '../lib/data';

interface NavbarProps {
  currentPath: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      setMobileMenuOpen(false);
      navigateTo(href);
    }
  };

  return (
    <header data-layer="surface" className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center gap-8">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]"
        >
          {COMPANY_NAME}
        </a>

        <nav
          aria-label="Main navigation"
          className="ml-auto hidden md:flex items-center gap-7 text-sm"
        >
          {mainNavLinks.map((item) => {
            const isActive =
              item.href === '/'
                ? currentPath === '/'
                : currentPath.startsWith(item.href);

            return (
              <a
                key={item.href}
                href={item.href}
                data-layer={isActive ? 'elevated' : undefined}
                onClick={(e) => handleLinkClick(e, item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`py-1 whitespace-nowrap shrink-0 transition-all duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] ${
                  isActive
                    ? 'text-[#1d4ed8] font-semibold border-b-2 border-[#1d4ed8]'
                    : 'text-slate-600 font-normal border-b-2 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto md:ml-0 flex items-center gap-3 shrink-0">
          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="sm">
              Request Consultation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1.5">
            {mainNavLinks.map((item) => {
              const isActive =
                item.href === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-layer={isActive ? 'elevated' : undefined}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center rounded-lg px-3.5 text-base transition-colors ${
                    isActive
                      ? 'border border-[#1d4ed8] bg-white text-[#1d4ed8] font-semibold'
                      : 'border border-transparent text-slate-600 font-normal hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <Button href="/contact" variant="primary" size="md" className="w-full">
              Request Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
