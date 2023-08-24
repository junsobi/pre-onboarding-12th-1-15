import React from 'react';
import useAuthForm from '../../hook/useAuthForm';
import { signIn } from '../../lib/api/auth';
import { useNavigate } from 'react-router';
import Button from '../Button';

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

  return (
    <form onSubmit={singinHandler}>
      <label htmlFor="email"></label>
      <input
        data-testid="email-input"
        id="email"
        ref={emailRef}
        onChange={emailChangeHandler}
        type="email"
      />
      <span id="email-error-msg">{emailErrorMsg}</span>
      <label htmlFor="password"></label>
      <input
        data-testid="password-input"
        id="password"
        type="password"
        ref={passwordRef}
        onChange={passwordChangeHandler}
      />
      <span id="password-error-msg">{passwordErrorMsg}</span>
      <Button
        dataTestId="signin-button"
        disabled={!isPass}
        text={'로그인'}
        type="submit"
        className="relative w-full rounded-md "
      />
    </form>
  );
}
