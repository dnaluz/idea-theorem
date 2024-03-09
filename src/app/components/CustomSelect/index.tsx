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
  id: string;
  errors: FieldErrors<FieldValues>;
  label: string;
  name: string;
  onChange: (value: string | number) => void;
  options: SelectOption[];
  required: boolean;
  register: UseFormRegister<FieldValues>;
  short?: boolean;
  value: number | string | undefined;
};

const CustomSelect = ({
  id,
  label,
  name,
  options,
  required,
  onChange,
  register,
  errors,
  short,
}: CustomSelectProps) => {
  const styles: StylesConfig = {
    control: (styles) => {
      return {
        ...styles,
        height: '50px',
        width: '115px',
        borderColor: errors[name] || errors.dob ? '#CF4055' : '#A5B6CD',
        fontSize: '18px',
        color: errors[name] || errors.dob ? '#CF4055' : '#4D5C6F',
        '@media only screen and (max-width: 600px)': {
          width: short ? '90px' : '115px',
        },
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

  return (
    <div className="relative">
      <Select
        {...register(name, { required: REQUIRED_MESSAGE })}
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
};

export default CustomSelect;
