import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  featured?: boolean;
  interactive?: boolean;
  className?: string;
}

export default function Card({
  children,
  featured = false,
  interactive = true,
  className = '',
}: CardProps) {
  const hoverStyles = interactive
    ? 'transition-all duration-200 ease-out hover:-translate-y-1 hover:border-t-[3px]'
    : '';
  const featuredGlow = featured
    ? 'hover:ring-1 hover:ring-inset hover:ring-[#2563eb]/30'
    : '';

  return (
    <div
      className={`group rounded-lg border-t-2 border-[#2563eb] bg-white p-8 ${hoverStyles} ${featuredGlow} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
