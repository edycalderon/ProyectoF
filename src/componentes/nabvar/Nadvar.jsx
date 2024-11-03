import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000' }}>
      <div className="container">
        {/* Logo de la empresa */}
        <a className="navbar-brand text-white" href="#">
          <i className="bi bi-house-door-fill"></i> Mi Empresa
        </a>

        {/* Botón de menú colapsable en pantallas pequeñas */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ borderColor: '#fff' }}
        >
          <span className="navbar-toggler-icon" style={{ color: '#fff' }}></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-house"></i> Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-info-circle"></i> Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-wrench"></i> Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-envelope"></i> Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
