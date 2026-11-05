'use client';

import React, { useEffect, useState } from 'react';

export interface LiveDeskStatusProps {
  variant?: 'badge' | 'bar';
  className?: string;
}

export default function LiveDeskStatus({ variant = 'badge', className = '' }: LiveDeskStatusProps) {
  const [mounted, setMounted] = useState(false);
  const [timeState, setTimeState] = useState({ timeStr: '08:00', isActive: true });

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          weekday: 'short',
        }).formatToParts(new Date());
        const hour = parseInt(parts.find((p) => p.type === 'hour')?.value ?? '12', 10);
        const minute = parts.find((p) => p.type === 'minute')?.value ?? '00';
        const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
        const isWeekday = !['Sat', 'Sun'].includes(weekday);
        setTimeState({ timeStr: `${hour.toString().padStart(2, '0')}:${minute}`, isActive: isWeekday && hour >= 8 && hour < 18 });
      } catch {
        // fallback
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const { timeStr, isActive } = timeState;

  if (variant === 'bar') {
    return (
      <div className={`inline-flex items-center gap-1.5 text-xs text-[#c7d8d0] ${className}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${mounted && isActive ? 'bg-[#34d399] animate-pulse' : 'bg-[#f59e0b]'}`} />
        <span>{mounted ? (isActive ? `Desk Active (${timeStr} WAT)` : `Paging Active (${timeStr} WAT)`) : 'Desk Active (WAT)'}</span>
      </div>
    );
  }

  return (
    <div className={`rounded border ${isActive ? 'border-[#1b4e42] bg-[#0c241f]' : 'border-[#4a3b1d] bg-[#152320]'} p-4 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            {mounted && isActive && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-75" />}
            <span className={`relative inline-flex h-2 w-2 rounded-full ${mounted && isActive ? 'bg-[#34d399]' : 'bg-[#f59e0b]'}`} />
          </span>
          <span className="text-xs font-semibold text-white">
            {mounted ? (isActive ? `Desk Status: Active (${timeStr} WAT)` : `Desk Status: Paging Active (${timeStr} WAT)`) : 'Desk Status: Active (WAT)'}
          </span>
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6ee7b7]">Ops Desk</span>
      </div>
      <p className="mt-2 text-xs font-normal leading-relaxed text-[#c7d8d0]">
        {mounted && !isActive
          ? 'After-hours paging active for contracted environments. General briefs queue for 08:00 WAT.'
          : 'Engineers on-desk in Lagos & Abuja. Architecture inquiries and scope briefs reviewed in real-time.'}
      </p>
    </div>
  );
}
