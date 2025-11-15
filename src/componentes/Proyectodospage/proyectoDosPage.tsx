import React from 'react'; 
import { useProyectoService } from './Service/ProyectoService';
import ListadoProyecto from '../Proyectopage/componentes/listado-componentes/listadoProyecto';
import AddProyectos from '../Proyectopage/componentes/addProyectos';
 
export const ProyectoDosPage: React.FC = () => {
 
 
  const { proyectos, addProyecto, removeProyecto } = useProyectoService();

  return (
    <div>
      
      <ListadoProyecto 
        listName="Listado de Proyectos (Global)"
        proyectos={proyectos} 
        onRemoveProyecto={removeProyecto} 
      />
      
      <AddProyectos 
        onAddProyecto={addProyecto} 
        onRemoveProyecto={removeProyecto} // <-- ¡NUEVO!
      />

      
    </div>
  );
};

// ¡Asegúrate de tener el export default si App.tsx lo espera!
export default ProyectoDosPage;