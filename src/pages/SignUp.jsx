import React from 'react';
import SignUpForm from '../components/Auth/SignUpForm';
import Layout from '../components/Layout/Layout';

function SignUp() {
  return (
    <Layout title="회원가입" showReturnButton={true}>
      <SignUpForm />
    </Layout>
  );
}

export default SignUp;
