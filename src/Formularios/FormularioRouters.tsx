// src/Formularios/formularioMore/formularioRouters.tsx
import { Routes, Route } from "react-router-dom";
import { Formulario } from "./Page/formulario/formulario";
import { FormularioDinamico } from "./Page/formularioDinamico/formularioDinamico";
import FormularioMore from "./Page/fromularioMore/formularioMore";



export default function FormulariosRouters() {
  return (
    <Routes>
      <Route path="normal" element={<Formulario />} />
      <Route path="dinamico" element={<FormularioDinamico />} />
      <Route path="mas" element={<FormularioMore />} />
    </Routes>
  );
}
