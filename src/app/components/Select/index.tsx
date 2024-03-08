export type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  id: string;
  label: string;
  name: string;
  options: SelectOption[];
  required: boolean;
};

const Select = ({ id, label, name, options, required }: SelectProps) => {
  return (
    <div className="relative after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:top-5 after:right-3">
      <select
        id={id}
        name={name}
        required={required}
        className="appearance-none border-A5B6CD border-1 rounded text-lg text-4D5C6F font-normal pl-3"
      >
        {options.map((option: SelectOption) => {
          const { label, value } = option;
          return (
            <option value={value} className="text-2C3642 pl-3">
              {label}
            </option>
          );
        })}
      </select>
      <label htmlFor={id} className="text-lg text-4D5C6F font-normal">
        {label}
      </label>
    </div>
  );
};

export default Select;
