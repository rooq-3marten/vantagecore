'use client';

import React, { useState } from 'react';
import { usePWA } from '@/lib/usePWA';

export default function PWAInstallButton({ className = '' }: { className?: string }) {
  const { isInstallable, isInstalled, isIOS, install } = usePWA();
  const [showIOS, setShowIOS] = useState(false);

  if (isInstalled) return null;

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className={`inline-flex items-center gap-1.5 rounded border border-[#1e4d41] bg-[#12382f] px-2.5 py-1 text-[11px] font-semibold text-[#6ee7b7] transition-colors hover:bg-[#1a4e42] hover:text-white ${className}`}
        title="Install VantageCore Systems for offline server room access"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span>Install App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOS(true)}
          className={`inline-flex items-center gap-1.5 rounded border border-[#1e4d41] bg-[#12382f] px-2.5 py-1 text-[11px] font-semibold text-[#6ee7b7] transition-colors hover:bg-[#1a4e42] hover:text-white ${className}`}
        >
          <span>Install App</span>
        </button>

        {showIOS && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-sm rounded border border-[#1e4d41] bg-[#0c241f] p-6 text-white">
              <h3 className="text-base font-semibold text-white">Install on iPhone / iPad</h3>
              <p className="mt-2 text-xs font-normal leading-relaxed text-[#c7d8d0]">
                1. Tap the <strong className="text-white">Share</strong> button in the Safari toolbar.<br />
                2. Scroll down and select <strong className="text-white">Add to Home Screen</strong>.
              </p>
              <button
                type="button"
                onClick={() => setShowIOS(false)}
                className="mt-5 w-full rounded border border-[#215649] bg-[#12352d] py-2 text-xs font-semibold text-white hover:bg-[#18453b]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
}
