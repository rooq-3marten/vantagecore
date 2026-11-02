import type {
  EngagementTier, EngineeringStandard, FeaturedServiceBlock, MilestoneItem,
  PartnerItem, ServiceCategory, ServiceHighlight, TeamMember, WhyChoosePoint,
} from './types';

export const heroData = {
  eyebrow: 'Enterprise Cloud, Network & Colocation Engineering',
  headlinePrefix: 'Production infrastructure engineered for',
  headlineAccentWord: 'zero-drama',
  headlineSuffix: 'uptime.',
  subheadline: 'We migrate legacy server rooms to Google Cloud and Microsoft Azure, wire dual-carrier MPLS and SD-WAN fabrics, and staff a 24/7 operations center in Lagos and Abuja.',
  primaryCtaLabel: 'Schedule Architecture Review',
  primaryCtaHref: '/contact',
  secondaryCtaLabel: 'Explore Service Catalog',
  secondaryCtaHref: '/services',
  imageSrc: '/src/assets/images/hero_cloud_infrastructure_1793625863567.jpg',
  imageAlt: 'Enterprise glass atrium and Tier-III server corridor at dusk',
  stats: [
    { value: '99.98%', label: 'Measured WAN & core availability across managed estates' },
    { value: '< 15 min', label: 'Severity-1 engineer response on 24/7 operations retainers' },
    { value: '42 TB+', label: 'Production database volume migrated without weekday downtime' },
  ],
} as const;

export const partnerStripData = {
  label: 'Engineered across hyperscale cloud & carrier-grade routing ecosystems',
  partners: [
    { id: 'gcp', name: 'Google Cloud Platform', tier: 'Landing Zones & GKE', markPath: 'M6 12L12 6L18 12L12 18Z' },
    { id: 'azure', name: 'Microsoft Azure Hybrid', tier: 'Entra ID & ExpressRoute', markPath: 'M4 17L10 6H14L20 17H15.5L12 10.5L8.5 17H4Z' },
    { id: 'routing', name: 'Carrier BGP & Optics', tier: 'Dual-ISP & DWDM Transport', markPath: 'M4 8H20M4 12H16M4 16H20' },
    { id: 'perimeter', name: 'Perimeter & Segmentation', tier: 'HA Firewalls & WireGuard', markPath: 'M12 4L19 7V12C19 16 16 19 12 20C8 19 5 16 5 12V7L12 4Z' },
    { id: 'storage', name: 'Synchronous NVMe Storage', tier: 'PostgreSQL & Block Replication', markPath: 'M5 6H19V10H5V6ZM5 14H19V18H5V14Z' },
  ] satisfies readonly PartnerItem[],
} as const;

export const homeServicesData = {
  eyebrow: 'Core Engineering Domains',
  heading: 'Four disciplines under one operational SLA',
  description: 'Most outages happen in the handoff between cloud architects, firewall teams, and carrier vendors. We keep design, cutover, and 24/7 runbooks under a single accountable team.',
  featured: {
    eyebrow: '01 · Cloud & Hybrid Colocation',
    title: 'Keep latency-sensitive core banking and ERP databases close to your users',
    description: 'Not every workload belongs in a distant public region. We rack redundant compute nodes in local colocation facilities and bind them to Google Cloud and Azure over encrypted dark fiber and private interconnects.',
    specs: [
      'Terraform-defined VPC topologies and weekend cutovers with tested rollback snapshots',
      'Active-active PostgreSQL and SQL Server clustering across independent power and cooling zones',
    ],
    imageSrc: '/src/assets/images/service_hybrid_datacenter_1793625866034.jpg',
    imageAlt: 'Structured fiber-optic patch panels and colocation server cabinets',
    linkLabel: 'Explore Cloud & Hybrid scope',
    linkHref: '/services#cloud',
  } satisfies FeaturedServiceBlock,
  highlights: [
    {
      id: 'network-security', icon: 'network', category: '02 · Security & Networking', title: 'Dual-Carrier WAN & Micro-Segmentation',
      summary: 'BGP multi-homing across independent fiber paths paired with high-availability firewall clusters so branch sites fail over in under three seconds without dropping active voice or ERP sessions.',
      metric: 'BGP + SD-WAN', href: '/services#security',
    },
    {
      id: 'managed-noc', icon: 'support', category: '03 · Managed Support', title: '24/7 Infrastructure Desk',
      summary: 'Direct escalation to senior Linux, Windows, and network engineers watching host and link telemetry around the clock.',
      metric: '15-Min P1 Triage', href: '/services#support',
    },
    {
      id: 'ai-data', icon: 'data', category: '04 · AI & Data', title: 'Governed Warehouses & Private Inference',
      summary: 'CDC replication pipelines into BigQuery or Snowflake alongside VPC-isolated retrieval endpoints that keep corporate records inside your network perimeter.',
      metric: 'VPC-Isolated', href: '/services#data',
    },
  ] satisfies readonly ServiceHighlight[],
} as const;

export const whyChooseUsData = {
  eyebrow: 'Engineering Discipline',
  heading: 'Written runbooks and rehearsed failovers before cutover night',
  intro: 'Financial institutions, logistics operators, and healthcare groups work with VantageCore because every maintenance window ships with a pre-flight checklist, named engineers, and measured recovery objectives.',
  aboutLinkLabel: 'Read how our engineering practice operates',
  aboutLinkHref: '/about',
  points: [
    { step: '01', title: 'Version-controlled production changes', detail: 'Routing policies, IAM permissions, and firewall rulesets live in Git repositories with peer review before deployment—never ad-hoc console edits.' },
    { step: '02', title: 'Vendor-neutral hardware and cloud sizing', detail: 'We right-size reserved instances and switch capacity from actual 95th-percentile telemetry rather than hardware reseller quotas.' },
    { step: '03', title: 'Quarterly disaster-recovery rehearsals', detail: 'Backups only count when restores succeed under clock pressure. We test database promotion and secondary WAN path failover every quarter with your team.' },
  ] satisfies readonly WhyChoosePoint[],
  standardsLabel: 'Verifiable Delivery Standards',
  standards: [
    { domain: 'Infrastructure as Code', practice: 'Full Terraform state, network diagrams, and administrative credentials handed over to client teams', verification: 'Client-Owned Repos' },
    { domain: 'Change Governance', practice: 'Documented rollback snapshots and pre-cutover dry runs in staging environments', verification: 'Zero Weekday Cutovers' },
    { domain: 'Backup Integrity', practice: 'Immutable object-locked snapshots with automated weekly test restores to isolated sandboxes', verification: 'Verified RPO / RTO' },
    { domain: 'Data Locality', practice: 'Segmented VLANs and regional storage boundaries aligned with Nigerian data residency rules', verification: 'Perimeter Enforced' },
  ] satisfies readonly EngineeringStandard[],
} as const;

export const homeCtaData = {
  eyebrow: 'Architecture Assessment',
  heading: 'Planning a datacenter exit, WAN refresh, or database migration?',
  body: 'Bring your current network diagram or cloud bill. Our principal engineers will map single points of failure and outline a realistic phased roadmap in 45 minutes.',
  primaryLabel: 'Book Technical Walkthrough',
  primaryHref: '/contact',
  secondaryLabel: 'Inspect SLA Tiers',
  secondaryHref: '/services#sla',
} as const;

export const servicesPageData = {
  eyebrow: 'Service Catalog',
  heading: 'Infrastructure engineering across four operational layers',
  intro: 'Each practice is staffed by career systems, network, and data engineers. Filter by discipline below or engage us across the full stack.',
  allFilterLabel: 'All 4 Disciplines',
  deliverablesLabel: 'Standard Engineering Deliverables',
  categories: [
    {
      id: 'cloud', index: '01', icon: 'cloud', title: 'Cloud Infrastructure',
      summary: 'Production landing zones, virtual machine and container migrations, and hybrid colocation interconnects built with repeatable Infrastructure-as-Code.',
      deliverables: [
        'Multi-account Google Cloud and Azure landing zones with billing guardrails and hub-and-spoke VPC routing',
        'Zero-weekday-downtime database and VM cutovers backed by block-level replication and rehearsed rollback plans',
        'Kubernetes platform hardening, autoscaling policies, and monthly cloud spend rightsizing reviews',
      ],
      scopeAction: 'Scope a Cloud project',
    },
    {
      id: 'security', index: '02', icon: 'network', title: 'Security & Networking',
      summary: 'Resilient campus, datacenter, and multi-branch WAN architectures engineered with redundant carrier paths and strict east-west traffic inspection.',
      deliverables: [
        'Dual-ISP BGP edge routing, SD-WAN branch appliances, and sub-3-second IPsec/MPLS path failover',
        'High-availability hardware firewall pairs, zero-trust WireGuard/IPsec access, and VLAN micro-segmentation',
        'External attack-surface hardening, automated TLS certificate renewal, and centralized log forwarding',
      ],
      scopeAction: 'Scope a Network refresh',
    },
    {
      id: 'support', index: '03', icon: 'support', title: 'Managed Support',
      summary: 'Round-the-clock monitoring, staged patch orchestration, and direct senior incident response governed by contractual response targets.',
      deliverables: [
        '24/7 synthetic endpoint, BGP session, storage IOPS, and host telemetry monitoring from Lagos and Abuja',
        'Staged Linux, Windows, and hypervisor security patching across dev, staging, and production windows',
        'Monthly engineering health reviews covering uptime metrics, incident post-mortems, and capacity forecasts',
      ],
      scopeAction: 'Scope a 24/7 Retainer',
    },
    {
      id: 'data', index: '04', icon: 'data', title: 'AI & Data',
      summary: 'Governed data warehouses, streaming ingestion pipelines, and private model-serving endpoints that keep corporate records inside your perimeter.',
      deliverables: [
        'Automated CDC pipelines replicating ERP and transactional databases into BigQuery, Snowflake, or Synapse',
        'VPC-isolated retrieval and model inference endpoints with role-based document access and query logs',
        'Data lineage tracking, automated schema-drift alerts, and sensitive field masking for analytics teams',
      ],
      scopeAction: 'Scope a Data platform',
    },
  ] satisfies readonly ServiceCategory[],
  slaEyebrow: 'Operating Retainers',
  slaHeading: 'Contractual Managed Support Tiers',
  slaIntro: 'Every managed engagement includes shared runbooks, named escalation engineers, and direct telemetry access.',
  slaColumns: { model: 'Retainer Tier', response: 'P1 Initial Triage', coverage: 'Operating Window', fit: 'Typical Footprint' },
  slaTiers: [
    { model: 'Foundation Ops', responseWindow: 'Within 60 minutes', coverage: '08:00 – 20:00 WAT (Mon–Sat) + P1 paging', bestFor: 'Single-region cloud estates and growing mid-market headquarters' },
    { model: 'Enterprise 24/7', responseWindow: 'Within 15 minutes', coverage: '24/7/365 staffed NOC + quarterly DR failover drills', bestFor: 'Multi-branch enterprises, fintech platforms, and hybrid colocation racks' },
    { model: 'Dedicated Principal Pod', responseWindow: 'Within 10 minutes', coverage: '24/7/365 + embedded cloud/network architect & weekly CAB', bestFor: 'High-volume transaction platforms, telecom workloads, and multi-site WAN fabrics' },
  ] satisfies readonly EngagementTier[],
} as const;

export const aboutPageData = {
  eyebrow: 'About VantageCore Systems',
  heading: 'Built by systems engineers tired of fragile vendor handoffs',
  storyParagraphOne: 'VantageCore Systems started in 2018 after our founders spent a decade troubleshooting enterprise outages caused by disconnected contractors—one vendor blaming the ISP, another blaming the firewall, and a third blaming the cloud hypervisor.',
  storyParagraphTwo: 'We built an engineering-led practice where network routing, cloud landing zones, perimeter security, and 24/7 operations sit in the same room. Today, thirty-eight full-time engineers operate critical estates across financial services, energy logistics, healthcare, and enterprise software.',
  imageSrc: '/src/assets/images/about_operations_center_1793625866329.jpg',
  imageAlt: 'Engineering command room with network topology displays and glass meeting suite',
  milestonesLabel: 'Practice Trajectory (2018 – Present)',
  milestones: [
    { year: '2018', heading: 'Lagos Practice Founded', note: 'Launched core BGP routing and Linux/VMware consolidation advisory in Victoria Island.' },
    { year: '2020', heading: '24/7 Operations Desk Opened', note: 'Established continuous NOC shifts and automated Prometheus and Grafana alerting pipelines.', wide: true },
    { year: '2023', heading: 'Abuja Desk & Hybrid Interconnects', note: 'Opened Maitama engineering office and expanded dedicated dark-fiber colocation builds.' },
    { year: '2025', heading: 'Governed Data & Private AI', note: 'Launched VPC-isolated data warehouse and private inference infrastructure practice.', wide: true },
  ] satisfies readonly MilestoneItem[],
  missionEyebrow: 'Operating Mandate',
  missionStatement: 'Design infrastructure simple enough to debug at 03:00, document every failure mode honestly, and leave every client team with full administrative ownership of their environment.',
  missionPillars: [
    { label: 'Documentation as a deliverable', text: 'Clients receive complete Terraform state, topology diagrams, and runbooks—never black-box lock-in.' },
    { label: 'Measured availability over marketing claims', text: 'We report raw packet loss, failover seconds, and restore durations directly from shared monitoring.' },
  ],
  leadershipEyebrow: 'Leadership & Principal Architects',
  leadershipHeading: 'Accountable practitioners leading every engagement',
  leadershipIntro: 'Every client account is sponsored by a principal partner who participates directly in architecture reviews and incident retrospectives.',
  team: [
    { initials: 'AO', name: 'Ademola Ogunleye', role: 'Managing Partner & Principal Network Architect', focus: '16 yrs Carrier Backbone, BGP & Multi-Site WAN', bio: 'Previously led core MPLS and optical transport engineering for a regional fiber operator across four West African metros.' },
    { initials: 'CN', name: 'Chidinma Nwosu', role: 'Head of Cloud Platforms', focus: 'Multi-Region GCP, Azure & Kubernetes Reliability', bio: 'Directed cloud landing zones and container platform migrations for high-throughput payment and treasury systems.' },
    { initials: 'IB', name: 'Ibrahim Bako', role: 'Director of Security & Perimeter Engineering', focus: 'Zero-Trust Segmentation, HA Firewalls & Key Vaults', bio: 'Designs segmented network zones, hardware firewall clusters, and encrypted interconnect topologies for enterprise estates.' },
    { initials: 'EK', name: 'Efe Kalu', role: 'VP of 24/7 Operations & Data Reliability', focus: 'PostgreSQL Clustering, Backup Verification & NOC', bio: 'Leads our Lagos and Abuja operations desks, quarterly failover rehearsals, and streaming warehouse pipelines.' },
  ] satisfies readonly TeamMember[],
  standardsEyebrow: 'Delivery Governance',
  standardsHeading: 'How we verify reliability on every client estate',
} as const;

export const contactPageData = {
  eyebrow: 'Engineering Intake & Direct Desk',
  heading: 'Talk directly with an infrastructure architect',
  intro: 'Whether you are scoping a cloud migration, resolving recurring WAN instability, or planning a database cutover, your inquiry goes straight to our engineering desk.',
  directLinesHeading: 'Direct Escalation Line & Email',
  officesHeading: 'Engineering Desks',
} as const;
