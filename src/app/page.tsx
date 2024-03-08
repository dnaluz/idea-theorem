import type { Metadata } from 'next';

/** Components */
import Input, { InputTypes } from '@/app/components/Input';
import BirthDate from '@/app/components/BirthDate';

export const metadata: Metadata = {
  title: 'Idea Theorem',
};

const Home = () => {
  return (
    <main>
      <section className="mt-59 desktop:mt-45 max-w-form mx-auto">
        <div className="text-left mb-15 ml-26 desktop:ml-0">
          <h1 className="text-xl leading-30 font-bold text-2C3642">
            Create User Account
          </h1>
        </div>
        <div className="pl-25 pr-22 pt-22 pb-102 desktop:rounded-lg form desktop:p-10">
          <Input
            id="full_name"
            name="full_name"
            label="Full Name"
            type={InputTypes.TEXT}
            displayLabelInline={false}
            placeholder="Full Name"
            required
          />
          <Input
            id="contact_number"
            name="contact_number"
            label="Contact Number"
            type={InputTypes.TEXT}
            className="mt-4"
            displayLabelInline
            required
            placeholder="Contact Number"
          />
          <BirthDate label="Birthdate" className="mt-4" />
          <Input
            id="email"
            name="email"
            label="Email Address"
            type={InputTypes.EMAIL}
            className="mt-4"
            displayLabelInline
            required
            placeholder="Create Password"
          />
          <Input
            id="password"
            name="password"
            label="Password"
            type={InputTypes.PASSWORD}
            className="mt-4"
            required
            placeholder="Create Password"
            displayLabelInline={false}
          />
          <Input
            id="password"
            name="password"
            label="Confirm Password"
            type={InputTypes.PASSWORD}
            className="mt-4"
            required
            placeholder="Confirm Password"
            displayLabelInline={false}
          />
        </div>
        <div className="flex flex-row justify-center"></div>
      </section>
    </main>
  );
};

export default Home;
