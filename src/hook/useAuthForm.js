import { useState, useEffect, useRef } from 'react';
import { validationEmail, validationPassword } from '../validators/authValidator';

export default function useAuthForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailvalid, setEmailvalid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isPass, setIsPass] = useState(false);

  const emailChangeHandler = () => {
    if (emailRef.current) {
      setEmailvalid(validationEmail(emailRef.current.value));
    }
  };
  const passwordChangeHandler = () => {
    if (passwordRef.current) {
      setPasswordValid(validationPassword(passwordRef.current.value));
    }
  };

  useEffect(() => {
    setIsPass(emailvalid && passwordValid);
  }, [emailvalid, passwordValid]);

  return { emailRef, emailChangeHandler, passwordRef, passwordChangeHandler, isPass };
}
