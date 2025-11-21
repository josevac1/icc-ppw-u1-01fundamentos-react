import { useForm } from "react-hook-form";

interface FormData {
  nombre: string;
  edad: number;
  correo: string;
}

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset
  } = useForm<FormData>({
    defaultValues: {
      nombre: "",
      edad: 0,
      correo: ""
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("Datos del formulario:", data);
    alert("Formulario válido. Datos enviados correctamente.");
    reset();
  };

  return (
    <div className="row">
      <div className="col">
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          
          {/* Campo Nombre */}
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Nombre</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del usuario"
                {...register("nombre", {
                  required: "Este campo es requerido",
                  minLength: { value: 3, message: "Mínimo de 3 caracteres" }
                })}
              />

              {errors.nombre && touchedFields.nombre && (
                <p className="text-danger">{errors.nombre.message}</p>
              )}
            </div>
          </div>

          {/* Campo Edad */}
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Edad</label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                placeholder="Edad del usuario"
                {...register("edad", {
                  required: "Este campo es requerido",
                  min: { value: 1, message: "Edad mínima 1" }
                })}
              />
              {errors.edad && touchedFields.edad && (
                <p className="text-danger">{errors.edad.message}</p>
              )}
            </div>
          </div>

          {/* Campo Correo */}
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Correo</label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                placeholder="correo@ejemplo.com"
                {...register("correo", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo no válido"
                  }
                })}
              />

              {errors.correo && touchedFields.correo && (
                <p className="text-danger">{errors.correo.message}</p>
              )}
            </div>
          </div>

          {/* Botón */}
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
