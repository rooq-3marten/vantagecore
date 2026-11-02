'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/lib/types';

export interface NavItemsProps {
  links: readonly NavLink[];
}

export default function NavItems({ links }: NavItemsProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden h-20 items-stretch gap-1 md:flex">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <li key={link.href} className="flex items-stretch">
            <Link
              href={link.href}
              data-active={active ? 'true' : 'false'}
              className={`nav-underline flex items-center px-4 text-[15px] font-semibold tracking-tight whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563eb] ${
                active
                  ? 'bg-[#eff6ff] text-[#2563eb]'
                  : 'text-slate-900 hover:bg-[#f8faff] hover:text-[#2563eb]'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
