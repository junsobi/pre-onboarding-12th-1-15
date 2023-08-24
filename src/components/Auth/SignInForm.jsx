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
    <form onSubmit={singinHandler} className="w-full flex flex-col mt-4 gap-2 text-blue-600">
      <label htmlFor="email" className="text-blue-800">
        이메일
      </label>
      <input
        data-testid="email-input"
        id="email"
        ref={emailRef}
        onChange={emailChangeHandler}
        type="email"
        className="h-9 p-2 text-blue-600 border border-blue-600 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <span id="email-error-msg">{emailErrorMsg}</span>
      <label htmlFor="password" className="text-blue-800">
        패스워드
      </label>
      <input
        data-testid="password-input"
        id="password"
        type="password"
        ref={passwordRef}
        onChange={passwordChangeHandler}
        className="h-9 p-2 text-blue-600 border border-blue-600 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <span id="password-error-msg">{passwordErrorMsg}</span>
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
