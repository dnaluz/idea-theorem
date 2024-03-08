/** Components */
import Input, { InputTypes } from '@/app/components/Input';
import BirthDate from '@/app/components/BirthDate';
import Button, { ButtonType } from '@/app/components/Button';

export type CreateUserAccountFormProps = {
  title: string;
};

const CreateUserAccountForm = ({ title }: CreateUserAccountFormProps) => {
  return (
    <section className="mt-59 desktop:mt-45 w-full desktop:max-w-form mx-auto">
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
        />
        <Input
          id="contact_number"
          name="contact_number"
          label="Contact Number"
          type={InputTypes.TEXT}
          className="mt-4"
          required
          placeholder="Contact Number"
        />
        <BirthDate label="Birthdate" className="mt-4" />
        <Input
          id="email"
          name="email"
          label="Email Address"
          type={InputTypes.TEXT}
          className="mt-4"
          required
          placeholder="Email Address"
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type={InputTypes.PASSWORD}
          className="mt-4"
          required
          placeholder="Create Password"
        />
        <Input
          id="confirm_password"
          name="confirm_password"
          label="Confirm Password"
          type={InputTypes.PASSWORD}
          className="mt-4"
          required
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex flex-col pt-5 px-25 desktop:flex-row desktop:justify-center desktop:mt-45 desktop:px-0 desktop:pt-0">
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
    </section>
  );
};

export default CreateUserAccountForm;
