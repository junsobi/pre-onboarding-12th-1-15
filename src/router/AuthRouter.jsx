import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRouter = () => {
  const token = localStorage.getItem('access_token');
  return token ? <Navigate to="/todo" /> : <Outlet />;
};

export default AuthRouter;
