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
  const surfaceStyles = featured
    ? 'bg-white border-[#aec4ba]'
    : 'bg-white border-[#c5d4cc]';
  const hoverStyles = interactive
    ? 'transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#0b6b58]/70'
    : '';

  return (
    <div
      className={`group rounded border border-t-2 border-t-[#0b6b58] p-8 ${surfaceStyles} ${hoverStyles} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
