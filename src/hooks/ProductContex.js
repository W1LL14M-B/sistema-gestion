import React, { createContext, useState, useContext, useEffect } from "react";

// Crea el contexto
const ProductContext = createContext();

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
 /*  const [products, setProducts] = useState([]); */

 const [products, setProducts] = useState(() => {
    // Carga los productos de localStorage al iniciar
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });


    // Guarda los productos en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
      }, [products]);


  const addProduct = (product) => {
    setProducts([...products, product]);
  }; 


  // Función para eliminar un producto
  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  }; 



  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useProducts = () => {
  return useContext(ProductContext);
};
