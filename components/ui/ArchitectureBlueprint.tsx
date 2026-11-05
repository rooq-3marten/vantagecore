'use client';

import React, { useState } from 'react';

interface Checkpoint {
  id: string;
  title: string;
  protocol: string;
  specs: string;
  telemetry: string;
  x: number;
  y: number;
}

const checkpoints: Checkpoint[] = [
  { id: 'bgp', title: 'Border BGP Edge', protocol: 'BGP Multi-Homing', specs: 'AS64512 dual-carrier BGP peering with BFD session tracking and sub-second failover between fiber loops.', telemetry: 'Dual-Carrier Peering · <1s Failover', x: 200, y: 110 },
  { id: 'firewall', title: 'HA Firewall Cluster', protocol: 'Active-Passive State Sync', specs: 'Clustered perimeter firewalls syncing state over heartbeat lines. Hardware bypass ensures zero packet loss during switchover.', telemetry: 'State-Table Sync · WireGuard Tunneling', x: 400, y: 110 },
  { id: 'interconnect', title: 'Private Interconnect', protocol: 'Dedicated Cloud Transit', specs: 'Encrypted direct peering to Google Cloud & Azure ExpressRoute. Bypasses public internet for low-latency database replication.', telemetry: '10 Gbps Transit · <4ms Latency', x: 610, y: 165 },
  { id: 'landing', title: 'Cloud Landing Zone', protocol: 'Hub-and-Spoke VPC', specs: 'Terraform-managed landing zones with isolated database tiers, audited IAM boundaries, and automated snapshot retention.', telemetry: 'Multi-AZ VPC · Client-Owned Repo', x: 610, y: 55 },
];

export default function ArchitectureBlueprint() {
  const [activeId, setActiveId] = useState<string>('firewall');
  const active = checkpoints.find((c) => c.id === activeId) ?? checkpoints[1];

  return (
    <div className="rounded border border-[#1b4e42] bg-[#0c241f] p-6 text-white sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#184238] pb-5">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#34d399]">Interactive Engineering Blueprint</span>
          <h4 className="mt-1 text-lg font-semibold tracking-tight text-white">Dual-Carrier BGP &amp; Hybrid Cloud Reference Topology</h4>
        </div>
        <span className="rounded border border-[#215649] bg-[#12352d] px-2.5 py-1 text-xs font-semibold tabular-nums text-[#6ee7b7]">
          Hover checkpoints to inspect
        </span>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg viewBox="0 0 760 220" className="w-full min-w-[640px] select-none text-xs">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0b6b58" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <path d="M 60 70 L 200 110 M 60 150 L 200 110 M 200 110 L 400 110 M 400 110 L 610 55 M 400 110 L 610 165" stroke="#1d4d41" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          {activeId === 'bgp' && <path d="M 60 70 L 200 110 M 60 150 L 200 110" stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" />}
          {activeId === 'firewall' && <path d="M 200 110 L 400 110" stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" />}
          {(activeId === 'landing' || activeId === 'interconnect') && <path d="M 400 110 L 610 55 M 400 110 L 610 165" stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" />}

          <g transform="translate(10, 52)"><rect width="90" height="36" rx="4" fill="#13332c" stroke="#225447" /><text x="45" y="22" textAnchor="middle" fill="#c7d8d0" fontSize="10" fontWeight="600">ISP-A Fiber</text></g>
          <g transform="translate(10, 132)"><rect width="90" height="36" rx="4" fill="#13332c" stroke="#225447" /><text x="45" y="22" textAnchor="middle" fill="#c7d8d0" fontSize="10" fontWeight="600">ISP-B Fiber</text></g>

          {checkpoints.map((cp) => {
            const isSel = cp.id === activeId;
            return (
              <g key={cp.id} transform={`translate(${cp.x - 70}, ${cp.y - 25})`} onMouseEnter={() => setActiveId(cp.id)} onClick={() => setActiveId(cp.id)} className="cursor-pointer">
                <rect width="140" height="50" rx="4" fill={isSel ? '#114438' : '#0e2b24'} stroke={isSel ? '#34d399' : '#1e4f43'} strokeWidth={isSel ? '2' : '1'} />
                <circle cx="16" cy="25" r="4" fill={isSel ? '#34d399' : '#0b6b58'} />
                <text x="28" y="22" fill="#ffffff" fontSize="11" fontWeight="600">{cp.title}</text>
                <text x="28" y="36" fill={isSel ? '#6ee7b7' : '#96b8ab'} fontSize="9">{cp.protocol}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-5 rounded border border-[#1d4d41] bg-[#091b17] p-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#34d399]" />
            <span className="text-sm font-semibold text-white">{active.title}</span>
            <span className="text-xs text-[#96b8ab]">· {active.protocol}</span>
          </div>
          <p className="mt-1 text-xs font-normal leading-relaxed text-[#c7d8d0]">{active.specs}</p>
        </div>
        <div className="mt-3 shrink-0 sm:mt-0 sm:text-right">
          <span className="rounded bg-[#13382f] px-2.5 py-1 text-[11px] font-semibold text-[#6ee7b7]">{active.telemetry}</span>
        </div>
      </div>
    </div>
  );
}
