import React from 'react';
import Section from './Section';
import Button from './Button';

export default function NotFoundState() {
  return (
    <Section layer="surface" spacing="generous">
      <div className="max-w-md">
        <p className="text-xs font-semibold text-[#1d4ed8] tabular-nums">404</p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-base font-normal leading-relaxed text-slate-600">
          The URL you requested does not match an active page.
        </p>
        <div className="mt-7">
          <Button href="/" variant="primary" size="md">
            Return to Home
          </Button>
        </div>
      </div>
    </Section>
  );
}
