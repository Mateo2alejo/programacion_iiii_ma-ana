import React, { useState } from "react";

export default function LabTwForm() {
  const [email, setEmail] = useState("");
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState<number | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Correo enviado: ${email}`);
    setEmail("");
  };

  const calculateArea = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const b = parseFloat(base);
    const h = parseFloat(height);
    if (Number.isNaN(b) || Number.isNaN(h) || b <= 0 || h <= 0) {
      setArea(null);
      alert("Ingrese base y altura válidas (> 0).");
      return;
    }
    setArea((b * h) / 2);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-extrabold">LAB: Formulario</h2>

        <form onSubmit={submit} className="mt-5 max-w-xl space-y-3">
          <label className="block text-sm font-semibold text-white/80">Correo</label>

          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
            type="email"
            placeholder="correo@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="h-11 rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition" type="submit">
            Enviar
          </button>

          <hr className="border-white/10 my-4" />

          <h3 className="text-lg font-bold">Calculadora: Área de un triángulo</h3>

          <label className="block text-sm font-semibold text-white/80">Base</label>
          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-blue-600/50"
            type="number"
            placeholder="Base (ej. 10)"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            min="0"
            step="any"
          />

          <label className="block text-sm font-semibold text-white/80">Altura</label>
          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:ring-2 focus:ring-blue-600/50"
            type="number"
            placeholder="Altura (ej. 5)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="0"
            step="any"
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={calculateArea}
              className="h-11 rounded-xl bg-green-600 px-5 font-semibold hover:bg-green-500 transition"
            >
              Calcular área
            </button>

            <button
              type="button"
              onClick={() => { setBase(""); setHeight(""); setArea(null); }}
              className="h-11 rounded-xl bg-gray-700 px-5 font-semibold hover:bg-gray-600 transition"
            >
              Limpiar
            </button>
          </div>

          {area !== null && (
            <div className="mt-3 rounded-md bg-white/5 px-4 py-3">
              <strong>Área:</strong> {area.toFixed(2)}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}