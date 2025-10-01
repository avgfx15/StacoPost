import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './Pages/HomePage.jsx';
import AllPostsPage from './Pages/AllPostsPage.jsx';
import WritePage from './Pages/WritePage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SinglePostPage from './Pages/SinglePostPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import MainLayout from './LayOuts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/posts',
        element: <AllPostsPage />,
      },
      {
        path: '/:postId',
        element: <SinglePostPage />,
      },
      {
        path: '/write',
        element: <WritePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
