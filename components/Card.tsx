import React from 'react';

type SurfacePadding = 'default' | 'spacious' | 'hero';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: SurfacePadding;
  as?: 'div' | 'article' | 'section';
}

const paddingStyles: Record<SurfacePadding, string> = {
  default: 'p-8 sm:p-10',
  spacious: 'p-8 sm:p-10 lg:p-12',
  hero: 'p-8 sm:p-12 lg:p-14',
};

export default function Card({
  children,
  className = '',
  padding = 'default',
  as: Component = 'div',
}: CardProps) {
  return (
    <Component
      data-layer="surface"
      className={`rounded-xl border border-slate-200 bg-white text-slate-900 ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </Component>
  );
}
