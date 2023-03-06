import { useAuth } from 'context/authContext';
import FormWithCallback from './FormWithCallback';

const SignUpForm = () => {
  const { signUp } = useAuth();

  return (
    <>
      <h2 className='text-center text-lg'>회원가입</h2>
      <FormWithCallback submitCallback={signUp} />
    </>
  );
};

export default SignUpForm;
