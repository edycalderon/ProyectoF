import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TeamGallery = () => {
  // Puedes crear un archivo data.js para almacenar esta información o definirlo directamente en el componente.
const workers = [
  {
    name: "Juan Pérez",
    position: "Gerente de Proyecto",
    image: "https://t3.ftcdn.net/jpg/08/21/31/02/360_F_821310290_Bi4KKC57KkgFb56pf5AFGo9t2G5zVryU.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "María López",
    position: "Diseñadora",
    image: "https://t3.ftcdn.net/jpg/08/21/31/02/360_F_821310290_Bi4KKC57KkgFb56pf5AFGo9t2G5zVryU.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    name: "María López",
    position: "Diseñadora",
    image: "https://t3.ftcdn.net/jpg/08/21/31/02/360_F_821310290_Bi4KKC57KkgFb56pf5AFGo9t2G5zVryU.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  // Agrega más trabajadores aquí
];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-white">Nuestro Equipo</h2>
      <div className="row">
        {workers.map((worker, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card bg-dark text-white">
              <img src={worker.image} className="card-img-top" alt={worker.name} style={{ height: "300px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">{worker.name}</h5>
                <p className="card-text">{worker.position}</p>
                <div className="d-flex justify-content-center">
                  <a href={worker.social.linkedin} className="text-white mx-2">
                    <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                  <a href={worker.social.twitter} className="text-white mx-2">
                    <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                  <a href={worker.social.instagram} className="text-white mx-2">
                    <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamGallery;
