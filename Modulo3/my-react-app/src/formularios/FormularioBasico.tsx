import { useState } from 'react';

export default function FormularioBasico() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");


  const [lado, setLado] = useState("");
  const [apotema, setApotema] = useState("");
  const [area, setArea] = useState<number | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();


    const ladoNum = parseFloat(lado);
    const apotemaNum = apotema.trim() === "" ? NaN : parseFloat(apotema);

    if (isNaN(ladoNum) || ladoNum <= 0) {
      alert("Por favor ingresa un valor de lado válido (>0).");
      return;
    }

    let ap = apotemaNum;
    if (isNaN(ap) || ap <= 0) {
    
      ap = ladoNum / (2 * Math.tan(Math.PI / 5));
    }

    const areaCalc = (5 * ladoNum * ap) / 2; 
    setArea(areaCalc);

    alert(`Nombre: ${nombre}, Email: ${email}\nÁrea del pentágono: ${areaCalc.toFixed(2)} unidades²`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      /><br />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br />

      <hr />
      <h3>Área de un pentágono (regular)</h3>

      <input
        type="number"
        step="any"
        placeholder="Lado (ej.: 5)"
        value={lado}
        onChange={e => setLado(e.target.value)}
      /><br />

      <input
        type="number"
        step="any"
        placeholder="Apotema (opcional, ej.: 3.44)"
        value={apotema}
        onChange={e => setApotema(e.target.value)}
      /><br />

      <small>Si no proporcionas la apotema, se calculará automáticamente para un pentágono regular.</small><br />

      <button type="submit">Calcular</button>

      {area !== null && (
        <p style={{ marginTop: '8px' }}><strong>Resultado:</strong> {area.toFixed(2)} unidades²</p>
      )}
    </form>
  );
}