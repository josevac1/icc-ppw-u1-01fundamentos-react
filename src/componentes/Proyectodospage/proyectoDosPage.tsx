import React from 'react'; // <-- ¡IMPORTANTE! Asegúrate de importar React
import { useProyectoService } from './Service/ProyectoService';
import ListadoProyecto from '../Proyectopage/componentes/listado-componentes/listadoProyecto';
import AddProyectos from '../Proyectopage/componentes/addProyectos';
 
export const ProyectoDosPage: React.FC = () => {
 
  // 1. Obtenemos las funciones (esto ya estaba bien)
  const { proyectos, addProyecto, removeProyecto } = useProyectoService();

  return (
    <div>
      {/* 2. Pasa la función REAL de 'removeProyecto' al listado */}
      <ListadoProyecto 
        listName="Listado de Proyectos (Global)"
        proyectos={proyectos} 
        onRemoveProyecto={removeProyecto} 
      />
      
      {/* 3. Pasa AMBAS funciones al componente 'AddProyectos' */}
      <AddProyectos 
        onAddProyecto={addProyecto} 
        onRemoveProyecto={removeProyecto} 
      />

      {/* 4. ¡ELIMINA EL BOTÓN QUE ESTABA AQUÍ! */}
      {/* <button onClick={() => removeProyecto(1)}>Eliminar</button>  <-- BORRAR */}
    </div>
  );
};

// ¡Asegúrate de tener el export default si App.tsx lo espera!
export default ProyectoDosPage;