import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'solid' | 'gradient' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]',
  gradient: 'btn-gradient text-white',
  outline: 'border border-[#2563eb] bg-white text-[#2563eb] hover:bg-[#eff6ff]',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2';

export default function Button({ children, href, variant = 'solid', type = 'button', onClick, className = '' }: ButtonProps) {
  const combined = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  if (href) return <Link href={href} className={combined}>{children}</Link>;
  return <button type={type} onClick={onClick} className={combined}>{children}</button>;
}
