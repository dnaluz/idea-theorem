'use client';

/** Components */
import CreateUserAccountForm from '@/app/components/CreateUserAccountForm';

const Home = () => {
  return (
    <main>
      <CreateUserAccountForm title="Create User Account" autoHideAlert={true} />
    </main>
  );
};

export default Home;
