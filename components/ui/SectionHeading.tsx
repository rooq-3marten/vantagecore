import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
  tone?: 'light' | 'dark';
  withBracket?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  as = 'h2',
  tone = 'light',
  withBracket = false,
}: SectionHeadingProps) {
  const HeadingTag = as;
  const headingColor = tone === 'dark' ? 'text-[#f4f7f5]' : 'text-[#0c1f1b]';
  const bodyColor = tone === 'dark' ? 'text-[#d1dfd9]' : 'text-[#2d423d]';
  const eyebrowColor = tone === 'dark' ? 'text-[#6ee7b7]' : 'text-[#0b6b58]';
  const barColor = tone === 'dark' ? 'bg-[#34d399]' : 'bg-[#0b6b58]';
  const bracketColor = tone === 'dark' ? 'border-[#34d399]/45' : 'border-[#0b6b58]/35';

  const sizeClass = as === 'h1'
    ? `text-4xl md:text-5xl font-semibold tracking-tight leading-[1.12] ${headingColor}`
    : `text-3xl font-semibold tracking-tight ${headingColor}`;

  return (
    <div className="relative">
      {withBracket && (
        <span aria-hidden="true" className={`pointer-events-none absolute -left-4 -top-4 hidden h-6 w-6 border-l-2 border-t-2 ${bracketColor} md:block`} />
      )}
      <div className={`mb-4 h-1 w-12 ${barColor}`} />
      {eyebrow && <p className={`mb-2 text-xs font-semibold ${eyebrowColor}`}>{eyebrow}</p>}
      <HeadingTag className={`anim-heading [text-wrap:balance] ${sizeClass}`}>{title}</HeadingTag>
      {description && <p className={`mt-4 max-w-2xl text-base font-normal leading-relaxed ${bodyColor}`}>{description}</p>}
    </div>
  );
}
