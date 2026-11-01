import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import FormField from './FormField';

interface FormValues {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormCardProps {
  topicOptions: string[];
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactFormCard({ topicOptions }: ContactFormCardProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    organization: '',
    topic: topicOptions[0] ?? 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    const syncTopicFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const requestedTopic = params.get('topic');
      if (requestedTopic) {
        const matched = topicOptions.find((t) =>
          t.toLowerCase().includes(requestedTopic.toLowerCase())
        );
        setValues((prev) => ({
          ...prev,
          topic: matched || requestedTopic,
        }));
      }
    };

    syncTopicFromUrl();
    window.addEventListener('popstate', syncTopicFromUrl);
    return () => window.removeEventListener('popstate', syncTopicFromUrl);
  }, [topicOptions]);

  const validate = (current: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!current.name.trim() || current.name.trim().length < 2) {
      nextErrors.name = 'Enter your full name (at least 2 characters).';
    }
    if (!current.email.trim()) {
      nextErrors.email = 'Enter your work email address.';
    } else if (!EMAIL_REGEX.test(current.email.trim())) {
      nextErrors.email = 'Enter a valid email address (for example, name@company.com).';
    }
    if (!current.message.trim()) {
      nextErrors.message = 'Briefly describe your current setup or project scope.';
    } else if (current.message.trim().length < 15) {
      nextErrors.message = 'Include at least 15 characters so we can route this to the right lead.';
    }
    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const refCode = `VCS-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refCode);
    }
  };

  const handleReset = () => {
    setValues({
      name: '',
      email: '',
      organization: '',
      topic: topicOptions[0] ?? 'General Inquiry',
      message: '',
    });
    setErrors({});
    setTouched({});
    setSubmittedRef(null);
  };

  const resolvedOptions = topicOptions.includes(values.topic)
    ? topicOptions
    : [values.topic, ...topicOptions];

  if (submittedRef) {
    return (
      <div className="py-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1d4ed8] bg-white text-[#1d4ed8]">
          <Check className="h-5 w-5" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
          Message logged
        </h2>
        <p className="mt-2.5 text-base font-normal leading-relaxed text-slate-600">
          Thanks, <span className="font-semibold text-slate-900">{values.name}</span>. Your note
          under <span className="font-semibold text-slate-900">{values.topic}</span> is with our
          solutions architecture desk. We will reply to{' '}
          <span className="font-semibold text-slate-900">{values.email}</span> within one business
          day.
        </p>
        <div className="mt-6 border-y border-slate-200 py-3 text-xs font-normal text-slate-600 flex flex-wrap items-center justify-between gap-2">
          <span>Reference ID</span>
          <span className="font-semibold text-slate-900 tabular-nums">{submittedRef}</span>
        </div>
        <div className="mt-7">
          <Button variant="secondary" size="md" onClick={handleReset}>
            Send another inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
          Send a project brief
        </h2>
        <p className="mt-1 text-sm font-normal text-slate-600">
          Required fields are marked with *.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          id="contact-name"
          name="name"
          label="Full Name"
          required
          autoComplete="name"
          placeholder="Adebayo Ogunlesi"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormField
          id="contact-email"
          name="email"
          type="email"
          label="Work Email"
          required
          autoComplete="email"
          placeholder="a.ogunlesi@company.com"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
        <div className="sm:col-span-7">
          <FormField
            id="contact-organization"
            name="organization"
            label="Organization"
            autoComplete="organization"
            placeholder="Company or institution name"
            value={values.organization}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-5">
          <FormField
            as="select"
            id="contact-topic"
            name="topic"
            label="Practice Area"
            value={values.topic}
            options={resolvedOptions}
            onChange={handleChange}
          />
        </div>
      </div>

      <FormField
        as="textarea"
        id="contact-message"
        name="message"
        label="Current Setup & Scope"
        required
        rows={7}
        placeholder="Include workload count, branch locations, target cloud or hardware platform, and timeline."
        value={values.message}
        error={errors.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs font-normal text-slate-600">
          Mutual NDA available prior to sharing network diagrams. Response within 1 business day.
        </p>
        <Button type="submit" variant="primary" size="lg">
          Send Inquiry
        </Button>
      </div>
    </form>
  );
}
