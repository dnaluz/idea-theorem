'use client';

import { useRef } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

/** Components */
import ErrorMessage from '@/app/components/ErrorMessage';

export enum InputTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
  NUMBER = 'number',
}

export type InputProps = {
  className?: string;
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type: InputTypes.TEXT | InputTypes.PASSWORD;
  register: UseFormRegister<FieldValues>;
  validationSchema?: any;
  errors: any;
};

const Input = ({
  className,
  id,
  label,
  name,
  placeholder,
  type,
  required,
  register,
  validationSchema,
  errors,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref, ...rest } = register(name, validationSchema);

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
        className={`block ${
          errors[name] ? 'border-CF4055' : 'border-A5B6CD'
        } border-1 rounded w-full px-4 py-11.5 mt-2.5 text-2C3642 `}
        type={type}
        required={required}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      <span className="absolute left-4 top-26 bg-white text-xs text-4D5C6F leading-18 px-1">
        {placeholder}
        {required && <span className="text-CF4055 px-2 inline-block">*</span>}
      </span>
      <div
        className="text-lg text-4D5C6F font-normal"
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        {placeholder}
      </div>
      {errors[name] && <ErrorMessage error={errors[name]?.message} />}
    </div>
  );
};

export default Input;
