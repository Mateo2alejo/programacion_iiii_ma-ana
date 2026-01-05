import { useId } from 'react';

export default function mayor3numeros() {
  const num1 = useId();
  const num2 = useId();
  const num3 = useId();

  return (
    <form>
      <label htmlFor={num1}>Número 1:</label>
      <input id={num1} type="number" />

      <label htmlFor={num2}>Número 2:</label>
      <input id={num2} type="number" />

      <label htmlFor={num3}>Número 3:</label>
      <input id={num3} type="number" />

     <button type="submit">Calcular Mayor</button>
    </form>
  );
}
