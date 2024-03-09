import { FieldValues, UseFormRegister } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';

/** Components */
import ErrorMessage from '@/app/components/ErrorMessage';

export type SelectOption = {
  label: string;
  value: string | number;
};

export type CustomSelectProps = {
  id: string;
  label: string;
  name: string;
  options: SelectOption[];
  required: boolean;
  onChange: (value: string | number) => void;
  register: UseFormRegister<FieldValues>;
  errors: any;
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
}: CustomSelectProps) => {
  const styles: StylesConfig = {
    control: (styles) => {
      return {
        ...styles,
        height: '50px',
        width: '115px',
        borderColor: errors[name] || errors.dob ? '#CF4055' : '#A5B6CD',
        fontSize: '18px',
        color: errors[name] || errors.dob ? 'C#F4055' : '#4D5C6F',
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
        {...register(name, { required: 'This field is required' })}
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
            (errors[name].message || errors.dob) ?? 'This field is required'
          }
        />
      )}
    </div>
  );
};

export default CustomSelect;
