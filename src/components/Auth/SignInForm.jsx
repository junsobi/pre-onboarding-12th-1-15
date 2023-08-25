import React, { useEffect } from 'react';
import useAuthForm from './hook/useAuthForm';
import { signIn } from '../../lib/api/auth';
import { useNavigate } from 'react-router';
import InputField from './InputFileld';
import Button from '../Buttons/Button';

export default function SignInForm() {
  const navigate = useNavigate();
  const {
    emailRef,
    emailChangeHandler,
    emailErrorMsg,
    passwordRef,
    passwordChangeHandler,
    passwordErrorMsg,
    isPass,
  } = useAuthForm();

  const singinHandler = async e => {
    e.preventDefault();
    try {
      await signIn(emailRef.current.value, passwordRef.current.value);
      navigate('/todo');
    } catch (error) {
      const errorMsg = error.response?.data?.message;
      alert(errorMsg || '로그인에 실패했습니다.');
    }
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []); // 랜더링시 이메일에 포커스

  return (
    <form onSubmit={singinHandler} className="w-full flex flex-col mt-4 gap-2 text-blue-600">
      <InputField
        label="이메일"
        id="email"
        inputRef={emailRef}
        onChangeHandler={emailChangeHandler}
        type="email"
        errorMsg={emailErrorMsg}
      />
      <InputField
        label="패스워드"
        id="password"
        inputRef={passwordRef}
        onChangeHandler={passwordChangeHandler}
        type="password"
        errorMsg={passwordErrorMsg}
      />
      <Button
        dataTestId="signin-button"
        disabled={!isPass}
        text={'로그인'}
        type="submit"
        size="small"
        variant="mainstyle"
        className="mt-2 py-2"
      />
    </form>
  );
}
