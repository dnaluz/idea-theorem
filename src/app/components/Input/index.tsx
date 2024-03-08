export enum InputTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
}

export type InputProps = {
  className?: string;
  displayLabelInline?: boolean;
  error?: boolean;
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type: InputTypes.TEXT | InputTypes.PASSWORD | InputTypes.EMAIL;
};

const Input = ({
  className,
  displayLabelInline,
  error,
  id,
  label,
  name,
  placeholder,
  type,
  required,
}: InputProps) => {
  return (
    <div className={`relative box-border ${className ? className : ''}`}>
      <div className="text-base font-bold leading-6 tracking-0.15 text-333333 mb-2.5">
        {label}
      </div>
      {displayLabelInline && (
        <span className="absolute left-4 top-26 bg-white text-xs text-4D5C6F leading-18">
          {label}
          {required && <span className="text-red-500">*</span>}
        </span>
      )}
      <input
        id={id}
        name={name}
        className="block border-A5B6CD border-1 rounded w-full px-14.5 py-11.5 mt-2.5 text-2C3642"
        type={type}
        required={required}
      />
      <label htmlFor={id} className="text-lg text-4D5C6F font-normal">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
