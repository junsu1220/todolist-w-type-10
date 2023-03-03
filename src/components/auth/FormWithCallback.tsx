import { SignRequestProps } from 'apis/auth/sign.type';
import React, { useEffect, useState } from 'react';
import InputWithValidation from './InputWithValidation';

const FormWithCallback = ({
  submitCallback,
}: {
  submitCallback: (props: SignRequestProps) => void;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validationEmail = { exp: /@/, invalidMessage: '@를 포함' };
  const validationPassword = { exp: /.{8,}/, invalidMessage: '8자 이상' };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCallback({ email, password });
  };

  useEffect(() => {
    setIsValid(
      validationEmail.exp.test(email) && validationPassword.exp.test(password)
    );
  }, [email, password]);

  return (
    <>
      <form onSubmit={handleSubmit} className='mt-4'>
        <div className='mb-2'>
          <InputWithValidation
            name='email'
            type='email'
            value={email}
            setValue={setEmail}
            placeholder='@를 포함한 이메일 입력'
            validation={validationEmail}
          />
        </div>
        <div className='mb-2'>
          <InputWithValidation
            name='password'
            type='password'
            value={password}
            setValue={setPassword}
            placeholder='8자 이상 비밀번호 입력'
            validation={validationPassword}
          />
        </div>

        <button type='submit' data-testid='signin-button' disabled={!isValid}>
          submit
        </button>
      </form>
    </>
  );
};

export default FormWithCallback;
