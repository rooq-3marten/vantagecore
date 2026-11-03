import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'solid' | 'gradient' | 'outline' | 'outlineLight';
  size?: 'sm' | 'md' | 'compact';
  withArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid: 'border border-[#07473a] bg-[#0b6b58] text-white hover:bg-[#085243]',
  gradient: 'btn-gradient border border-[#07473a] text-white',
  outline: 'border border-[#8fa89d] bg-white text-[#0c1f1b] hover:border-[#0b6b58] hover:text-[#0b6b58]',
  outlineLight: 'border border-[#6ee7b7]/55 bg-[#174239] text-[#f4f7f5] hover:border-white hover:bg-[#1e5247] hover:text-white',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-4 text-xs font-semibold tracking-[0.01em]',
  md: 'h-10 px-6 text-[13px] font-semibold tracking-[0.01em]',
  compact: 'h-9 px-4 text-[13px] font-medium',
};

const baseClasses =
  'group inline-flex items-center justify-center gap-2 rounded whitespace-nowrap shrink-0 transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b58] focus-visible:ring-offset-2';

export default function Button({
  children,
  href,
  variant = 'solid',
  size = 'md',
  withArrow = false,
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  const combined = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5">
          →
        </span>
      )}
    </>
  );
  if (href) return <Link href={href} className={combined}>{content}</Link>;
  return <button type={type} onClick={onClick} className={combined}>{content}</button>;
}
