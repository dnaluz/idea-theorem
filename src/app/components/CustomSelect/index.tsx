// @ts-nocheck
import { forwardRef } from 'react';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';

/** Constants */
import { REQUIRED_MESSAGE } from '@/app/constants';

/** Components */
import ErrorMessage from '@/app/components/ErrorMessage';

export type SelectOption = {
  label: string;
  value: string | number;
};

export type CustomSelectProps = {
  className?: string;
  id: string;
  errors: FieldErrors<FieldValues>;
  label: string;
  name: string;
  onChange: (value: string | number) => void;
  options: SelectOption[];
  required: boolean;
  register: UseFormRegister<FieldValues>;
  value: number | string | undefined;
};

const CustomSelect = forwardRef(function (props: CustomSelectProps, ref) {
  const {
    id,
    label,
    name,
    options,
    required,
    onChange,
    register,
    errors,
    className,
  } = props;

  const styles: StylesConfig = {
    control: (styles) => {
      return {
        ...styles,
        height: '50px',
        width: '100%',
        borderColor: errors[name] || errors.dob ? '#CF4055' : '#A5B6CD',
        fontSize: '18px',
        color: errors[name] || errors.dob ? '#CF4055' : '#4D5C6F',
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        '::after': {
          content: '"*"',
          color: '#CF4055',
          fontSize: '18px',
        },
      };
    },
  };
  const { ref: selectRef, ...rest } = register(name, {
    required: REQUIRED_MESSAGE,
  });
  return (
    <div className={`relative ${className ?? ''}`}>
      <Select
        {...rest}
        instanceId={id}
        placeholder={label}
        name={name}
        required={required}
        options={options}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={styles}
        onChange={(option: any) => {
          return onChange(option.value);
        }}
        ref={ref}
      />

      {errors[name] && (
        <ErrorMessage
          error={
            errors[name]?.message || errors.dob
              ? `${errors[name]?.message}`
              : REQUIRED_MESSAGE
          }
        />
      )}
    </div>
  );
});

export default CustomSelect;
