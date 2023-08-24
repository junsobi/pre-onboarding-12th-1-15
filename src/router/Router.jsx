import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Todo from '../pages/Todo';
import AuthRouter from './AuthRouter';
import ProtectRouter from './ProtectRouter';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route element={<AuthRouter />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<ProtectRouter />}>
        <Route path="/todo" element={<Todo />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
