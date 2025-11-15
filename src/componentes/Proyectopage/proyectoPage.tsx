import React, { useState } from 'react';


import  type { Proyecto } from './interfaces/proyecto-interfaces';
import ListadoProyecto from './componentes/listado-componentes/listadoProyecto';



const ProyectoPage: React.FC = () => {
  
 
  const [name, setName] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [proyectos, setProyectos] = useState<Proyecto[]>([
    { id: 1, nombre: 'Proyecto A (Local)', description: 'descipcion' }
  ]);

  
  const handleAddProyecto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      nombre: name,
      description: descripcion,
    };
    
   
    setProyectos(currentProyectos => [...currentProyectos, newProyecto]);

    setName('');
    setDescripcion('');
  };

  const handleRemoveProyecto = (id: number) => {
    setProyectos(currentProyectos =>
      currentProyectos.filter(p => p.id !== id)
    );
  };

  
  return (
    <div>
      <h1>Proyecto (Estado Local)</h1>
      <section>
        
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

      
        <ListadoProyecto
          listName="Lista Proyecto (Componente Hijo)"
          proyectos={proyectos}
          onRemoveProyecto={handleRemoveProyecto} 
        />
      </section>
    </div>
  );
};


export default ProyectoPage;