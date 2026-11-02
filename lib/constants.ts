import type { NavLink, OfficeLocation } from './types';

export const companyName = 'VantageCore Systems' as const;
export const companyTag = 'Cloud & Network Engineering' as const;
export const legalEntity = 'VantageCore Systems' as const;

export const primaryEmail = 'shekonifarooq@gmail.com' as const;
export const primaryEmailHref = 'mailto:shekonifarooq@gmail.com' as const;
export const primaryPhoneDisplay = '+234 70526752' as const;
export const primaryPhoneHref = 'tel:+23470526752' as const;

export const siteMetadata = {
  homeTitle: 'VantageCore Systems – Cloud & Network Infrastructure',
  homeDescription: 'We migrate on-premise server estates to Google Cloud and Microsoft Azure, build redundant multi-site networks, and run managed infrastructure operations.',
  servicesTitle: 'Infrastructure & Cloud Services – VantageCore Systems',
  servicesDescription: 'Cloud workload migrations, dual-homed enterprise networking, managed infrastructure support, and governed data platforms.',
  aboutTitle: 'Engineering Practice & Delivery – VantageCore Systems',
  aboutDescription: 'VantageCore Systems designs, migrates, and operates fault-tolerant enterprise networks and hybrid cloud environments.',
  contactTitle: 'Contact Engineering – VantageCore Systems',
  contactDescription: 'Reach our infrastructure engineering team directly at shekonifarooq@gmail.com or +234 70526752.',
} as const;

export const primaryNavLinks: readonly NavLink[] = [
  { label: 'Home', href: '/' }, { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' },
] as const;

export const navbarCopy = {
  utilityBarText: 'Enterprise Cloud, WAN & Hybrid Infrastructure Engineering',
  ctaLabel: 'Request Scope Review', ctaHref: '/contact',
  openMenuLabel: 'Open navigation menu', closeMenuLabel: 'Close navigation menu',
} as const;

export const primaryOffice: OfficeLocation = {
  region: 'Lagos Engineering Coverage',
  coverageArea: 'Lagos, Nigeria · On-site & remote architecture delivery',
  phoneDisplay: primaryPhoneDisplay,
  phoneHref: primaryPhoneHref,
  email: primaryEmail,
  hours: 'Monday – Friday, 08:00 – 18:00 WAT',
  deskNote: '24/7 incident escalation active for contracted environments',
} as const;

export const secondaryOffice: OfficeLocation = {
  region: 'Abuja & Regional Coverage',
  coverageArea: 'Abuja, Nigeria · Multi-branch WAN & hybrid cloud deployments',
  phoneDisplay: primaryPhoneDisplay,
  phoneHref: primaryPhoneHref,
  email: primaryEmail,
  hours: 'Monday – Friday, 08:30 – 17:30 WAT',
  deskNote: 'Scheduled technical discovery and architecture reviews',
} as const;

export const contactChannels = {
  architectureEmail: primaryEmail,
  nocEmail: primaryEmail,
  architectureLabel: 'Direct Engineering Email',
  nocLabel: 'Direct Operations Line',
  copyEmailLabel: 'Copy email',
  copiedEmailLabel: 'Copied',
} as const;

export const footerCopy = {
  summary: 'Cloud workload migrations, dual-carrier WAN engineering, and managed infrastructure operations.',
  navigationHeading: 'Directory', capabilitiesHeading: 'Capabilities', headquartersHeading: 'Direct Contact',
  nocStatusLabel: 'Direct Engineering Line · +234 70526752', nocStatusHref: '/contact',
  copyrightNotice: '© 2026 VantageCore Systems. All rights reserved.',
  capabilityLinks: [
    { label: 'Cloud Infrastructure', href: '/services#cloud' }, { label: 'Security & Networking', href: '/services#security' },
    { label: 'Managed Support', href: '/services#support' }, { label: 'AI & Data Platforms', href: '/services#data' },
  ],
} as const;

export const contactFormCopy = {
  heading: 'Send an Infrastructure Brief',
  subheading: 'Share your current environment, target timeline, or operational bottlenecks. Every inquiry goes directly to shekonifarooq@gmail.com.',
  nameLabel: 'Full name', namePlaceholder: 'Your full name',
  emailLabel: 'Work email', emailPlaceholder: 'name@company.com',
  scopeLabel: 'Primary discipline',
  scopeOptions: [
    { value: 'cloud', label: 'Cloud Infrastructure & Migration' },
    { value: 'security', label: 'Security & Dual-Carrier Networking' },
    { value: 'support', label: 'Managed Infrastructure Support' },
    { value: 'data', label: 'Governed AI & Data Platforms' },
    { value: 'general', label: 'General Architecture Review' },
  ],
  organizationLabel: 'Organization', organizationPlaceholder: 'Company or project name',
  messageLabel: 'Technical context', messagePlaceholder: 'Describe your current hosting setup, WAN connectivity, or target migration timeline.',
  submitLabel: 'Prepare Architecture Brief',
  privacyNote: 'Direct intake via shekonifarooq@gmail.com · +234 70526752',
  errorRequired: 'Please enter your full name, a valid email address, and technical context.',
  errorEmail: 'Enter a valid email address containing @ and a domain.',
  successHeading: 'Brief ready for direct dispatch',
  successBody: 'Your technical scope is formatted below. Open it directly in your email client addressed to shekonifarooq@gmail.com, copy the text, or call +234 70526752.',
  sendEmailLabel: 'Open in Email App',
  copyBriefLabel: 'Copy Formatted Brief',
  copiedBriefLabel: 'Brief Copied',
  resetLabel: 'Edit or write new brief',
} as const;
