import React from 'react';
import { AlertCircle } from 'lucide-react';

interface BaseFieldProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
}

interface TextInputFieldProps extends BaseFieldProps {
  as?: 'input';
  type?: 'text' | 'email' | 'tel';
  value: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface TextAreaFieldProps extends BaseFieldProps {
  as: 'textarea';
  rows?: number;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

interface SelectFieldProps extends BaseFieldProps {
  as: 'select';
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type FormFieldProps = TextInputFieldProps | TextAreaFieldProps | SelectFieldProps;

export default function FormField(props: FormFieldProps) {
  const { id, name, label, required = false, error } = props;
  const errorId = `error-${name}`;

  const stateBorderClasses = error
    ? 'border-red-700 focus:border-red-700 focus:ring-red-700'
    : 'border-slate-200 focus:border-[#1d4ed8] focus:ring-[#1d4ed8]';

  const baseControlClasses = `w-full rounded-lg border bg-slate-50 focus:bg-white px-3.5 text-sm font-normal text-slate-900 placeholder:text-slate-600/50 focus:outline-none focus:ring-1 transition-colors ${stateBorderClasses}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-900 mb-2">
        {label} {required && <span className="text-slate-600">*</span>}
      </label>

      {props.as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={props.rows ?? 7}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${baseControlClasses} py-3 leading-relaxed`}
        />
      ) : props.as === 'select' ? (
        <select
          id={id}
          name={name}
          value={props.value}
          onChange={props.onChange}
          className={`${baseControlClasses} min-h-[44px] py-2.5`}
        >
          {props.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? 'text'}
          value={props.value}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          onChange={props.onChange}
          onBlur={props.onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${baseControlClasses} min-h-[44px] py-2.5`}
        />
      )}

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-700"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
