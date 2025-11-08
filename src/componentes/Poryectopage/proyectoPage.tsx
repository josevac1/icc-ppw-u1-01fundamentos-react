import { useState } from "react";
import type { Proyecto } from "./interfaces/proyecto-interfaces"; 

export default function ProyectoPage() {    

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [proyectos, setProyectos] = useState<Proyecto[]>([
            {
                id:1, nombre: 'Proyecto A',
            descripcion: 'Descripcion del Proyecto A'
            },
            {
            id:2, nombre: 'Proyecto B',
            descripcion: 'Descripcion del Proyecto B'
            }
    ]); 

        const changeName = (value: string) => {
        setName(value);
    };

    const changeDesc = (value: string) => {
        setDescription(value);
    };

      const addProyecto = () => {
    const newProyecto: Proyecto = {
      id: proyectos.length + 1,
      nombre: name,
      descripcion: description
    };

    // ✅ Actualizar lista
    setProyectos(prev => [...prev, newProyecto]);

    // ✅ Limpiar inputs
    setName("");
    setDescription("");
  };


    return (
       <div>
      <h1>Proyecto</h1>

      <section>
        <div>
          <h3>Agregar Proyecto</h3>
          <h4>Proyecto Agregar: {name}</h4>

          <input
            type="text"
            placeholder="Nombre del Proyecto"
            value={name}
            onChange={(e) => changeName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Descripción del Proyecto"
            value={description}
            onChange={(e) => changeDesc(e.target.value)}
          />

          <button onClick={addProyecto}>
            Agregar Proyecto
          </button>
        </div>

        <div>
          <h3>Lista de Proyectos</h3>

          <ul>
            {proyectos.map((proyecto) => (
              <li key={proyecto.id}>
                <strong>{proyecto.nombre}</strong>: {proyecto.descripcion}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>

    );

}