import { useState } from 'react';
import { useForm } from 'react-hook-form';

/** Components */
import AlertMessage, { AlertMessageType } from '@/app/components/AlertMessage';
import BirthDate, { MONTHS } from '@/app/components/BirthDate';
import Button, { ButtonType } from '@/app/components/Button';
import Input, { InputTypes } from '@/app/components/Input';

export type CreateUserAccountFormProps = {
  title: string;
};

const CreateUserAccountForm = ({ title }: CreateUserAccountFormProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // No errors submit to API
    if (Object.keys(errors).length === 0) {
      const formData = {
        ...data,
      };

      formData.month = MONTHS.find((m) => m.value === data.month)?.label;
      const response = await fetch(
        'https://fullstack-test-navy.vercel.app/api/users/create',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const json = await response.json();
      setIsSuccess(json.title === 'Success');
      setShowAlert(true);
    }
  };

  return (
    <section className="relative mt-59 desktop:mt-45 w-full desktop:max-w-form mx-auto">
      <AlertMessage
        message={
          isSuccess
            ? 'User account successfully created.'
            : 'There was an error creating the account.'
        }
        type={isSuccess ? AlertMessageType.SUCCESS : AlertMessageType.ERROR}
        display={showAlert}
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              required: 'This field is required',
              validate: (value: string) => {
                if (!value.match(/^[^\W_]+$/)) {
                  return 'Invalid value, no symbols allowed';
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
              required: 'This field is required',
              validate: (value: string) => {
                if (
                  !value.match(
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                  )
                ) {
                  return 'Invalid phone number format';
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
            control={control}
            errors={errors}
            setValue={setValue}
            setError={setError}
            clearErrors={clearErrors}
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
              required: 'This field is required',
              validate: (value: string) => {
                if (
                  !value.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
                ) {
                  return 'Sorry, this email address is not valid.  Please try again.';
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
              required: 'This field is required',
              validate: (value: string) => {
                if (value.length < 8) {
                  return 'Password is to short';
                }
                if (
                  !value.match(/[A-Z]/) ||
                  !value.match(/[a-z]/) ||
                  !value.match(/[0-9]/)
                ) {
                  return 'Password must contain an uppercase letter, lowercase letter and a number';
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
              required: 'This field is required',
              validate: (value: string) => {
                if (watch('password') !== value) {
                  return 'Passwords do not match';
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
