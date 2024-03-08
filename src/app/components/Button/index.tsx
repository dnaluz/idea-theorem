export enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
}

export type ButtonProps = {
  label: string;
  type: ButtonType.SUBMIT | ButtonType.RESET;
};

const Button = ({ label, type }: ButtonProps) => {
  return <button type={type}>{label}</button>;
};

export default Button;
