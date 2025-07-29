// src/main.jsx

import React from 'react'; // Necesitas React para <React.StrictMode>
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // CORRECTO: Solo se importa BrowserRouter

import App from './App.jsx';
import './index.css';

// Obtenemos el elemento root
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Renderizamos la aplicación
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);