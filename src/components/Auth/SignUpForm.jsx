import React from 'react';
import useAuthForm from './hook/useAuthForm';
import { signUp } from '../../lib/api/auth';
import { useNavigate } from 'react-router';
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

  return (
    <form onSubmit={singupHandler} className="w-full flex flex-col gap-2 mt-4 text-blue-600">
      <label htmlFor="email" className="text-blue-700">
        이메일
      </label>
      <input
        data-test-id="email-input"
        id="email"
        ref={emailRef}
        onChange={emailChangeHandler}
        type="email"
        className="h-9 p-2 text-blue-600 border border-blue-600 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <span id="email-error-msg">{emailErrorMsg}</span>
      <label htmlFor="password" className="text-blue-700">
        비밀번호
      </label>
      <input
        data-test-id="password-input"
        id="password"
        type="password"
        ref={passwordRef}
        onChange={passwordChangeHandler}
        className="h-9 p-2 text-blue-600 border border-blue-600 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <span id="password-error-msg">{passwordErrorMsg}</span>

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
