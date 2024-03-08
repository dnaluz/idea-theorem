import Select, { StylesConfig } from 'react-select';

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
};

const CustomSelect = ({
  id,
  label,
  name,
  options,
  required,
  onChange,
}: CustomSelectProps) => {
  const styles: StylesConfig = {
    control: (styles) => {
      return {
        ...styles,
        height: '50px',
        width: '115px',
        borderColor: '#A5B6CD',
        fontSize: '18px',
        color: '#4D5C6F',
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
    </div>
  );
};

export default CustomSelect;
