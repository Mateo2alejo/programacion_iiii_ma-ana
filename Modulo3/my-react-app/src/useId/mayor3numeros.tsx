import { useId, useState } from 'react';

export default function Mayor3Numeros() {
  const num1Id = useId();
  const num2Id = useId();
  const num3Id = useId();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [mayor, setMayor] = useState<number | null>(null);

  const calcularMayor = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);
    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      setMayor(Math.max(n1, n2, n3));
    } else {
      alert('Por favor, ingresa números válidos.');
    }
  };

  return (
    <div>
      <label htmlFor={num1Id}>Número 1:</label>
      <input id={num1Id} type="number" value={num1} onChange={e => setNum1(e.target.value)} />

      <label htmlFor={num2Id}>Número 2:</label>
      <input id={num2Id} type="number" value={num2} onChange={e => setNum2(e.target.value)} />

      <label htmlFor={num3Id}>Número 3:</label>
      <input id={num3Id} type="number" value={num3} onChange={e => setNum3(e.target.value)} />

      <button onClick={calcularMayor}>Calcular Mayor</button>
      {mayor !== null && <p>El mayor es: {mayor}</p>}
    </div>
  );
}