import heroInfrastructureImg from '@/src/assets/images/hero_cloud_infrastructure_1793625863567.jpg';
import hybridDatacenterImg from '@/src/assets/images/service_hybrid_datacenter_1793625866034.jpg';
import operationsRoomImg from '@/src/assets/images/about_operations_center_1793625866329.jpg';
import type {
  EngagementModelItem, EngagementTier, EngineeringStandard, FeaturedServiceBlock,
  PartnerItem, ServiceCategory, ServiceHighlight, WhyChoosePoint, WorkflowStage,
} from './types';

export const heroData = {
  eyebrow: 'Enterprise Cloud, Network & Colocation Engineering',
  headlinePrefix: 'Production infrastructure engineered for',
  headlineAccentWord: 'dependable',
  headlineSuffix: 'operations.',
  subheadline: 'We migrate on-premise server rooms to Google Cloud and Microsoft Azure, design redundant multi-site networks, and run structured day-two infrastructure support.',
  primaryCtaLabel: 'Schedule Architecture Review',
  primaryCtaHref: '/contact',
  secondaryCtaLabel: 'Explore Service Catalog',
  secondaryCtaHref: '/services',
  imageSrc: heroInfrastructureImg,
  fallbackImageSrc: '/images/hero-infrastructure.jpg',
  imageAlt: 'Enterprise glass atrium and server corridor at dusk',
  pillars: [
    { scope: 'Cloud Platforms', detail: 'Google Cloud & Azure landing zones, VM cutovers, and hybrid interconnects' },
    { scope: 'Resilient Networking', detail: 'Dual-ISP BGP routing, branch SD-WAN, and segmented firewall clusters' },
    { scope: 'Day-Two Operations', detail: 'Continuous host monitoring, staged OS patching, and direct engineer escalation' },
  ],
} as const;

export const partnerStripData = {
  label: 'Engineered across enterprise cloud, routing, and storage platforms',
  partners: [
    { id: 'gcp', name: 'Google Cloud', tier: 'VPC Landing Zones & GKE', markPath: 'M6 12L12 6L18 12L12 18Z' },
    { id: 'azure', name: 'Microsoft Azure', tier: 'Hybrid Identity & ExpressRoute', markPath: 'M4 17L10 6H14L20 17H15.5L12 10.5L8.5 17H4Z' },
    { id: 'routing', name: 'Core Routing & WAN', tier: 'BGP & Fiber Failover', markPath: 'M4 8H20M4 12H16M4 16H20' },
    { id: 'perimeter', name: 'Network Security', tier: 'HA Firewalls & WireGuard', markPath: 'M12 4L19 7V12C19 16 16 19 12 20C8 19 5 16 5 12V7L12 4Z' },
    { id: 'storage', name: 'Database & Storage', tier: 'PostgreSQL & Block Replication', markPath: 'M5 6H19V10H5V6ZM5 14H19V18H5V14Z' },
  ] satisfies readonly PartnerItem[],
} as const;

export const homeServicesData = {
  eyebrow: 'Core Engineering Domains',
  heading: 'Four disciplines under one accountable team',
  description: 'Most infrastructure failures happen in the handoff between cloud consultants, firewall vendors, and telecom providers. We keep architecture, cutover, and operational runbooks unified.',
  featured: {
    eyebrow: '01 · Cloud & Hybrid Colocation',
    title: 'Keep latency-sensitive databases and core workloads close to your users',
    description: 'Not every system belongs in a distant public cloud region. We integrate local colocation compute with Google Cloud and Azure over encrypted interconnects and repeatable Terraform modules.',
    specs: [
      'Terraform-defined VPC topologies and weekend cutovers with tested rollback snapshots',
      'Replicated PostgreSQL and SQL Server clusters with automated restore verification',
    ],
    imageSrc: hybridDatacenterImg,
    fallbackImageSrc: '/images/hybrid-datacenter.jpg',
    imageAlt: 'Structured fiber-optic patch panels and server cabinets',
    linkLabel: 'Explore Cloud & Hybrid scope',
    linkHref: '/services#cloud',
  } satisfies FeaturedServiceBlock,
  highlights: [
    {
      id: 'network-security', icon: 'network', category: '02 · Security & Networking', title: 'Dual-Carrier WAN & Segmentation',
      summary: 'BGP multi-homing across independent fiber links paired with high-availability firewall clusters so branch offices stay connected during carrier maintenance or fiber cuts.',
      metric: 'BGP + SD-WAN', href: '/services#security',
    },
    {
      id: 'managed-noc', icon: 'support', category: '03 · Managed Support', title: 'Structured Infrastructure Operations',
      summary: 'Direct escalation to systems and network engineers monitoring host health, link stability, and backup jobs.',
      metric: 'Direct Escalation', href: '/services#support',
    },
    {
      id: 'ai-data', icon: 'data', category: '04 · AI & Data', title: 'Governed Warehouses & Private Inference',
      summary: 'Automated database replication into cloud warehouses alongside private VPC-isolated retrieval endpoints that keep internal records inside your security boundary.',
      metric: 'VPC-Isolated', href: '/services#data',
    },
  ] satisfies readonly ServiceHighlight[],
} as const;

export const whyChooseUsData = {
  eyebrow: 'Engineering Discipline',
  heading: 'Written runbooks and rehearsed failovers before cutover night',
  intro: 'Every migration or network refresh ships with a documented pre-flight checklist, clear rollback steps, and complete administrative handover to your internal team.',
  aboutLinkLabel: 'See our delivery methodology',
  aboutLinkHref: '/about',
  points: [
    { step: '01', title: 'Version-controlled infrastructure changes', detail: 'Routing policies, IAM permissions, and firewall rulesets live in Git repositories with peer review before deployment—never undocumented console edits.' },
    { step: '02', title: 'Right-sized compute and network hardware', detail: 'We size cloud instances, storage throughput, and switch capacity from measured workload demand rather than vendor sales quotas.' },
    { step: '03', title: 'Scheduled failover and restore testing', detail: 'Backups only matter when restores work under pressure. We validate database promotion and secondary WAN path failover on a regular schedule.' },
  ] satisfies readonly WhyChoosePoint[],
  standardsLabel: 'Standard Delivery Commitments',
  standards: [
    { domain: 'Infrastructure as Code', practice: 'Complete Terraform configurations, topology diagrams, and root credentials handed over to client teams', verification: 'Client-Owned Repos' },
    { domain: 'Change Control', practice: 'Documented rollback snapshots and staging dry runs prior to production maintenance windows', verification: 'Staged Cutovers' },
    { domain: 'Backup Verification', practice: 'Object-locked backups paired with scheduled test restores into isolated sandbox environments', verification: 'Tested Recovery' },
    { domain: 'Network Segmentation', practice: 'Isolated management VLANs, bastion access, and regional storage boundaries', verification: 'Perimeter Enforced' },
  ] satisfies readonly EngineeringStandard[],
} as const;

export const homeCtaData = {
  eyebrow: 'Architecture Assessment',
  heading: 'Planning a server migration, WAN upgrade, or database consolidation?',
  body: 'Share your current topology diagram or hosting setup. We will review single points of failure and outline a practical, phased implementation plan.',
  primaryLabel: 'Request Technical Review',
  primaryHref: '/contact',
  secondaryLabel: 'Compare Support Tiers',
  secondaryHref: '/services#sla',
} as const;

export const servicesPageData = {
  eyebrow: 'Service Catalog',
  heading: 'Infrastructure engineering across four operational layers',
  intro: 'Engage us for a fixed-scope architecture and migration project, or retain our team for ongoing platform monitoring and maintenance.',
  allFilterLabel: 'All 4 Disciplines',
  deliverablesLabel: 'Standard Engineering Deliverables',
  categories: [
    {
      id: 'cloud', index: '01', icon: 'cloud', title: 'Cloud Infrastructure',
      summary: 'Production landing zones, virtual machine and container migrations, and hybrid interconnects built with repeatable Infrastructure-as-Code.',
      deliverables: [
        'Multi-account Google Cloud and Azure landing zones with billing guardrails and hub-and-spoke VPC routing',
        'Planned weekend database and VM cutovers backed by block-level replication and rollback snapshots',
        'Container platform hardening, autoscaling policies, and recurring cloud cost rightsizing',
      ],
      scopeAction: 'Scope a Cloud project',
    },
    {
      id: 'security', index: '02', icon: 'network', title: 'Security & Networking',
      summary: 'Resilient office, datacenter, and multi-branch WAN architectures built with redundant carrier links and segmented internal traffic zones.',
      deliverables: [
        'Dual-ISP BGP edge routing, SD-WAN branch appliances, and automated IPsec/MPLS link failover',
        'High-availability firewall pairs, encrypted WireGuard/IPsec remote access, and VLAN segmentation',
        'External attack-surface hardening, automated TLS certificate renewal, and centralized log shipping',
      ],
      scopeAction: 'Scope a Network project',
    },
    {
      id: 'support', index: '03', icon: 'support', title: 'Managed Support',
      summary: 'Continuous telemetry monitoring, staged security patching, and direct engineer escalation governed by clear response windows.',
      deliverables: [
        'Endpoint, BGP session, storage IOPS, and host health alerting with documented escalation runbooks',
        'Staged Linux, Windows, and hypervisor security patching across development and production windows',
        'Monthly operational reviews covering uptime logs, incident root-cause notes, and capacity planning',
      ],
      scopeAction: 'Scope a Support retainer',
    },
    {
      id: 'data', index: '04', icon: 'data', title: 'AI & Data',
      summary: 'Governed data warehouses, change-data-capture pipelines, and private model-serving endpoints kept inside your cloud network boundary.',
      deliverables: [
        'Automated replication pipelines syncing transactional databases into BigQuery, Snowflake, or PostgreSQL replicas',
        'VPC-isolated retrieval and inference services with role-based access controls and audit logging',
        'Schema-change monitoring, backup retention policies, and sensitive-column masking for analytics workloads',
      ],
      scopeAction: 'Scope a Data platform',
    },
  ] satisfies readonly ServiceCategory[],
  slaEyebrow: 'Support Retainers',
  slaHeading: 'Managed Operations Coverage Models',
  slaIntro: 'Every support engagement includes shared documentation, direct engineer communication, and transparent monitoring access.',
  slaColumns: { model: 'Coverage Tier', response: 'Critical Response', coverage: 'Operating Window', fit: 'Intended Environment' },
  slaTiers: [
    { model: 'Standard Operations', responseWindow: 'Within 60 minutes', coverage: 'Monday – Saturday, 08:00 – 20:00 WAT + critical paging', bestFor: 'Single-region cloud workloads and corporate headquarters' },
    { model: 'Continuous 24/7', responseWindow: 'Within 15 minutes', coverage: '24/7 monitoring + scheduled quarterly failover drills', bestFor: 'Multi-branch networks, payment workloads, and hybrid racks' },
    { model: 'Embedded Engineering', responseWindow: 'Priority direct bridge', coverage: '24/7 coverage + dedicated architecture reviews & change board', bestFor: 'High-throughput transaction systems and multi-site WAN estates' },
  ] satisfies readonly EngagementTier[],
} as const;

export const aboutPageData = {
  eyebrow: 'About VantageCore Systems',
  heading: 'Infrastructure architecture and operations without vendor finger-pointing',
  storyParagraphOne: 'Enterprise outages rarely happen inside a single isolated component—they happen at the boundary between cloud routing, on-premise firewalls, ISP circuits, and database configuration.',
  storyParagraphTwo: 'VantageCore Systems brings network engineering, cloud platform design, security segmentation, and day-two operations together in one practice. Instead of handing off unverified diagrams, we build, test, cut over, and document production systems end to end.',
  imageSrc: operationsRoomImg,
  fallbackImageSrc: '/images/operations-room.jpg',
  imageAlt: 'Engineering workspace with network topology displays and glass conference room',
  workflowLabel: 'How Every Engagement Runs',
  workflowStages: [
    { step: '01', heading: 'Topology & Risk Audit', note: 'Inspect existing routing, compute sizing, backup health, and single points of failure.' },
    { step: '02', heading: 'Staging & Dry-Run Build', note: 'Provision target infrastructure in code and test failover behavior before touching live traffic.', wide: true },
    { step: '03', heading: 'Controlled Cutover', note: 'Execute off-hours migration with verified rollback checkpoints.' },
    { step: '04', heading: 'Handover & Day-Two Ops', note: 'Deliver full repositories, diagrams, and ongoing monitoring or team training.', wide: true },
  ] satisfies readonly WorkflowStage[],
  missionEyebrow: 'Operating Mandate',
  missionStatement: 'Design infrastructure clear enough to troubleshoot calmly under pressure, test every recovery path before go-live, and give every client full ownership of their code and credentials.',
  missionPillars: [
    { label: 'Full client ownership', text: 'Clients receive complete Terraform repositories, network diagrams, and administrative keys—zero vendor lock-in.' },
    { label: 'Practical engineering over buzzwords', text: 'We recommend proven, maintainable architectures matched to your team size and operational budget.' },
  ],
  deliveryEyebrow: 'Engagement Structure',
  deliveryHeading: 'Two straightforward ways to work with us',
  deliveryIntro: 'Work with our engineering desk on a defined migration milestone or retain us for continuous platform operations.',
  engagementModels: [
    {
      title: 'Project-Based Architecture & Migration',
      cadence: 'Fixed-Scope Milestone Delivery',
      summary: 'Designed for cloud migrations, office or datacenter network rebuilds, firewall replacements, and database replication setups.',
      outcomes: [
        'Written architecture blueprint, bill of materials, and cutover runbook',
        'End-to-end implementation with off-hours production transition',
        'Post-cutover stabilization window and administrative team walkthrough',
      ],
    },
    {
      title: 'Ongoing Managed Infrastructure',
      cadence: 'Monthly Operations Retainer',
      summary: 'Designed for organizations that want experienced systems and network engineers watching uptime, backups, and security patches continuously.',
      outcomes: [
        'Shared alerting dashboards across cloud accounts, servers, and WAN links',
        'Routine OS patching, certificate renewals, and backup restore checks',
        'Direct escalation via shekonifarooq@gmail.com and +234 70526752',
      ],
    },
  ] satisfies readonly EngagementModelItem[],
  standardsEyebrow: 'Delivery Governance',
  standardsHeading: 'What we deliver on every infrastructure build',
} as const;

export const contactPageData = {
  eyebrow: 'Engineering Intake & Direct Contact',
  heading: 'Speak directly with an infrastructure engineer',
  intro: 'Whether you are planning a cloud migration, resolving recurring network instability, or scoping ongoing infrastructure support, reach us directly below.',
  directLinesHeading: 'Direct Email & Phone',
  officesHeading: 'Regional Coverage',
} as const;
