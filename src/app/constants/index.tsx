const API_URL = 'https://fullstack-test-navy.vercel.app/api/users/create';

/** Error Messages */
const REQUIRED_MESSAGE = 'This field is required';
const INVALID_PHONE_NUMBER = 'Invalid phone number format';
const INVALID_EMAIL =
  'Sorry, this email address is not valid.  Please try again.';
const INVALID_FULL_NAME = 'Invalid full name, no symbols allowed';
const ACCOUNT_ERROR_MESSAGE = 'There was an error creating the account.';
const INVALID_PASSWORD =
  'Password must contain an uppercase letter, lowercase letter and a number';
const INVALID_PASSWORD_MATCH = 'Passwords do not match';
const INVALID_PASSWORD_SHORT = 'Passwords is not short';
/** Success Messages */
const SUCCESS_MESSAGE = 'User account successfully created.';

export {
  ACCOUNT_ERROR_MESSAGE,
  API_URL,
  INVALID_PHONE_NUMBER,
  INVALID_EMAIL,
  INVALID_FULL_NAME,
  INVALID_PASSWORD,
  INVALID_PASSWORD_MATCH,
  INVALID_PASSWORD_SHORT,
  REQUIRED_MESSAGE,
  SUCCESS_MESSAGE,
};
