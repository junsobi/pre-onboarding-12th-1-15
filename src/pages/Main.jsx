import React from 'react';
import NotAuthenticated from '../components/Main/NotAuthenticated';
import Authenticated from '../components/Main/Authenticated';
import Layout from '../components/Main/Layout';
import TodoProvider from '../lib/contexts/TodoContext';

function Main() {
  const token = localStorage.getItem('access_token');
  return (
    <TodoProvider>
      <Layout>{!token ? <NotAuthenticated /> : <Authenticated />}</Layout>
    </TodoProvider>
  );
}

export default Main;
