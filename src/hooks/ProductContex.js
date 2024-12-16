import React, { createContext, useState, useContext, useEffect } from "react";


const ProductContext = createContext();

/* const defaultProducts = [
  { id: 1, name: "Producto A", date: "2024-12-01", price: 25.99 },
  { id: 2, name: "Producto B", date: "2024-12-05", price: 15.75 },
];
 */

export const ProductProvider = ({ children }) => {


 const [products, setProducts] = useState(() => {
   
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });


    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
      }, [products]);


  const addProduct = (product) => {
    setProducts([...products, product]);
  }; 

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  }; 



  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
