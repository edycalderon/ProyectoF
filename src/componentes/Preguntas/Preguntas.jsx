import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Animatepregunta from '../Animatepreguntas/Animatepreguntas';

const HowWeDoIt = () => {
    const steps = [
        {
          title: "Consulta Inicial",
          description: "Escuchamos tus ideas y necesidades para crear una visión clara del proyecto.",
          icon: "bi-chat-dots"
        },
        {
          title: "Diseño y Planificación",
          description: "Creamos un diseño personalizado y planificamos cada detalle para un resultado perfecto.",
          icon: "bi-pencil-square"
        },
        {
          title: "Selección de Materiales",
          description: "Elegimos los mejores materiales y acabados para garantizar calidad y estilo.",
          icon: "bi-box-seam"
        },
        {
          title: "Construcción",
          description: "Nuestro equipo de expertos da vida al diseño cuidando cada detalle.",
          icon: "bi-hammer"
        },
        {
          title: "Entrega Final",
          description: "Realizamos una inspección final y te entregamos un espacio transformado y renovado.",
          icon: "bi-door-closed"
        }
      ];
      
  return (
    <Animatepregunta>
    <div className="container py-5">
      <h2 className="text-center text-white mb-5">¿Cómo lo hacemos?</h2>
      <div className="row">
        {steps.map((step, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100 text-center bg-dark text-white border-0">
              <div className="card-body">
                <div className="mb-4">
                  <i className={`bi ${step.icon}`} style={{ fontSize: '2.5rem', color: '#FFD700' }}></i>
                </div>
                <h5 className="card-title">{step.title}</h5>
                <p className="card-text">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Animatepregunta>
  );
}

export default HowWeDoIt;
