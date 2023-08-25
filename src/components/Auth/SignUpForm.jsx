import React, { useEffect } from 'react';
import useAuthForm from './hook/useAuthForm';
import { signUp } from '../../lib/api/auth';
import { useNavigate } from 'react-router';
import InputField from './InputFileld';
import Button from '../Buttons/Button';

export default function SignUpForm() {
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

  const singupHandler = async e => {
    e.preventDefault();
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate('/signin');
    } catch (error) {
      const errorMsg = error.response?.data?.message;
      alert(errorMsg || '회원가입에 실패했습니다.');
    }
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []); // 랜더링시 이메일에 포커스

  return (
    <form onSubmit={singupHandler} className="w-full flex flex-col gap-2 mt-4 text-blue-600">
      <InputField
        label="이메일"
        id="email"
        inputRef={emailRef}
        onChangeHandler={emailChangeHandler}
        type="email"
        errorMsg={emailErrorMsg}
      />
      <InputField
        label="비밀번호"
        id="password"
        inputRef={passwordRef}
        onChangeHandler={passwordChangeHandler}
        type="password"
        errorMsg={passwordErrorMsg}
      />
      <Button
        dataTestId="signup-button"
        disabled={!isPass}
        text={'회원가입'}
        type="submit"
        variant="mainstyle"
        size="small"
        className="mt-2 py-2"
      />
    </form>
  );
}
