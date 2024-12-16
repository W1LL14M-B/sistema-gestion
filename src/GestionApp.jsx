import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SistemaApp from './components/SistemaApp';
import VisualProduct from './components/VisualProduct';

const GestionApp = () => {
  return (
    <div>
 
      <nav>
        <ul>
          <li>
            <Link to="/sistema">Sistema</Link>
          </li>
          <li>
            <Link to="/visual">Productos</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/sistema" element={<SistemaApp />} />
        <Route path="/visual" element={<VisualProduct />} />
      </Routes>
    </div>
  );
};

export default GestionApp;
