import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
//import SistemaApp from './SistemaApp';
import AppWithProvider from './contex/AppWithProvider';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithProvider />
  </React.StrictMode>
);

