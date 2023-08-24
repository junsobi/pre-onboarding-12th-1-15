import React from 'react';
import useAuthForm from '../../hook/useAuthForm';

export default function SignInForm() {
  const { emailRef, emailChangeHandler, passwordRef, passwordChangeHandler, isPass } =
    useAuthForm();

  return (
    <form>
      <label htmlFor="email"></label>
      <input
        data-testid="email-input"
        id="email"
        ref={emailRef}
        onChange={emailChangeHandler}
      ></input>
      <label htmlFor="password"></label>
      <input
        data-testid="password-input"
        id="password"
        type="password"
        ref={passwordRef}
        onChange={passwordChangeHandler}
      ></input>
      <button data-testid="signin-button" disabled={!isPass}>
        로그인
      </button>
    </form>
  );
}
