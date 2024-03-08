export enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
}

export type ButtonProps = {
  className?: string;
  label: string;
  onClick?: () => void;
  type: ButtonType.SUBMIT | ButtonType.RESET;
};

const Button = ({ className, label, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`rounded-md ${className ?? ''} ${
        type === ButtonType.SUBMIT
          ? 'bg-127C95 text-white px-34 py-11'
          : 'bg-white border-127C95 border-1 text-127C95 px-8 py-2.5 mb-3 desktop:mb-0'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
