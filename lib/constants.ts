import type { NavLink, OfficeLocation } from './types';

export const companyName = 'VantageCore Systems' as const;
export const companyTag = 'Cloud & Network Engineering' as const;
export const legalEntity = 'VantageCore Systems Limited' as const;

export const primaryEmail = 'shekonifarooq@gmail.com' as const;
export const primaryEmailHref = 'mailto:shekonifarooq@gmail.com' as const;
export const primaryPhoneDisplay = '+234 70526752' as const;
export const primaryPhoneHref = 'tel:+23470526752' as const;

export const siteMetadata = {
  homeTitle: 'VantageCore Systems – Cloud & Network Infrastructure',
  homeDescription: 'We migrate on-premise server estates to Google Cloud and Microsoft Azure, build redundant multi-site networks, and staff a 24/7 infrastructure operations desk.',
  servicesTitle: 'Infrastructure & Cloud Services – VantageCore Systems',
  servicesDescription: 'Cloud workload migrations, dual-homed enterprise networking, 24/7 managed infrastructure support, and governed data platforms.',
  aboutTitle: 'About Our Engineering Practice – VantageCore Systems',
  aboutDescription: 'Founded by infrastructure engineers in Lagos, VantageCore Systems builds and operates fault-tolerant enterprise networks and hybrid cloud environments.',
  contactTitle: 'Contact Engineering & NOC – VantageCore Systems',
  contactDescription: 'Speak directly with an infrastructure architect via shekonifarooq@gmail.com or +234 70526752.',
} as const;

export const primaryNavLinks: readonly NavLink[] = [
  { label: 'Home', href: '/' }, { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' },
] as const;

export const navbarCopy = {
  utilityBarText: 'Enterprise Cloud, WAN & Colocation Engineering · Lagos & Abuja',
  ctaLabel: 'Request Scope Review', ctaHref: '/contact',
  openMenuLabel: 'Open navigation menu', closeMenuLabel: 'Close navigation menu',
} as const;

export const primaryOffice: OfficeLocation = {
  region: 'Lagos Headquarters & Primary NOC',
  addressLine: 'Plot 14B Karimu Kotun Street, Victoria Island',
  cityCountry: 'Lagos 106104, Nigeria',
  phoneDisplay: primaryPhoneDisplay,
  phoneHref: primaryPhoneHref,
  email: primaryEmail,
  hours: 'Monday – Friday, 08:00 – 18:00 WAT',
  deskNote: '24/7 Severity-1 bridge active for contracted estates',
} as const;

export const secondaryOffice: OfficeLocation = {
  region: 'Abuja Northern Operations Desk',
  addressLine: '42 Gana Street, Maitama District',
  cityCountry: 'Abuja 900271, Nigeria',
  phoneDisplay: primaryPhoneDisplay,
  phoneHref: primaryPhoneHref,
  email: primaryEmail,
  hours: 'Monday – Friday, 08:30 – 17:30 WAT',
  deskNote: 'Direct fiber cross-connect advisory by appointment',
} as const;

export const contactChannels = {
  architectureEmail: primaryEmail,
  nocEmail: primaryEmail,
  architectureLabel: 'Architecture & RFPs',
  nocLabel: '24/7 Operations Desk',
  copyEmailLabel: 'Copy email',
  copiedEmailLabel: 'Copied',
} as const;

export const footerCopy = {
  summary: 'Enterprise cloud migrations, dual-carrier WAN engineering, and 24/7 managed infrastructure operations across West Africa.',
  navigationHeading: 'Directory', capabilitiesHeading: 'Capabilities', headquartersHeading: 'Direct Contact',
  nocStatusLabel: '24/7 P1 Operations Desk · +234 70526752', nocStatusHref: '/contact',
  copyrightNotice: '© 2026 VantageCore Systems Limited. All rights reserved.',
  capabilityLinks: [
    { label: 'Cloud Infrastructure', href: '/services#cloud' }, { label: 'Security & Networking', href: '/services#security' },
    { label: 'Managed Support', href: '/services#support' }, { label: 'AI & Data Platforms', href: '/services#data' },
  ],
} as const;

export const contactFormCopy = {
  heading: 'Send an Infrastructure Brief',
  subheading: 'Share your current environment, target timeline, or operational bottlenecks. Every inquiry routes directly to shekonifarooq@gmail.com.',
  nameLabel: 'Full name', namePlaceholder: 'e.g. Tunde Adeyemi',
  emailLabel: 'Work email', emailPlaceholder: 'name@company.com',
  scopeLabel: 'Primary discipline',
  scopeOptions: [
    { value: 'cloud', label: 'Cloud Infrastructure & Migration' },
    { value: 'security', label: 'Security & Dual-Carrier Networking' },
    { value: 'support', label: '24/7 Managed Infrastructure Support' },
    { value: 'data', label: 'Governed AI & Data Platforms' },
    { value: 'general', label: 'General Architecture Review' },
  ],
  organizationLabel: 'Organization & workload footprint', organizationPlaceholder: 'e.g. 60-VM cluster + two branch sites',
  messageLabel: 'Technical context', messagePlaceholder: 'Describe your current hosting setup, WAN connectivity, or target cutover window.',
  submitLabel: 'Prepare Architecture Brief',
  privacyNote: 'Direct engineering intake via shekonifarooq@gmail.com · +234 70526752',
  errorRequired: 'Please enter your full name, a valid work email, and technical context.',
  errorEmail: 'Enter a valid email address containing @ and a domain.',
  successHeading: 'Brief ready for direct dispatch',
  successBody: 'Your technical scope has been formatted. Dispatch it directly via your email client to shekonifarooq@gmail.com, copy the formatted brief, or call +234 70526752.',
  sendEmailLabel: 'Open in Email App',
  copyBriefLabel: 'Copy Formatted Brief',
  copiedBriefLabel: 'Brief Copied',
  resetLabel: 'Edit or write new brief',
} as const;
