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
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';

// | Import Clerk Providder
import { ClerkProvider } from '@clerk/clerk-react';

// | Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

// ` Configure Router
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
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
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
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
