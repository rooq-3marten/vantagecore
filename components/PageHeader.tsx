import React from 'react';
import Section from './Section';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  kicker,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <Section layer="base" spacing="asymmetric" borderBottom>
      <div className="max-w-3xl">
        <p className="text-xs font-semibold text-[#1d4ed8] mb-2.5">{kicker}</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 max-w-2xl">
          {description}
        </p>
      </div>
      {children && <div className="mt-8">{children}</div>}
    </Section>
  );
}
