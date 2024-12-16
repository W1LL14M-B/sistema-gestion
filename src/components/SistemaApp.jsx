import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from "react";
import { useNavigate } from "react-router";

import {
  IonApp,
  IonContent,
  IonCard,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCardContent,
  IonList,
  IonItem,
} from "@ionic/react";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { useProducts } from "../hooks/ProductContex";





const SistemaApp = () => {
  const {products,  addProduct, removeProduct } = useProducts();
  const [newProduct, setNewProduct] = useState({
    name:"",
    date:"",
    price:"",

});

  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };



  const handleAddProduct = () => {
    if (newProduct.name.trim() && newProduct.date.trim() && newProduct.price.trim()) {
      addProduct({ id: Date.now(), ...newProduct });
      setNewProduct({ name: "", date: "", price: "" }); // Limpiar los campos después de agregar el producto
    }
  };

  


  return (
    <IonApp>
      <IonContent className="ion-padding">
        <IonCard>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Sistema de Gestión</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCardContent>
        

<input
              type="text"
              className="form-control mb-3 w-50"
              placeholder="Nombre del producto"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
    
            <input
              type="date"
              className="form-control mb-3 w-50"
              value={newProduct.date}
              onChange={(e) => setNewProduct({ ...newProduct, date: e.target.value })}
            />
      
            <input
              type="number"
              className="form-control mb-3 w-50"
              placeholder="Precio del producto"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
          
            <button
              onClick={handleAddProduct}
              className="btn btn-success btn-sm"
            >
              Agregar Producto
            </button>


            <IonList className="product-container d-flex align-items-center">
            
              {products.map((product) => (
                 <IonItem key={product.id} className="d-flex justify-content-between align-items-center">
    
           <span>{product.name} - {product.date} - ${product.price}</span>
              
                   <button
                    className="btn btn-danger btn-sm"
                    slot="end"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button> 
                </IonItem>
              ))} 
            </IonList>
        <button  className="btn btn-primary mt-3" onClick={handleGoBack} >regresar</button>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default SistemaApp; 
