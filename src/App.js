import React from 'react';
// import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Router from './router/Router';

function App() {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Router />
    </>
  );
}

export default App;
