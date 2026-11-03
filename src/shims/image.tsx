import React, { useState } from 'react';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  unoptimized?: boolean;
  fill?: boolean;
}

export default function Image({
  src,
  alt,
  width,
  height,
  priority,
  unoptimized: _unoptimized,
  fill,
  className = '',
  ...rest
}: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-[#0e2a24] text-xs font-medium text-[#d1dfd9] ${fill ? 'absolute inset-0 h-full w-full' : ''} ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setFailed(true)}
      className={`${fill ? 'absolute inset-0 h-full w-full' : ''} ${className}`}
      {...rest}
    />
  );
}
