import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Eliminado Switch, ya que no se usa directamente aquí

import Menu from './Menu';
import Clases from './Clases';
import Entrenamiento from './Entrenamiento';
import Nutricion from './Nutricion';
import Contacto from './Contacto';
import Login from './Login';

function AppRoutes() {
  return (
    <Router>
      <Menu />
      <Routes>
      <Route path="/Login" element={<Login />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/entrenamiento" element={<Entrenamiento />} />
        <Route path="/nutricion" element={<Nutricion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
