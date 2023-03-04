import { useAuth } from 'context/authContext';
import FormWithCallback from './FormWithCallback';

const SignInForm = () => {
  const { signIn } = useAuth();
  return (
    <>
      <FormWithCallback submitCallback={signIn} />
    </>
  );
};

export default SignInForm;
