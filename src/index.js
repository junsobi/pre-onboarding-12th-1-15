import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ProtectedRouter } from './router/ProtectedRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Main /> },
      {
        path: '/todo',
        element: (
          <ProtectedRouter>
            <Todo />
          </ProtectedRouter>
        ),
      },
      {
        path: '/signup',
        element: (
          <ProtectedRouter>
            <SignUp />
          </ProtectedRouter>
        ),
      },
      {
        path: '/signin',
        element: (
          <ProtectedRouter>
            <SignIn />
          </ProtectedRouter>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
