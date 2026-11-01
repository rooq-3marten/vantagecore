import {
  HEADQUARTERS_ADDRESS,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
} from './constants';

export type ServiceCategoryKey = 'all' | 'cloud' | 'security' | 'managed' | 'data';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroScopeFact {
  label: string;
  value: string;
}

export interface PartnerItem {
  id: 'cloud-partner' | 'network-partner' | 'compute-partner' | 'security-partner' | 'data-partner';
  name: string;
  tier: string;
}

export interface ServiceHighlightItem {
  index: string;
  slug: Exclude<ServiceCategoryKey, 'all'>;
  title: string;
  summary: string;
  stackNote?: string;
  span: 'lg:col-span-7' | 'lg:col-span-5';
}

export interface OperatingPrincipleItem {
  index: string;
  title: string;
  description: string;
}

export interface CertificationBadgeItem {
  title: string;
  issuer: string;
  meta: string;
}

export interface ServiceCategoryDetail {
  id: Exclude<ServiceCategoryKey, 'all'>;
  index: string;
  name: string;
  description: string;
  platforms: string;
  bullets: {
    title: string;
    detail: string;
  }[];
  deliverableNote: string;
}

export interface SlaModelItem {
  tier: string;
  focus: string;
  response: string;
  cadence: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  detail: string;
}

export interface LeaderItem {
  name: string;
  initials: string;
  role: string;
  credentials: string;
  bio: string;
}

export interface AwardRegistryItem {
  category: string;
  title: string;
  detail: string;
}

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  telHref: string;
  hours: string;
}

export const mainNavLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerServiceLinks: NavLinkItem[] = [
  { label: 'Cloud Infrastructure', href: '/services?category=cloud' },
  { label: 'Security & Networking', href: '/services?category=security' },
  { label: 'Managed Support', href: '/services?category=managed' },
  { label: 'Data & Analytics', href: '/services?category=data' },
];

export const footerCompanyLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About & Leadership', href: '/about' },
  { label: 'Contact & Offices', href: '/contact' },
];

export const heroContent = {
  kicker: 'Ikoyi, Lagos · Maitama, Abuja · Hybrid Cloud & Core Networks',
  headline: 'We build and run enterprise cloud and network infrastructure.',
  description:
    'VantageCore moves on-premise VMware and database workloads to Google Cloud and Microsoft Azure, interconnects branch networks over redundant fiber, and staffs a 24-hour operations desk. Written runbooks. Direct engineer access.',
  primaryCta: { label: 'Schedule Architecture Review', href: '/contact' },
  secondaryCta: { label: 'View Practice Areas', href: '/services' },
};

export const heroScopeFacts: HeroScopeFact[] = [
  { label: 'Cloud Landing Zones', value: 'Google Cloud, Azure, Private Colocation' },
  { label: 'Core Networking', value: 'BGP Routing, Dual-ISP SD-WAN, IPsec' },
  { label: 'Audit Frameworks', value: 'ISO/IEC 27001:2022 & ISO/IEC 20000-1' },
  { label: 'Support Coverage', value: '24/7 NOC staffed in Lagos & Abuja' },
];

export const partners: PartnerItem[] = [
  { id: 'cloud-partner', name: 'Google Cloud', tier: 'Cloud Infrastructure Workloads' },
  { id: 'compute-partner', name: 'Microsoft Azure', tier: 'Hybrid Cloud & Identity' },
  { id: 'network-partner', name: 'Cisco', tier: 'Core Routing & Switching' },
  { id: 'security-partner', name: 'HPE', tier: 'Compute & Storage Racks' },
  { id: 'data-partner', name: 'Fortinet', tier: 'Perimeter Firewalls & SD-WAN' },
];

export const serviceHighlights: ServiceHighlightItem[] = [
  {
    index: '01',
    slug: 'cloud',
    title: 'Cloud Infrastructure',
    summary:
      'We migrate on-premise virtual machines, SQL databases, and ERP servers to Google Cloud, Microsoft Azure, or Tier-III colocation racks—and manage billing, backups, and failover afterward. Every cutover runs inside an agreed weekend window with a tested rollback plan.',
    stackNote: 'Google Cloud · Microsoft Azure · VMware · Terraform',
    span: 'lg:col-span-7',
  },
  {
    index: '02',
    slug: 'security',
    title: 'Security & Networking',
    summary:
      'Dual-ISP SD-WAN topologies, perimeter firewall rule audits, and internal VLAN segmentation across headquarters and regional branches.',
    span: 'lg:col-span-5',
  },
  {
    index: '03',
    slug: 'managed',
    title: '24/7 Managed Support',
    summary:
      'Continuous server and circuit monitoring, monthly OS patching, and quarterly backup restore drills. No ticket bounce-arounds. Critical alerts route straight to tier-2 and tier-3 systems engineers.',
    span: 'lg:col-span-5',
  },
  {
    index: '04',
    slug: 'data',
    title: 'Data & Analytics',
    summary:
      'We consolidate separate billing, inventory, and ERP databases into governed cloud warehouses so finance and operations teams work from one set of numbers.',
    stackNote: 'BigQuery · PostgreSQL · dbt · Power BI',
    span: 'lg:col-span-7',
  },
];

export const operatingPrinciples: OperatingPrincipleItem[] = [
  {
    index: '01',
    title: 'Principal engineers stay on the account',
    description:
      'The architects who draw your network diagram and write your migration runbook lead the weekend cutover. We do not hand projects off to unbriefed subcontractors.',
  },
  {
    index: '02',
    title: 'Documentation delivered before sign-off',
    description:
      'Every project closes with IP allocation tables, firewall policy exports, IAM role matrices, and step-by-step recovery procedures stored in your own repository.',
  },
  {
    index: '03',
    title: 'Measured response times in writing',
    description:
      'Managed contracts specify 15-minute response windows for severity-1 outages, named escalation contacts, and monthly root-cause reviews.',
  },
];

export const homeCertifications: CertificationBadgeItem[] = [
  {
    title: 'ISO/IEC 27001:2022',
    issuer: 'Information Security Management',
    meta: 'Audited annually',
  },
  {
    title: 'ISO/IEC 20000-1:2018',
    issuer: 'IT Service Management',
    meta: 'NOC & Managed Support scope',
  },
  {
    title: 'SOC 2 Type II',
    issuer: 'Security & Availability Controls',
    meta: 'Independent attestation',
  },
  {
    title: 'Microsoft Solutions Partner',
    issuer: 'Infrastructure & Azure Workloads',
    meta: 'Verified engineering bench',
  },
];

export const homeFinalCta = {
  kicker: 'Technical Discovery',
  title: 'Planning a cloud migration, network refresh, or colocation move.',
  description:
    'Share your current setup or RFP scope. A principal systems architect will review it and reply within one business day.',
  ctaLabel: 'Book Technical Review',
  ctaHref: '/contact',
};

export const serviceFilterOptions: { key: ServiceCategoryKey; label: string }[] = [
  { key: 'all', label: 'All Practices' },
  { key: 'cloud', label: 'Cloud Infrastructure' },
  { key: 'security', label: 'Security & Networking' },
  { key: 'managed', label: 'Managed Support' },
  { key: 'data', label: 'Data & Analytics' },
];

export const serviceCategories: ServiceCategoryDetail[] = [
  {
    id: 'cloud',
    index: '01',
    name: 'Cloud Infrastructure',
    description:
      'We move production workloads off aging server rooms into Google Cloud, Microsoft Azure, or hybrid colocation racks without disrupting weekday trading hours.',
    platforms: 'Google Cloud · Microsoft Azure · VMware vSphere · Linux · Terraform',
    bullets: [
      {
        title: 'Landing Zone & Hybrid Interconnects',
        detail:
          'Configure VPC routing, private DNS, centralized identity, and encrypted IPsec or dedicated fiber links back to local branch networks.',
      },
      {
        title: 'Phased Server & Database Migration',
        detail:
          'Replicate virtual machines, PostgreSQL, and SQL Server instances ahead of time, run dry-run cutovers, and switch live traffic during scheduled off-peak windows.',
      },
      {
        title: 'Cross-Region Disaster Recovery & Cost Controls',
        detail:
          'Automate snapshot replication to a secondary region, test failover twice a year, and set budget alerts so idle compute instances do not inflate monthly bills.',
      },
    ],
    deliverableNote: 'Includes architecture diagram, cutover runbook, and 30-day post-migration hypercare.',
  },
  {
    id: 'security',
    index: '02',
    name: 'Security & Networking',
    description:
      'Multi-site corporate networks built with dual-carrier failover, segmented internal VLANs, and centralized log visibility.',
    platforms: 'BGP & OSPF Routing · Dual-ISP SD-WAN · Perimeter Firewalls · Entra ID / SSO · SIEM',
    bullets: [
      {
        title: 'Campus Switching & Redundant WAN',
        detail:
          'Replace single-router bottlenecks with high-availability core switches and automatic failover across primary fiber and secondary wireless or satellite circuits.',
      },
      {
        title: 'Firewall Hardening & Access Segmentation',
        detail:
          'Audit overly permissive firewall rules, isolate server subnets from guest and office Wi-Fi, and enforce multi-factor authentication on all administrative logins.',
      },
    ],
    deliverableNote: 'Includes full port/VLAN schedule, firewall rule audit report, and failover test log.',
  },
  {
    id: 'managed',
    index: '03',
    name: 'Managed Support',
    description:
      'Day-to-day infrastructure administration, 24/7 alert triage, and scheduled patching for organizations that want predictable operations alongside their internal IT team.',
    platforms: 'Prometheus & Grafana · OS & Hypervisor Patching · Immutable Backups · Field Dispatch',
    bullets: [
      {
        title: '24/7 Infrastructure & Link Monitoring',
        detail:
          'Track CPU, disk latency, database locks, SSL expiry, and ISP packet loss from our operations desk with 15-minute response on severity-1 alerts.',
      },
      {
        title: 'Monthly Patching & Firmware Maintenance',
        detail:
          'Stage and apply Windows Server, Linux, hypervisor, and firewall security updates inside Sunday maintenance windows.',
      },
      {
        title: 'Verified Backups & Restore Testing',
        detail:
          'Maintain immutable offsite backups and perform scheduled test restores so recovery times are proven before an outage happens.',
      },
    ],
    deliverableNote: 'Backed by written response SLAs and monthly availability & capacity reviews.',
  },
  {
    id: 'data',
    index: '04',
    name: 'Data & Analytics',
    description:
      'Clean pipelines that pull records from ERP, core banking, or inventory databases into a single cloud warehouse for reporting and audit queries.',
    platforms: 'BigQuery · Azure Synapse · PostgreSQL · dbt · Power BI',
    bullets: [
      {
        title: 'Automated Ingestion & Warehouse Modeling',
        detail:
          'Replace fragile overnight CSV exports and manual spreadsheets with scheduled, monitored pipelines that alert engineers when schemas change.',
      },
      {
        title: 'Role-Based Reporting & Audit Lineage',
        detail:
          'Restrict sensitive payroll or customer columns by role while giving finance and operations leads fast daily dashboards.',
      },
    ],
    deliverableNote: 'Delivered with full SQL transformation repo, data dictionary, and access matrix.',
  },
];

export const slaModels: SlaModelItem[] = [
  {
    tier: 'Fixed-Scope Project',
    focus: 'Cloud migrations, office network builds, firewall overhauls',
    response: 'Named Lead Architect',
    cadence: 'Weekly build review & milestone sign-off',
  },
  {
    tier: 'Co-Managed Escalation',
    focus: '24/7 NOC monitoring & tier-3 escalation alongside in-house IT',
    response: '30 min (Severity 1)',
    cadence: 'Monthly incident & capacity report',
  },
  {
    tier: 'Full Managed Operations',
    focus: 'End-to-end server, cloud, backup, patching & firewall care',
    response: '15 min (Severity 1)',
    cadence: 'Weekly ops sync & semi-annual DR drill',
  },
];

export const aboutHistoryContent = {
  kicker: 'Company Background',
  title: 'Started in a server room in 2011. Still run by practising engineers.',
  description:
    'VantageCore Systems began as a four-person core routing and rack-integration practice in Lagos, wiring redundant links and storage arrays for mid-sized financial and logistics firms.',
  extendedParagraph:
    'Over fourteen years, our scope expanded into public cloud migrations, managed firewall operations, and analytical data warehouses. What stayed constant is how we work: small senior teams, plain-English documentation, and conservative engineering choices that hold up at 3 a.m.',
};

export const milestones: MilestoneItem[] = [
  {
    year: '2011',
    title: 'Founded in Ikoyi, Lagos',
    detail:
      'Began delivering core routing, campus switching, and colocation rack builds for commercial banks and clearing houses.',
  },
  {
    year: '2015',
    title: '24-Hour NOC Opened',
    detail:
      'Commissioned a staffed operations desk for round-the-clock link monitoring, server patching, and contract SLA support.',
  },
  {
    year: '2019',
    title: 'Abuja Office & Cloud Practice',
    detail:
      'Opened our Maitama engineering hub and formed a dedicated team for Google Cloud and Microsoft Azure workload migrations.',
  },
  {
    year: '2024',
    title: 'ISO/IEC 27001:2022 Audit',
    detail:
      'Completed recertification under the updated 2022 information security standard alongside our data engineering practice launch.',
  },
];

export const missionContent = {
  kicker: 'Operating Mandate',
  title: 'Keep critical systems online, documented, and auditable.',
  statement:
    'Our job is straightforward: build cloud and network systems that survive hardware faults and carrier outages, document every configuration so your team is never locked in, and answer the phone fast when something breaks.',
  pillars: [
    'No Vendor Lock-In',
    'Peer-Reviewed Change Windows',
    'Direct Tier-3 Escalation',
  ],
};

export const leadershipTeam: LeaderItem[] = [
  {
    name: 'Tunde Adeyemi',
    initials: 'TA',
    role: 'Managing Partner & CEO',
    credentials: 'B.Sc. Computer Engineering · 19 years in enterprise infrastructure',
    bio: 'Co-founded VantageCore in 2011. Leads commercial governance, multi-year managed service agreements, and executive steering reviews.',
  },
  {
    name: 'Chidinma Okafor',
    initials: 'CO',
    role: 'Chief Technology Officer',
    credentials: 'Google Cloud Professional Architect · Azure Solutions Architect Expert',
    bio: 'Reviews all production cloud landing zones, database replication designs, and hybrid colocation cutover runbooks.',
  },
  {
    name: 'Ibrahim Danjuma',
    initials: 'ID',
    role: 'VP, Network & Security Operations',
    credentials: 'CCIE Enterprise Infrastructure · CISSP',
    bio: 'Heads our Abuja engineering bench, 24/7 NOC shift leads, BGP/SD-WAN architecture, and annual ISO security audits.',
  },
  {
    name: 'Kemi Balogun',
    initials: 'KB',
    role: 'Director, Data Platforms',
    credentials: 'M.Sc. Information Systems · 12 years in enterprise data warehousing',
    bio: 'Leads ERP-to-warehouse pipeline builds, SQL governance, and financial reporting integrations.',
  },
];

export const awardsRegistry: AwardRegistryItem[] = [
  {
    category: 'Information Security',
    title: 'ISO/IEC 27001:2022 Certified',
    detail:
      'Annual external audit covering access control, cryptographic key management, incident handling, and physical facility security.',
  },
  {
    category: 'IT Service Management',
    title: 'ISO/IEC 20000-1:2018 Aligned',
    detail:
      'Structured change advisory boards, SLA tracking, and post-incident root-cause governance across all managed accounts.',
  },
  {
    category: 'Operational Controls',
    title: 'SOC 2 Type II Attested',
    detail:
      'Independent examination of security, availability, and confidentiality controls across our monitoring and management tooling.',
  },
  {
    category: 'Platform Accreditation',
    title: 'Microsoft Solutions Partner — Infrastructure',
    detail:
      'Verified technical certifications and completed customer deployments for hybrid Windows Server, Linux, and Azure workloads.',
  },
];

export const contactTopics: string[] = [
  'Cloud Migration (Google Cloud / Azure)',
  'Network & Firewall Architecture',
  '24/7 Managed Infrastructure SLA',
  'Data Warehouse & Reporting',
  'RFP / Tender Submission',
  'General Inquiry',
];

export const regionalOffices: OfficeLocation[] = [
  {
    city: 'Lagos — Headquarters',
    address: HEADQUARTERS_ADDRESS.full,
    phone: PRIMARY_PHONE_DISPLAY,
    telHref: PRIMARY_PHONE_HREF,
    hours: HEADQUARTERS_ADDRESS.hours,
  },
  {
    city: 'Abuja — Regional Operations',
    address: '19 Gana Street, 2nd Floor, Maitama, Abuja 900271',
    phone: '+234 (0) 209 461 2080',
    telHref: 'tel:+2342094612080',
    hours: 'Monday – Friday, 08:30 – 17:00 WAT',
  },
];
