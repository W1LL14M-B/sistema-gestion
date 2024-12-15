import { Route, Routes } from "react-router"
import SistemaApp from "../SistemaApp"
import VisualProduct from "../components/VisualProduct"

const AppRouter = () => {
    <Routes>
    <Route path="/" element={<SistemaApp />} />
    <Route path="/visualproduct" element={<VisualProduct />} />
  </Routes>
}

export default AppRouter