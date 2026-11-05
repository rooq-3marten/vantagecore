'use client';

import React from 'react';
import { usePWA } from '@/lib/usePWA';
import { primaryPhoneDisplay, primaryPhoneHref } from '@/lib/constants';

export default function OfflineIndicator() {
  const { isOnline } = usePWA();

  if (isOnline) return null;

  return (
    <aside aria-live="polite" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded border border-[#f59e0b] bg-[#1a201d] p-3 text-white shadow-none sm:left-6 sm:right-auto">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
          <p className="text-xs font-semibold text-white">Offline Mode Active</p>
        </div>
        <a href={primaryPhoneHref} className="text-xs font-semibold text-[#6ee7b7] hover:underline">
          {primaryPhoneDisplay}
        </a>
      </div>
      <p className="mt-1 text-[11px] font-normal leading-relaxed text-[#c7d8d0]">
        Service catalog and contact runbooks are cached locally for offline datacenter access.
      </p>
    </aside>
  );
}
