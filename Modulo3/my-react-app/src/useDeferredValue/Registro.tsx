import { useDeferredValue, useState } from "react";

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setApellido] = useState('');
  const [mensaje, setMensaje] = useState('');

  const nombreDiferido = useDeferredValue(nombre);
  const emailDiferido = useDeferredValue(email);
  const passwordDiferida = useDeferredValue(password);
  const apellidoDiferido = useDeferredValue(apellido);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensaje('Registro exitoso!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
        <input type="text" value={apellido} onChange={e => setApellido(e.target.value)} placeholder="Apellido" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
        <button type="submit">Enviar</button>
      </form>
      
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}