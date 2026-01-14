import { useState, useDeferredValue } from 'react';

export default function ValidacionEmail() {
  const [email, setEmail] = useState('');
  const emailDiferido = useDeferredValue(email);

  const [usuario, setUsuario] = useState('');
  const usuarioDiferido = useDeferredValue(usuario);

  const [password, setPassword] = useState('');
  const passwordDiferido = useDeferredValue(password);

  const emailValido = emailDiferido.includes('@') && emailDiferido.includes('.');
  const usuarioValido = usuarioDiferido.trim().length >= 3;
  const passwordValido = passwordDiferido.length >= 6;

  const [registrado, setRegistrado] = useState(false);

  const puedeRegistrar = emailValido && usuarioValido && passwordValido;

  const handleRegister = () => {
    if (puedeRegistrar) {
      setRegistrado(true);
    }
  };

  return (
    <>
      <input
        type="text"
        value={usuario}
        onChange={e => { setUsuario(e.target.value); setRegistrado(false); }}
        placeholder="Usuario"
      />
      <p style={{ color: usuario === '' ? 'gray' : usuarioValido ? 'lightgreen' : 'salmon' }}>
        {usuario === '' ? 'Esperando usuario...' : usuarioValido ? 'Usuario válido' : 'Usuario inválido'}
      </p>

      <input
        type="email"
        value={email}
        onChange={e => { setEmail(e.target.value); setRegistrado(false); }}
        placeholder="Tu correo electrónico"
      />
      <p style={{ color: email === '' ? 'gray' : emailValido ? 'lightgreen' : 'salmon' }}>
        {email === '' ? 'Esperando email...' : emailValido ? 'Email válido' : 'Email inválido'}
      </p>

      <input
        type="password"
        value={password}
        onChange={e => { setPassword(e.target.value); setRegistrado(false); }}
        placeholder="Contraseña (min 6 caracteres)"
      />
      <p style={{ color: password === '' ? 'gray' : passwordValido ? 'lightgreen' : 'salmon' }}>
        {password === '' ? 'Esperando contraseña...' : passwordValido ? 'Contraseña válida' : 'Contraseña inválida'}
      </p>

      <button onClick={handleRegister} disabled={!puedeRegistrar}>Registrarse</button>

      {registrado && <p style={{ color: 'green', fontWeight: 'bold' }}>Registro exitoso ✅</p>}
    </>
  );
}