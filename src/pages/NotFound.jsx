import React from 'react';
import Layout from '../components/Layout/Layout';
import { ReactComponent as NotFoundIcon } from '../NotFoundIcon.svg';

function NotFound() {
  return (
    <Layout title="404 Not Found">
      <NotFoundIcon width="350px" height="400px" />
      <h1 className="font-bold text-2xl mb-10">페이지를 찾을 수 없습니다.</h1>
    </Layout>
  );
}

export default NotFound;
