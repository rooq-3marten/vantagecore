import React from 'react';

interface BadgePillProps {
  label: string;
  title?: string;
}

export default function BadgePill({ label, title }: BadgePillProps) {
  return (
    <span
      title={title}
      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 whitespace-nowrap"
    >
      {label}
    </span>
  );
}
