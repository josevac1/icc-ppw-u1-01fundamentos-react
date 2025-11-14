// src/components/AddProyecto.tsx
import React, { useState } from 'react';
import type { Proyecto } from '../interfaces/proyecto-interfaces';
 

// 1. AÑADE 'onRemoveProyecto' A LA INTERFAZ
interface AddProyectoProps {
  onAddProyecto: (newProyectoData: Omit<Proyecto, 'id'>) => void;
  onRemoveProyecto: (id: number) => void; // <-- ¡NUEVO!
}

// 2. RECIBE LA FUNCIÓN EN LOS PROPS
const AddProyecto: React.FC<AddProyectoProps> = ({ 
  onAddProyecto, 
  onRemoveProyecto // <-- ¡NUEVO!
}) => {
  
  // (El resto de tu código de useState y handleSubmit no cambia)
  const [name, setName] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddProyecto({
      nombre: name,
      description: descripcion,
    });
    setName('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Agregar proyecto (Componente)</h4>
      {/* (Tus inputs no cambian) */}
      <input
        type="text"
        placeholder="Nombre del proyecto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción del proyecto"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      {/* 3. ¡PONE LOS BOTONES JUNTOS! */}
      <div>
        <button type="submit">Agregar</button>

        {/* ¡AQUÍ ESTÁ TU BOTÓN! */}
        <button 
          type="button" // <-- 'type="button"' es IMPORTANTE para que no envíe el formulario
          onClick={() => onRemoveProyecto(1)} // Llama al prop (ej: elimina el ID 1)
          style={{ marginLeft: '8px' }} // Estilo para separarlos
        >
          Eliminar Primer Proyecto
        </button>
      </div>

    </form>
  );
};

export default AddProyecto;