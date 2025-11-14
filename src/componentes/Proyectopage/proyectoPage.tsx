import React, { useState } from 'react';

// Importamos la interfaz desde tu carpeta de interfaces
import  type { Proyecto } from './interfaces/proyecto-interfaces';

// Importamos el componente hijo (¡asegúrate de que use 'export default'!)
import ListadoProyecto from './componentes/listado-componentes/listadoProyecto';



const ProyectoPage: React.FC = () => {
  
  // 1. ESTADO LOCAL (reemplaza a 'signal')
  const [name, setName] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [proyectos, setProyectos] = useState<Proyecto[]>([
    { id: 1, nombre: 'Proyecto A (Local)', description: 'descipcion' }
  ]);

  // 2. FUNCIÓN 'ADD' LOCAL
  const handleAddProyecto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      nombre: name,
      description: descripcion,
    };
    
    // Actualiza el estado local
    setProyectos(currentProyectos => [...currentProyectos, newProyecto]);

    setName('');
    setDescripcion('');
  };

  // 3. FUNCIÓN 'REMOVE' LOCAL
  // Esta función modifica el 'useState' de ESTE componente
  const handleRemoveProyecto = (id: number) => {
    setProyectos(currentProyectos =>
      currentProyectos.filter(p => p.id !== id)
    );
  };

  // 4. EL TEMPLATE (JSX)
  return (
    <div>
      <h1>Proyecto (Estado Local)</h1>
      <section>
        {/* --- Formulario de 'AddProyecto' --- */}
        <form onSubmit={handleAddProyecto}>
          <h3>Agregar proyecto</h3>
          <h4>Proyecto Agregar: {name}</h4> 
          <input
            type="text"
            placeholder="Nombre del proyecto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="descripcion del proyecto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <button type="submit">Agregar Proyecto</button>
        </form>

        <hr />

        {/* --- Listado Interno (El que usa .map) --- */}
        <div>
          <h3>Listado Interno</h3>
          <ul>
            {proyectos.map((proyecto) => (
              <li key={proyecto.id}>
                {proyecto.nombre} - {proyecto.description}
                
            
              </li>
            ))}
          </ul>
        </div>

        <hr />

        {/* --- Componente Hijo (ListadoProyecto) --- */}
        {/* Le pasamos las props del estado local */}
        <ListadoProyecto
          listName="Lista Proyecto (Componente Hijo)"
          proyectos={proyectos}
          onRemoveProyecto={handleRemoveProyecto} // <-- Pasa la función local
        />
      </section>
    </div>
  );
};

// ¡No olvides exportarlo!
export default ProyectoPage;