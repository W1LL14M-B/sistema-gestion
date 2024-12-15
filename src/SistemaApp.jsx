import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from "react";

import {
  IonApp,
  IonContent,
  IonCard,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
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
import { useProducts } from "./hooks/ProductContex";
import { useNavigate } from "react-router";



const SistemaApp = () => {
  const {products,  addProduct, removeProduct } = useProducts();
  const [newProduct, setNewProduct] = useState("");

/*   const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/visualproduct'); // Asegúrate de que esta ruta coincida con la definida en tu archivo de rutas
  };
 */

  const handleAddProduct = () => {
    if (newProduct.trim()) {
      addProduct({ id: Date.now(), name: newProduct });
      setNewProduct(""); 
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
              placeholder="Agregar producto"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
            />
          
            <button
              onClick={handleAddProduct}
              className="btn btn-success btn-sm"
            >
              Agregar Producto
            </button>
            <IonList>
            
              {products.map((product) => (
                 <IonItem key={product.id} className="d-flex justify-content-between align-items-center">
                <span>{product.name}</span>
              
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
          {/*   <IonButton onClick={handleNavigate}>Deseados</IonButton> */}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default SistemaApp;
