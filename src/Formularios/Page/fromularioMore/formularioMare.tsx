import { useState } from "react";

export default function FormularioMore() {

  const [form, setForm] = useState({
    genero: "M",
    notificaciones: true,
    condiciones: false,
  });

  const [touched, setTouched] = useState({
    genero: false,
    condiciones: false,
  });


  const errors = {
    genero: !form.genero ? "Seleccione un género" : null,
    condiciones: !form.condiciones ? "Debe aceptar las condiciones" : null,
  };

  const isInvalid = (field: string) =>
    Boolean(errors[field as keyof typeof errors] && touched[field as keyof typeof touched]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      genero: true,
      condiciones: true,
    });

    if (errors.genero || errors.condiciones) return;

    alert("Datos enviados correctamente");
    console.log("Datos enviados:", form);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2>Formularios: <small>Switches y Opciones</small></h2>

      {/* Selección de género */}
      <div className="mb-3">
        <label className="form-label">Género</label>
        <div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="masculino"
              name="genero"
              value="M"
              checked={form.genero === "M"}
              onChange={(e) =>
                setForm({ ...form, genero: e.target.value })
              }
              onBlur={() =>
                setTouched({ ...touched, genero: true })
              }
            />
            <label className="form-check-label" htmlFor="masculino">
              Masculino
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              id="femenino"
              name="genero"
              value="F"
              checked={form.genero === "F"}
              onChange={(e) =>
                setForm({ ...form, genero: e.target.value })
              }
              onBlur={() =>
                setTouched({ ...touched, genero: true })
              }
            />
            <label className="form-check-label" htmlFor="femenino">
              Femenino
            </label>
          </div>
        </div>

        {isInvalid("genero") && (
          <p className="text-danger">{errors.genero}</p>
        )}
      </div>

      {/* Switch Notificaciones */}
      <div className="form-check form-switch mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="notificaciones"
          checked={form.notificaciones}
          onChange={(e) =>
            setForm({ ...form, notificaciones: e.target.checked })
          }
        />
        <label
          className="form-check-label"
          htmlFor="notificaciones"
        >
          Deseo recibir notificaciones
        </label>
      </div>

      {/* Aceptar condiciones */}
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="condiciones"
          checked={form.condiciones}
          onChange={(e) =>
            setForm({ ...form, condiciones: e.target.checked })
          }
          onBlur={() =>
            setTouched({ ...touched, condiciones: true })
          }
        />
        <label className="form-check-label" htmlFor="condiciones">
          Acepto los términos y condiciones
        </label>

        {isInvalid("condiciones") && (
          <p className="text-danger">{errors.condiciones}</p>
        )}
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </div>
    </form>
  );
}
