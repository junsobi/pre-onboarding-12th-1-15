import React from 'react';
import useAuthForm from '../../hook/useAuthForm';
import { signUp } from '../../lib/api/auth';
import { useNavigate } from 'react-router';

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

  return (
    <form onSubmit={singupHandler}>
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
