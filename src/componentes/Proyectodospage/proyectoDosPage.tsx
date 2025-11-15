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
        onRemoveProyecto={() => {
          if (proyectos.length > 0) {
            const lastId = proyectos[0].id;
            removeProyecto(lastId);
          }
        }}
      />

    </div>
  );
};

export default ProyectoDosPage;