'use client';

/** Components */
import CreateUserAccountForm from '@/app/components/CreateUserAccountForm';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <CreateUserAccountForm title="Create User Account" autoHideAlert={true} />
    </main>
  );
};

export default Home;
