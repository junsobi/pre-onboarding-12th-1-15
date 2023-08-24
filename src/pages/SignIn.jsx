import React from 'react';
import SignInForm from '../components/Auth/SignInForm';
import Layout from '../components/Layout/Layout';

function SignIn() {
  return (
    <main>
      <Layout title="로그인" showReturnButton={true}>
        <SignInForm />
      </Layout>
    </main>
  );
}

export default SignIn;
