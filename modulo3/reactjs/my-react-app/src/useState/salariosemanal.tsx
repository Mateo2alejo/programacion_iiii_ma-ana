import { useState, type FormEvent, type ChangeEvent } from 'react';
import './salariosemanal';

export default function SalarioSemanal() {
  const [horas, setHoras] = useState<number>(0);
  const [valorHora, setValorHora] = useState<number>(0);
  const [salario, setSalario] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const s = Number((horas * valorHora).toFixed(2));
    setSalario(s);
  };

  const handleHoras = (e: ChangeEvent<HTMLInputElement>) => {
    setHoras(Math.max(0, Number(e.target.value)));
  };

  const handleValorHora = (e: ChangeEvent<HTMLInputElement>) => {
    setValorHora(Math.max(0, Number(e.target.value)));
  };

  const formato = (n: number) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' }).format(n);

  return (
    <form className="salario-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label htmlFor="horas">Horas trabajadas</label>
        <input
          id="horas"
          type="number"
          placeholder="Horas"
          min="0"
          step="0.1"
          value={horas}
          onChange={handleHoras}
        />
      </div>

      <div className="field-row">
        <label htmlFor="valorHora">Valor por hora</label>
        <input
          id="valorHora"
          type="number"
          placeholder="Valor por hora"
          min="0"
          step="0.01"
          value={valorHora}
          onChange={handleValorHora}
        />
      </div>

      <button type="submit" className="btn">Calcular</button>

      {salario !== null && (
        <p className="result">Salario semanal: {formato(salario)}</p>
      )}
    </form>
  );
}