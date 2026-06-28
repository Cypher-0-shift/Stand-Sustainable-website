import React from 'react';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function InputField({ label, id, ...props }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
        {label}
      </label>
      <input
        id={id}
        className="w-full bg-transparent border-b p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent rounded-sm transition-colors"
        style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
        {...props}
      />
    </div>
  );
}

type TextAreaFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function TextAreaField({ label, id, ...props }: TextAreaFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
        {label}
      </label>
      <textarea
        id={id}
        className="w-full bg-transparent border-b p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent rounded-sm transition-colors resize-none"
        style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
        {...props}
      />
    </div>
  );
}
