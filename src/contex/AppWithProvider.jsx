import SistemaApp from "../SistemaApp";
import { ProductProvider } from "../hooks/ProductContex";

const AppWithProvider = () => (
    <ProductProvider>
      <SistemaApp />
    </ProductProvider>
  );
  
  export default AppWithProvider;