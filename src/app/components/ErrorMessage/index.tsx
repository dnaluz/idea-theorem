export type ErrorMessageProps = {
  error: string;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="relative text-CF4055 text-xs font-normal">{error}</div>
  );
};

export default ErrorMessage;
