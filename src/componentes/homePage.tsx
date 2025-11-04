import { useState } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Contador: {count}</h2>

      <button onClick={() => setCount(count + 1)}>suma</button>
      <button onClick={() => setCount(count - 1)}>resta</button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
    );
} 