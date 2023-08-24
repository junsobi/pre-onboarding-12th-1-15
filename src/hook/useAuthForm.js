import { useState, useEffect, useRef } from 'react';
import { validationEmail, validationPassword } from '../validators/authValidator';

export default function useAuthForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailvalid, setEmailvalid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const emailChangeHandler = () => {
    if (emailRef.current) {
      setEmailvalid(validationEmail(emailRef.current.value));
      if (emailRef.current.value.length > 0 && !emailRef.current.value.includes('@'))
        setEmailErrorMsg('정확한 이메일 주소를 입력해주세요.');
      else setEmailErrorMsg('');
    }
  };
  const passwordChangeHandler = () => {
    if (passwordRef.current) {
      setPasswordValid(validationPassword(passwordRef.current.value));
      if (passwordRef.current.value.length > 0 && passwordRef.current.value.length < 8)
        setPasswordErrorMsg('8자리 이상 입력해주세요.');
      else setPasswordErrorMsg('');
    }
  };

  useEffect(() => {
    setIsPass(emailvalid && passwordValid);
  }, [emailvalid, passwordValid]);

  return {
    emailRef,
    emailChangeHandler,
    emailErrorMsg,
    passwordRef,
    passwordChangeHandler,
    passwordErrorMsg,
    isPass,
  };
}
