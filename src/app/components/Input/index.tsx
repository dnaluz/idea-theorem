'use client';

import { createRef } from 'react';

export enum InputTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
  NUMBER = 'number',
}

export type InputProps = {
  className?: string;
  error?: boolean;
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type: InputTypes.TEXT | InputTypes.PASSWORD;
};

const Input = ({
  className,
  error,
  id,
  label,
  name,
  placeholder,
  type,
  required,
}: InputProps) => {
  const ref = createRef<HTMLInputElement>();
  return (
    <div className={`relative box-border ${className ? className : ''}`}>
      <label
        htmlFor={id}
        className="text-base font-bold leading-6 tracking-0.15 text-333333 mb-2.5"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={`block border-A5B6CD border-1 rounded w-full px-4 py-11.5 mt-2.5 text-2C3642 `}
        type={type}
        required={required}
        ref={ref}
      />
      <span className="absolute left-4 top-26 bg-white text-xs text-4D5C6F leading-18 px-1">
        {placeholder}
        {required && <span className="text-CF4055 px-2 inline-block">*</span>}
      </span>
      <div
        className="text-lg text-4D5C6F font-normal"
        onClick={() => {
          ref.current?.focus();
        }}
      >
        {placeholder}
      </div>
    </div>
  );
};

export default Input;
