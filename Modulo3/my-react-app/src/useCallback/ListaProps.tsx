import { useCallback } from 'react';

interface ListaProps {
  numeros: number[];
}

export default function ListaProps({ numeros }: ListaProps) {
  const mostrarResultado = useCallback((numero: number) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }, []);

  return (
    <ul>
      {numeros.map(numero => (
        <li key={numero}>
          <button onClick={() => mostrarResultado(numero)}>
            Tabla del {numero}
          </button>
        </li>
      ))}
    </ul>
  );
}
