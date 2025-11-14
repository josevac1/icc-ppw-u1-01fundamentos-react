// src/components/ListadoProyecto.tsx
import React from 'react';
import type { Proyecto } from '../../interfaces/proyecto-interfaces';

// Definimos los Props (reemplaza a @input)
interface ListadoProps {
  listName: string;
  proyectos: Proyecto[];
  // Agregamos un "output" para eliminar, ya que es más lógico
  onRemoveProyecto: (id: number) => void;
}

// Recibimos los props
const ListadoProyecto: React.FC<ListadoProps> = ({ listName, proyectos }) => {
  return (
    <div>
      <h3>{listName}</h3>
      <ul>
        {/* Reemplazamos @for con .map() */}
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