import "./HeroSection.css"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="hero-title">Bienvenido a Mi Página</h1>
        <p className="hero-text">Este es un ejemplo de una sección de inicio con una imagen de fondo</p>
        <button className="btn btn-primary hero-button">Ver más</button>
      </div>
    </div>
  );
}

export default HeroSection;
