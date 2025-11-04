import { useState, useEffect } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [autoCount, setAutoCount] = useState(0);




  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 


   // funciones que afectan a ambos
  const handleSumar = () => {
    setCount(count + 1);
    setAutoCount(autoCount + 1);
  };

  const handleRestar = () => {
    setCount(count - 1);
    setAutoCount(autoCount - 1);
  };

  const handleReset = () => {
    setCount(0);
    setAutoCount(0);
  };
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Contador: {count}</h2>
      <h2>Contador Automático: {autoCount}</h2>
        <button onClick={handleSumar}>Suma</button>
        <button onClick={handleRestar}>Resta</button>
        <button onClick={handleReset}>Reiniciar</button>
    </div>



    );
} 