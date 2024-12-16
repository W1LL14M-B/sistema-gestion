import React from "react";
import { useProducts } from "../hooks/ProductContex";
import { useNavigate } from "react-router";
import { useState, useMemo} from "react";


const VisualProduct = () => {
  const { products } = useProducts();
  const [sortCriteria, setSortCriteria] = useState("name"); 

  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 


  };


     const sortedProducts = () => {
      if (sortCriteria === "name") {
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sortCriteria === "date") {
        return [...products].sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      if (sortCriteria === "price") {
        return [...products].sort((a, b) => a.price - b.price);
      }
      return products;
    }; 


  return (
    <div className="container">
      <h2>Productos Deseados</h2>


     <div className="mb-3">
        <label htmlFor="sortCriteria" className="form-label">
          Ordenar por:
        </label>
        <select
          id="sortCriteria"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="form-select"
        >
          <option value="name">Nombre</option>
          <option value="date">Fecha Agregada</option>
          <option value="price">Precio</option>
        </select>
      </div>
      <ul className="list-group">
        {sortedProducts().length === 0 ? (
          <li className="list-group-item">No hay productos deseados</li>
        ) : (
          sortedProducts().map((product) => (
            <li key={product.id} className="list-group-item">
              {product.name} - ${product.price} - {product.date}
            </li>
          ))
        )}
      </ul>




          <button
        onClick={handleGoBack}
        className="btn btn-secondary mt-3"
      >
        Regresar
      </button>
    </div>
  );
};

export default VisualProduct;
