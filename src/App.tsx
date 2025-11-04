import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componentes/homePage";
import PerfilHome from "./componentes/perfilHome";

function App() {
  return (
    <BrowserRouter basename="/icc-ppw-u1-01fundamentos-react">
      <h1>Mi Aplicación</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<PerfilHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
