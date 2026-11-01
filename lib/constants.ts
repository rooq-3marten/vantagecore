export interface SocialLink {
  name: string;
  href: string;
  handle: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  openGraph?: {
    title?: string;
    description?: string;
    siteName?: string;
    locale?: string;
    type?: 'website';
  };
  twitter?: {
    card?: 'summary_large_image';
    title?: string;
    description?: string;
  };
}

export const COMPANY_NAME = 'VantageCore Systems';
export const LEGAL_COMPANY_NAME = 'VantageCore Systems Ltd.';
export const COMPANY_REG_ID = 'RC 1048291';

export const PRIMARY_PHONE_DISPLAY = '+234 (0) 201 887 4310';
export const PRIMARY_PHONE_HREF = 'tel:+2342018874310';
export const PRIMARY_EMAIL = 'inquiries@vantagecore-systems.com';
export const SUPPORT_DESK_EMAIL = 'noc@vantagecore-systems.com';

export const HEADQUARTERS_ADDRESS = {
  short: '42 Kingsway Road, Floor 3, Ikoyi, Lagos',
  full: '42 Kingsway Road, Floor 3, Ikoyi, Lagos 106104',
  hours: 'Monday – Friday, 08:00 – 17:30 WAT (24/7 NOC dispatch)',
};

export const MAINTENANCE_NOTICE =
  'Scheduled infrastructure change windows run Sundays 01:00–04:00 WAT. Emergency tier-3 escalation operates 24 hours including public holidays.';

export const SERVICE_HUBS = [
  'Ikoyi, Lagos',
  'Maitama, Abuja',
] as const;

export const COMPLIANCE_CREDENTIALS = [
  'ISO/IEC 27001:2022',
  'ISO/IEC 20000-1:2018',
  'SOC 2 Type II',
] as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: '/contact',
    handle: 'vantagecore-systems',
  },
  {
    name: 'GitHub',
    href: '/contact',
    handle: 'vantagecore-ops',
  },
];

export const SITE_TAGLINE =
  'We migrate on-premise server estates to hybrid cloud, build redundant multi-site networks, and run 24/7 infrastructure operations.';
