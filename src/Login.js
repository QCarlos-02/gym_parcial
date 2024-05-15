import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';




function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí debes realizar la lógica para verificar las credenciales
    // Por ejemplo, verificar si las credenciales son correctas
    const isAuthenticated = true; // Suponiendo que la autenticación fue exitosa
    if (isAuthenticated) {
      history.push('/menu'); // Redireccionar al menú después de la autenticación
    } else {
      // Manejar el caso en el que las credenciales son incorrectas
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
