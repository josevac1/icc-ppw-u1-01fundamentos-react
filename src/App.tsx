import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componentes/homePage";
import PerfilHome from "./componentes/perfilHome";
import ProyectoPage from "./componentes/Proyectopage/proyectoPage";
import ProyectoDosPage from "./componentes/Proyectodospage/proyectoDosPage";
import NavBar from  "./componentes/share/componet/nav-bar/nav_bar";
import { ProyectoServiceProvider } from "./componentes/Proyectodospage/Service/ProyectoService";
import FormulariosRouters from "./Formularios/FormularioRouters";


function App() {
  return (
    <BrowserRouter basename="/icc-ppw-u1-01fundamentos-react">

    <h1>Mi Aplicación</h1>
      <NavBar />
      <ProyectoServiceProvider>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<PerfilHome />} />
        <Route path="/page" element={<ProyectoPage />} />
        <Route path="/dospage" element={<ProyectoDosPage />} />

         <Route path="/formulario/*" element={<FormulariosRouters />} />

        <Route path="*" element={<FormulariosRouters />} />
      </Routes>
      </ProyectoServiceProvider>
    </BrowserRouter>
  );
}

export default App;
