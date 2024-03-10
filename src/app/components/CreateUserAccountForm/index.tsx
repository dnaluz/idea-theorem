// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SelectInstance } from 'react-select';

/** Constants */
import {
  ACCOUNT_ERROR_MESSAGE,
  API_URL,
  AUTO_HIDE_DELAY_DEFAULT,
  INVALID_EMAIL,
  INVALID_FULL_NAME,
  INVALID_PASSWORD,
  INVALID_PASSWORD_MATCH,
  INVALID_PASSWORD_SHORT,
  INVALID_PHONE_NUMBER,
  REQUIRED_MESSAGE,
  SUCCESS_MESSAGE,
} from '@/app/constants';

/** Components */
import AlertMessage, { AlertMessageType } from '@/app/components/AlertMessage';
import BirthDate, { MONTHS } from '@/app/components/BirthDate';
import Button, { ButtonType } from '@/app/components/Button';
import Input, { InputTypes } from '@/app/components/Input';

export type CreateUserAccountFormProps = {
  title: string;
  autoHideAlert: boolean;
  autoHideDelay?: number;
};

const CreateUserAccountForm = ({
  title,
  autoHideAlert,
  autoHideDelay = AUTO_HIDE_DELAY_DEFAULT,
}: CreateUserAccountFormProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const birthDayRef = {
    dayRef: useRef<SelectInstance | null>(null),
    monthRef: useRef<SelectInstance | null>(null),
    yearRef: useRef<SelectInstance | null>(null),
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: Record<string, unknown>) => {
    // No errors submit to API

    if (Object.keys(errors).length === 0) {
      const { day, year } = data;
      const month = MONTHS.find((m) => m.value === data.month)?.label;
      const date_of_birth = `${day}-${month}-${year}`;

      const formData = {
        ...data,
        date_of_birth,
      };

      // Send data to API
      const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await response.json();

      setIsSuccess(json.title === 'Success');
      setShowAlert(true);
    }
  };

  useEffect(() => {
    if (autoHideAlert && showAlert) {
      setTimeout(() => setShowAlert(false), autoHideDelay);
    }
  }, [showAlert, autoHideAlert]);

  return (
    <section className="relative mt-59 desktop:mt-45 w-full desktop:max-w-form mx-auto">
      <AlertMessage
        message={isSuccess ? SUCCESS_MESSAGE : ACCOUNT_ERROR_MESSAGE}
        type={isSuccess ? AlertMessageType.SUCCESS : AlertMessageType.ERROR}
        display={showAlert}
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate ref={formRef}>
        <div className="text-left mb-15 ml-26 desktop:ml-0">
          <h1 className="text-xl leading-30 font-bold text-2C3642">{title}</h1>
        </div>
        <div className="border-t-1 border-D8E0E9 pl-25 pr-22 pt-22 pb-102 desktop:rounded-lg form desktop:p-10 desktop:border-t-0">
          <Input
            id="full_name"
            name="full_name"
            label="Full Name"
            type={InputTypes.TEXT}
            placeholder="Full Name"
            required
            register={register}
            validationSchema={{
              required: REQUIRED_MESSAGE,
              validate: (value: string) => {
                if (!value.match(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)) {
                  return INVALID_FULL_NAME;
                }
              },
            }}
            errors={errors}
          />
          <Input
            id="contact_number"
            name="contact_number"
            label="Contact Number"
            type={InputTypes.TEXT}
            className="mt-4"
            required
            placeholder="Contact Number"
            register={register}
            validationSchema={{
              required: REQUIRED_MESSAGE,
              validate: (value: string) => {
                if (
                  !value.match(
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                  )
                ) {
                  return INVALID_PHONE_NUMBER;
                }
              },
            }}
            errors={errors}
          />
          <BirthDate
            label="Birthdate"
            className="mt-4"
            register={register}
            validationSchema={{ required: true }}
            errors={errors}
            setValue={setValue}
            setError={setError}
            clearErrors={clearErrors}
            ref={birthDayRef}
          />
          <Input
            id="email"
            name="email"
            label="Email Address"
            type={InputTypes.TEXT}
            className="mt-4"
            required
            placeholder="Email Address"
            register={register}
            validationSchema={{
              required: REQUIRED_MESSAGE,
              validate: (value: string) => {
                if (
                  !value.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
                ) {
                  return INVALID_EMAIL;
                }
              },
            }}
            errors={errors}
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type={InputTypes.PASSWORD}
            className="mt-4"
            required
            placeholder="Create Password"
            register={register}
            validationSchema={{
              required: REQUIRED_MESSAGE,
              validate: (value: string) => {
                if (value.length < 8) {
                  return INVALID_PASSWORD_SHORT;
                }
                if (
                  !value.match(/[A-Z]/) ||
                  !value.match(/[a-z]/) ||
                  !value.match(/[0-9]/)
                ) {
                  return INVALID_PASSWORD;
                }
              },
            }}
            errors={errors}
          />
          <Input
            id="confirm_password"
            name="confirm_password"
            label="Confirm Password"
            type={InputTypes.PASSWORD}
            className="mt-4"
            required
            placeholder="Confirm Password"
            register={register}
            validationSchema={{
              required: REQUIRED_MESSAGE,
              validate: (value: string) => {
                if (watch('password') !== value) {
                  return INVALID_PASSWORD_MATCH;
                }
              },
            }}
            errors={errors}
          />
        </div>
        <div className="cta-container flex flex-col py-5 px-25 desktop:flex-row desktop:justify-center desktop:mt-45 desktop:px-0 desktop:pt-0">
          <Button
            type={ButtonType.RESET}
            label="Cancel"
            className="desktop:mr-7.5"
            onClick={() => {
              birthDayRef?.dayRef?.current?.setValue('day', null);
              setValue('day', null);
              birthDayRef?.monthRef?.current?.setValue('month', null);
              setValue('month', null);
              birthDayRef?.yearRef?.current?.setValue('year', null);
              setValue('year', null);
            }}
          />
          <Button
            type={ButtonType.SUBMIT}
            label="Submit"
            className="desktop:ml-7.5"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateUserAccountForm;
