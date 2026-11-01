import React from 'react';
import {
  CertificationsGridSection,
  CompanyHistorySection,
  LeadershipSection,
  MissionBanner,
} from '../../components';
import type { SiteMetadata } from '../../lib/constants';
import {
  aboutHistoryContent,
  awardsRegistry,
  leadershipTeam,
  milestones,
  missionContent,
} from '../../lib/data';

export const metadata: SiteMetadata = {
  title: 'About, Leadership & Audits',
  description:
    'Founded in Lagos in 2011. Meet the engineering partners behind VantageCore Systems and review our ISO/IEC 27001:2022 and SOC 2 compliance scope.',
  openGraph: {
    title: 'About, Leadership & Audits | VantageCore Systems',
    description:
      'Founded in Lagos in 2011. Meet the engineering partners behind VantageCore Systems and review our ISO/IEC 27001:2022 and SOC 2 compliance scope.',
  },
};

export default function AboutPage() {
  return (
    <>
      <CompanyHistorySection content={aboutHistoryContent} milestones={milestones} />
      <MissionBanner content={missionContent} />
      <LeadershipSection leaders={leadershipTeam} />
      <CertificationsGridSection items={awardsRegistry} />
    </>
  );
}
