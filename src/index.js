import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import SistemApp from './components/SistemaApp';
//import AppWithProvider from './contex/AppWithProvider';
import { ProductProvider } from './hooks/ProductContex';
import GestionApp from './GestionApp';
import { BrowserRouter } from 'react-router';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
      <GestionApp />
      </BrowserRouter> 
    </ProductProvider>

  </React.StrictMode>
);

