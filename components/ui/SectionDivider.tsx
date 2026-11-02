import React from 'react';

export interface SectionDividerProps {
  fromColor?: string;
  toColor?: string;
}

export default function SectionDivider({
  fromColor = '#ffffff',
  toColor = '#eff6ff',
}: SectionDividerProps) {
  return (
    <div aria-hidden="true" className="w-full overflow-hidden leading-none" style={{ backgroundColor: fromColor }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-[60px] w-full"
      >
        <polygon points="0,60 1440,12 1440,60" fill={toColor} />
        <line x1="0" y1="59" x2="1440" y2="12" stroke="#2563eb" strokeOpacity="0.18" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
