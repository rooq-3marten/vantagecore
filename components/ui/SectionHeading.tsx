import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
  withBracket?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, as = 'h2', withBracket = false }: SectionHeadingProps) {
  const HeadingTag = as;
  const sizeClass = as === 'h1'
    ? 'text-4xl md:text-5xl font-semibold tracking-tight leading-[1.12] text-slate-900'
    : 'text-3xl font-semibold tracking-tight text-slate-900';

  return (
    <div className="relative">
      {withBracket && (
        <span aria-hidden="true" className="pointer-events-none absolute -left-4 -top-4 hidden h-6 w-6 border-l-2 border-t-2 border-[#2563eb]/20 md:block" />
      )}
      <div className="mb-4 h-1 w-12 bg-[#2563eb]" />
      {eyebrow && <p className="mb-2 text-xs font-semibold text-[#2563eb]">{eyebrow}</p>}
      <HeadingTag className={`anim-heading ${sizeClass}`}>{title}</HeadingTag>
      {description && <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}
