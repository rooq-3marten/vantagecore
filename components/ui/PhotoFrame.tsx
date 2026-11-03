'use client';

import React, { useState } from 'react';

export interface PhotoFrameProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  priority?: boolean;
  aspectClass?: string;
}

export default function PhotoFrame({
  src,
  fallbackSrc,
  alt,
  priority = false,
  aspectClass = 'aspect-[4/3]',
}: PhotoFrameProps) {
  const [activeSrc, setActiveSrc] = useState(src);

  return (
    <div
      style={{ backgroundImage: `url(${activeSrc})` }}
      className={`group relative overflow-hidden rounded border border-[#b5c7be] bg-[#0e2a24] bg-cover bg-center ${aspectClass}`}
    >
      <img
        src={activeSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => {
          if (fallbackSrc && activeSrc !== fallbackSrc) {
            setActiveSrc(fallbackSrc);
          }
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#091c18]/12 ring-1 ring-inset ring-black/10" />
    </div>
  );
}
