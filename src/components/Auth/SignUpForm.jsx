import React from 'react';
import useAuthForm from '../../hook/useAuthForm';

export default function SignUpForm() {
  const {
    emailRef,
    emailChangeHandler,
    emailErrorMsg,
    passwordRef,
    passwordChangeHandler,
    passwordErrorMsg,
    isPass,
  } = useAuthForm();

  return (
    <form>
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
      <button data-testid="signup-button" disabled={!isPass}>
        회원가입
      </button>
    </form>
  );
}
