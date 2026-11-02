'use client';

import React, { useState } from 'react';

export interface CopyEmailButtonProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}

export default function CopyEmailButton({ email, copyLabel, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-lg border border-slate-300 bg-[#f8fafc] px-3 py-1.5 text-xs font-medium text-slate-900 transition-colors hover:border-[#2563eb] hover:text-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
