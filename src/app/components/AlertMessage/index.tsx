export enum AlertMessageType {
  SUCCESS = 'Success',
  ERROR = 'Error',
}

export type AlertMessageProps = {
  message: string;
  type: AlertMessageType.SUCCESS | AlertMessageType.ERROR;
  display: boolean;
};

const AlertMessage = ({ message, type, display }: AlertMessageProps) => {
  return (
    <div
      className={`rounded p-19 desktop:py-6 desktop:px-8 desktop:w-426 absolute right-[-388px] top-[45px] transition-opacity duration-500 ${
        display ? 'opacity-100' : 'opacity-0'
      } ${type === AlertMessageType.SUCCESS ? 'bg-CDFADC' : 'bg-FFC0C0'}`}
    >
      <div className="flex flex-row items-center">
        {type === AlertMessageType.SUCCESS ? (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_2829)">
              <path
                d="M18.0569 9.50006L11.1663 16.1819L8.03418 13.1447"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.8333 12.4167C23.8333 18.6299 18.7965 23.6667 12.5833 23.6667C6.37005 23.6667 1.33325 18.6299 1.33325 12.4167C1.33325 6.20348 6.37005 1.16669 12.5833 1.16669C18.7965 1.16669 23.8333 6.20348 23.8333 12.4167Z"
                stroke="#333333"
                strokeWidth="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_2829">
                <rect
                  width="24.5"
                  height="24.5"
                  fill="white"
                  transform="translate(0.333252 0.166687)"
                />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0002 25.6666C20.4435 25.6666 25.6668 20.4433 25.6668 14C25.6668 7.55666 20.4435 2.33331 14.0002 2.33331C7.55684 2.33331 2.3335 7.55666 2.3335 14C2.3335 20.4433 7.55684 25.6666 14.0002 25.6666Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 10.5L10.5 17.5"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 10.5L17.5 17.5"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <h2 className="text-lg leading-27 font-bold ml-2.5">{message}</h2>
      </div>
    </div>
  );
};

export default AlertMessage;
