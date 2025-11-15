import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Proyecto } from '../../Proyectopage/interfaces/proyecto-interfaces';



interface ProyectosContextType {
  proyectos: Proyecto[];
  addProyecto: (newProyectoData: Omit<Proyecto, 'id'>) => void;
  removeProyecto: (id: number) => void;
}

const ProyectosContext = createContext<ProyectosContextType | undefined>(undefined);



const STORAGE_KEY = 'proyectosApp';

const loadProyectos = (): Proyecto[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [{
    id: 1, nombre: 'Proyecto A (Global)', description: 'descipcion'
  }];
};


export const ProyectoServiceProvider = ({ children }: { children: ReactNode }) => {
  
  const [proyectos, setProyectos] = useState<Proyecto[]>(loadProyectos);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(proyectos));
  }, [proyectos]);

  const addProyecto = (newProyectoData: Omit<Proyecto, 'id'>) => {
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      ...newProyectoData
    };
    setProyectos(currentProyectos => [...currentProyectos, newProyecto]);
  };

  const removeProyecto = (id: number) => {
    setProyectos(currentProyectos => 
      currentProyectos.filter(p => p.id !== id)
    );
  };

  const value = { proyectos, addProyecto, removeProyecto };

  return (
    <ProyectosContext.Provider value={value}>
      {children}
    </ProyectosContext.Provider>
  );
};


export const useProyectoService = () => {
  const context = useContext(ProyectosContext);
  if (!context) {
    throw new Error('useProyectoService debe ser usado dentro de un ProyectoServiceProvider');
  }
  return context;
};