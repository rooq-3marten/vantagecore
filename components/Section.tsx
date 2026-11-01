import React from 'react';
import Container from './Container';
import Card from './Card';

export type SpatialLayer = 'base' | 'surface';
type SectionSpacing = 'tight' | 'default' | 'generous' | 'asymmetric' | 'hero';

interface SectionProps {
  layer: SpatialLayer;
  spacing?: SectionSpacing;
  borderTop?: boolean;
  borderBottom?: boolean;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

const baseSpacingClasses: Record<SectionSpacing, string> = {
  tight: 'py-8 md:py-10',
  default: 'py-14 md:py-20',
  generous: 'py-16 md:py-24',
  asymmetric: 'pt-12 pb-10 md:pt-16 md:pb-12',
  hero: 'pt-14 pb-16 md:pt-20 md:pb-24',
};

const surfaceOuterSpacingClasses: Record<SectionSpacing, string> = {
  tight: 'py-6 md:py-8',
  default: 'py-8 md:py-12',
  generous: 'py-10 md:py-14',
  asymmetric: 'pt-8 pb-12 md:pt-10 md:pb-16',
  hero: 'pt-8 pb-10 md:pt-12 md:pb-14',
};

export default function Section({
  layer,
  spacing = 'default',
  borderTop = false,
  borderBottom = false,
  ariaLabel,
  className = '',
  children,
}: SectionProps) {
  const borders = [
    borderTop ? 'border-t border-slate-200' : '',
    borderBottom ? 'border-b border-slate-200' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (layer === 'surface') {
    const cardPadding = spacing === 'hero' ? 'hero' : 'spacious';
    return (
      <section
        data-layer="surface"
        aria-label={ariaLabel}
        className={`bg-slate-50 text-slate-900 ${surfaceOuterSpacingClasses[spacing]} ${borders} ${className}`}
      >
        <Container>
          <Card padding={cardPadding}>{children}</Card>
        </Container>
      </section>
    );
  }

  return (
    <section
      data-layer="base"
      aria-label={ariaLabel}
      className={`bg-slate-50 text-slate-900 ${baseSpacingClasses[spacing]} ${borders} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
