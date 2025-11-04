import { useState } from "react";

export default function PerfilHome() {
  // Señales iniciales
  const [name, setName] = useState<string>('Juan');
  const [lastName, setLastName] = useState<string>('Pérez');
  const [age, setAge] = useState<number>(30);

  // Método: obtener nombre completo
  const getFullName = () => {
    return `${name} ${lastName} con edad ${age} años`;
  };

  // Método: cambiar datos
  const changeData = () => {
    setName('Ana');
    setLastName('Gonzales');
    setAge(25);
  };

  // Método: resetear los datos
  const resetData = () => {
    setName('Juan');
    setLastName('Pérez');
    setAge(30);
  };

  // Método: cambiar edad a 18
  const changeAge = () => {
    setAge(18);
  };

  return (
    <div>
      <h2>Perfil</h2>

      {/* Mostrar nombre y apellido juntos en mayúsculas */}
      <p><strong>{`${name} ${lastName}`.toUpperCase()}</strong></p>

      {/* Mostrar el método getFullName */}
      <p>{getFullName()}</p>

      <button onClick={changeData}>Cambiar Datos</button>
      <button onClick={resetData}>Resetear Datos</button>
      <button onClick={changeAge}>Cambiar Edad a 18</button>
    </div>
  );
}
