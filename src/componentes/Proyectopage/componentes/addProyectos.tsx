import { useState } from 'react';
import type { Proyecto } from '../interfaces/proyecto-interfaces';
 
interface AddProyectoProps {
  onAddProyecto: (newProyectoData: Omit<Proyecto, 'id'>) => void;
  onRemoveProyecto: () => void; // ❗ OJO: ya no recibe id aquí
}

const AddProyecto: React.FC<AddProyectoProps> = ({ 
  onAddProyecto, 
  onRemoveProyecto 
}) => {

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

      <div style={{ marginTop: '10px' }}>
        <button type="submit">Agregar</button>

        <button 
          type="button" 
          onClick={onRemoveProyecto}  
          style={{ marginLeft: '8px' }} 
        >
          Eliminar
        </button>
      </div>

    </form>
  );
};

export default AddProyecto;
