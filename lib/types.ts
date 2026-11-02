export type IconName = 'cloud' | 'network' | 'support' | 'data' | 'check' | 'menu' | 'close';

export interface NavLink { readonly label: string; readonly href: string; }
export interface PartnerItem { readonly id: string; readonly name: string; readonly tier: string; readonly markPath: string; }
export interface WhyChoosePoint { readonly step: string; readonly title: string; readonly detail: string; }
export interface WorkflowStage { readonly step: string; readonly heading: string; readonly note: string; readonly wide?: boolean; }

export interface ServiceHighlight {
  readonly id: string; readonly icon: IconName; readonly category: string;
  readonly title: string; readonly summary: string; readonly metric: string;
  readonly href: string;
}

export interface FeaturedServiceBlock {
  readonly eyebrow: string; readonly title: string; readonly description: string;
  readonly specs: readonly string[]; readonly imageSrc: string; readonly fallbackImageSrc: string;
  readonly imageAlt: string; readonly linkLabel: string; readonly linkHref: string;
}

export interface EngineeringStandard {
  readonly domain: string; readonly practice: string; readonly verification: string;
}

export interface ServiceCategory {
  readonly id: string; readonly index: string; readonly icon: IconName; readonly title: string;
  readonly summary: string; readonly deliverables: readonly string[]; readonly scopeAction: string;
}

export interface EngagementTier {
  readonly model: string; readonly responseWindow: string; readonly coverage: string; readonly bestFor: string;
}

export interface EngagementModelItem {
  readonly title: string; readonly cadence: string; readonly summary: string; readonly outcomes: readonly string[];
}

export interface OfficeLocation {
  readonly region: string; readonly coverageArea: string;
  readonly phoneDisplay: string; readonly phoneHref: string; readonly email: string;
  readonly hours: string; readonly deskNote: string;
}
