import React from 'react';
import type { Proyecto } from '../../interfaces/proyecto-interfaces';


interface ListadoProps {
  listName: string;
  proyectos: Proyecto[];

}

const ListadoProyecto: React.FC<ListadoProps> = ({ 
  listName, 
  proyectos, 
   
}) => {
  return (
    <div>
      <h3>{listName}</h3>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
            {proyecto.nombre} - {proyecto.description}
            
          

          </li>
        ))}
        {proyectos.length === 0 && <p>No hay proyectos.</p>}
      </ul>
    </div>
  );
};

export default ListadoProyecto;