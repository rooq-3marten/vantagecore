import React from 'react';

export function navigateTo(href: string) {
  if (typeof window === 'undefined') return;
  const currentUrl = window.location.pathname + window.location.search;
  if (currentUrl !== href) {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1d4ed8] text-white border border-[#1d4ed8] hover:scale-105 active:scale-100 focus-visible:border-slate-900',
  secondary:
    'bg-white text-slate-900 border border-[#1d4ed8]/40 hover:border-[#1d4ed8] hover:text-[#1d4ed8] hover:scale-105 active:scale-100 focus-visible:border-[#1d4ed8]',
  ghost:
    'bg-transparent text-slate-600 border border-transparent hover:text-[#1d4ed8] hover:border-slate-200 hover:scale-105 active:scale-100 focus-visible:border-[#1d4ed8]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-xs',
  md: 'min-h-[44px] px-5 py-2.5 text-sm',
  lg: 'min-h-[48px] px-6 py-3 text-sm sm:text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <a
        data-layer="elevated"
        href={href}
        onClick={(e) => {
          if (!isExternal && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            e.preventDefault();
            navigateTo(href);
          }
        }}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      data-layer="elevated"
      type={type}
      onClick={onClick}
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
}
