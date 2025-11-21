import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

export const FormularioDinamico = () => {
  const [newLenguaje, setNewLenguaje] = useState('');
  
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      lenguajes: [{ name: 'Python' }, { name: 'Java' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "lenguajes",
    rules: {
      minLength: 3 
    }
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
    alert("Guardado correctamente");
  };

  const onAddToLenguajes = () => {
    if (newLenguaje.trim().length < 3) return;
    append({ name: newLenguaje });
    setNewLenguaje('');
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAddToLenguajes();
    }
  };

  return (
    <div>
      <h2>Formularios: <small>Dinámicos</small></h2>
      
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Nombre</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              placeholder="Nombre del proyecto"
              {...register('name', { 
                required: 'Este campo es requerido', 
                minLength: { value: 3, message: 'Mínimo 3 caracteres' } 
              })}
            />
            {errors.name && (
              <span className="form-text text-danger">{errors.name.message}</span>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Agregar</label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                className="form-control"
                placeholder="Agregar lenguaje"
                value={newLenguaje}
                onChange={(e) => setNewLenguaje(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={onAddToLenguajes}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Lenguajes</label>
          <div className="col-sm-9">
            {fields.map((item, index) => (
              <div key={item.id}>
                <div className="input-group mb-2">
                  <input 
                    className="form-control" 
                    {...register(`lenguajes.${index}.name`, { required: true })}
                  />
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Eliminar
                  </button>
                </div>
                {errors.lenguajes?.[index]?.name && (
                   <span className="form-text text-danger">Campo requerido</span>
                )}
              </div>
            ))}

            {errors.lenguajes && (errors.lenguajes.root || errors.lenguajes.type === "minLength") && (
               <span className="form-text text-danger">Debe tener mínimo 3 lenguajes</span>
            )}
          </div>
        </div>
        
        <div className="row">
            <div className="col">
                 <button type="submit" className="btn btn-primary float-end">Guardar</button>
            </div>
        </div>

      </form>
    </div>
  );
};