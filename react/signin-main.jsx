import React from 'react';
import { createRoot } from 'react-dom/client';
import '../js/main.js';
import SignIn from './SignIn';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><SignIn /></React.StrictMode>
);
