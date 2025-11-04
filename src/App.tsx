import HomePage from './componentes/homePage';
import PerfilHome from './componentes/perfilHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <h1>Mi Aplicación</h1>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/perfil" element={<PerfilHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;