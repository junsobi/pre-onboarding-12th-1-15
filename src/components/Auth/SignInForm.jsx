import React from 'react';
import useAuthForm from '../../hook/useAuthForm';
import { signIn } from '../../lib/api/auth';
import { useNavigate } from 'react-router';

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
      ></input>
      <span id="email-error-msg">{emailErrorMsg}</span>
      <label htmlFor="password"></label>
      <input
        data-testid="password-input"
        id="password"
        type="password"
        ref={passwordRef}
        onChange={passwordChangeHandler}
      ></input>
      <span id="password-error-msg">{passwordErrorMsg}</span>
      <button data-testid="signin-button" disabled={!isPass}>
        로그인
      </button>
    </form>
  );
}
