import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import App from './App';

// Create a router with future flags
const router = createBrowserRouter(
  [
    {
      path: '/*',
      element: <App />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </RouterProvider>
  </StrictMode>
);