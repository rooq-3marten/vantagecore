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
    <ul className="hidden h-[68px] items-stretch gap-7 md:flex">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <li key={link.href} className="flex items-stretch">
            <Link
              href={link.href}
              data-active={active ? 'true' : 'false'}
              className={`nav-underline flex items-center text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#34d399] ${
                active ? 'text-white' : 'text-[#c7d8d0] hover:text-white'
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
