import React from 'react';
import NotAuthenticated from '../components/Main/NotAuthenticated';
import Authenticated from '../components/Main/Authenticated';
import Layout from '../components/Layout/Layout';
import TodoProvider from '../lib/contexts/TodoContext';

function Main() {
  const token = localStorage.getItem('access_token');
  return (
    <TodoProvider>
      <Layout title="Todo APP" showButton="logout">
        {!token ? <NotAuthenticated /> : <Authenticated />}
      </Layout>
    </TodoProvider>
  );
}

export default Main;
