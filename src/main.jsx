import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import App from './App';

// Create the root element
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);