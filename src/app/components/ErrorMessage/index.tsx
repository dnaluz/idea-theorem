export type ErrorMessageProps = {
  error: string;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="relative text-CF4055 font-normal text-xs">{error}</div>
  );
};

export default ErrorMessage;
