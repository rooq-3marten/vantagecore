import React from 'react';

interface SpecListItemProps {
  index?: string;
  title: string;
  description: string;
}

export default function SpecListItem({ index, title, description }: SpecListItemProps) {
  return (
    <li className="border-t border-slate-200 pt-5 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="text-xs font-semibold text-[#1d4ed8] tabular-nums shrink-0">
            {index}
          </span>
        )}
        <div>
          <h4 className="text-base font-semibold tracking-tight text-slate-900">{title}</h4>
          <p className="mt-1.5 text-base font-normal leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
