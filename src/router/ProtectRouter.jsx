import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRouter = () => {
  const token = localStorage.getItem('access_token');
  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectRouter;
