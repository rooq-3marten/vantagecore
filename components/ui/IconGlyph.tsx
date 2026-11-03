import React from 'react';
import type { IconName } from '@/lib/types';

const iconPaths: Record<IconName, string> = {
  cloud: 'M6.5 18h11a3.5 3.5 0 0 0 .6-6.95A5.5 5.5 0 0 0 7.3 9.2 4 4 0 0 0 6.5 18Z',
  network: 'M12 3l7 3.5v5c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5v-5L12 3Zm-2.5 9 1.8 1.8 3.7-3.8',
  support: 'M4 13v-1a8 8 0 0 1 16 0v1m-16 0a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2v1Zm16 0a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1Zm-6 5h-4',
  data: 'M4 6.5C4 4.8 7.6 3.5 12 3.5s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 5.5c0 1.7 3.6 3 8 3s8-1.3 8-3M4 17.5c0 1.7 3.6 3 8 3s8-1.3 8-3V6.5',
  check: 'M5 12.5l4.2 4.2L19 7',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
};

export default function IconGlyph({
  name,
  contained = true,
  tone = 'light',
}: {
  name: IconName;
  contained?: boolean;
  tone?: 'light' | 'dark';
}) {
  const svg = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d={iconPaths[name]} />
    </svg>
  );
  if (!contained) return svg;
  const boxClass = tone === 'dark'
    ? 'border-[#265c50] bg-[#173f36] text-[#6ee7b7] group-hover:border-[#34d399] group-hover:text-white'
    : 'border-[#b5cfc3] bg-[#e6f1ec] text-[#0b6b58] group-hover:border-[#84b39f] group-hover:bg-[#d7eae1]';
  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded border transition-colors duration-200 ${boxClass}`}>
      {svg}
    </div>
  );
}
