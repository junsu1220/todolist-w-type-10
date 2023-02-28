import { useAuth } from 'context/authContext';
import FormWithCallback from './FormWithCallback';

export default function SignInForm() {
  const { signIn } = useAuth();

  return (
    <>
      <h2 className='text-lg text-center'>로그인</h2>
      <FormWithCallback submitCallback={signIn} />
    </>
  );
}
