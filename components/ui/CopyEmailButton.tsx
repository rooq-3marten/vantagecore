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
      className="inline-flex h-7 items-center rounded border border-[#2c6659] bg-[#174037] px-2.5 text-[11px] font-medium whitespace-nowrap text-[#f4f7f5] transition-colors hover:border-[#6ee7b7] hover:bg-[#1f5247] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d399]"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
