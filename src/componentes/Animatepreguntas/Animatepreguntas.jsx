import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Animatepregunta.css'; // Para los estilos de animación

const Animatepregunta = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Cuánto del elemento debe estar en la vista para activar la animación
    triggerOnce: true // Si quieres que se active solo una vez
  });

  return (
    <div ref={ref} className={`animated ${inView ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
};

export default Animatepregunta;
