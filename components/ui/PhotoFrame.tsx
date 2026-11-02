import React from 'react';
import Image from 'next/image';

export interface PhotoFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  aspectClass?: string;
}

export default function PhotoFrame({
  src,
  alt,
  priority = false,
  aspectClass = 'aspect-[4/3]',
}: PhotoFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-900 ${aspectClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className="object-cover transition-transform duration-200 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#2563eb]/15"
      />
    </div>
  );
}
