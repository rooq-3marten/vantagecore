import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {kicker && (
        <p className="text-xs font-semibold text-[#1d4ed8] mb-2.5">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base font-normal leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
