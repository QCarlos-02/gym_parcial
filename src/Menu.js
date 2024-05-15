import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li> {/* Utilizar Link */}
        <li><Link to="/clases">Clases</Link></li> {/* Utilizar Link */}
        <li><Link to="/entrenamiento">Entrenamiento</Link></li> {/* Utilizar Link */}
        <li><Link to="/nutricion">Nutrición</Link></li> {/* Utilizar Link */}
        <li><Link to="/contacto">Contacto</Link></li> {/* Utilizar Link */}
      </ul>
    </div>
  );
}

export default Menu;
