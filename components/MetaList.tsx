import React from 'react';

interface MetaListProps {
  items: readonly string[];
  className?: string;
}

export default function MetaList({ items, className = '' }: MetaListProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {items.map((item, idx) => (
        <React.Fragment key={item}>
          {idx > 0 && <span aria-hidden="true">·</span>}
          <span>{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
