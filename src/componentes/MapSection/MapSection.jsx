import React from 'react';
import { Container } from 'react-bootstrap';
import "./MapSection"

const MapSection = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center">Nuestra Ubicación</h3>
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.217900604668!2d-91.8577839133778!3d14.495911025647334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e580a235d8b7b%3A0xdc8eb2f7300b9a56!2sCaballo%20Blanco!5e0!3m2!1ses-419!2sgt!4v1730662234367!5m2!1ses-419!2sgt"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </Container>
  );
};

export default MapSection;
