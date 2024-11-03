import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MostradorimgI from '../MosradorimgI/MosradorimgI';

function Mostrador() {
  const images = [
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 1',
      description: 'Descripción breve de la imagen 1.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 2',
      description: 'Descripción breve de la imagen 2.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    {
      src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560', // Reemplaza con tus imágenes
      alt: 'Imagen 3',
      description: 'Descripción breve de la imagen 3.',
    },
    // Agrega más imágenes aquí
  ];

  return (
    <MostradorimgI>
    <Container className="py-5">
      <Row className="justify-content-center">
        {images.map((image, index) => (
          <Col md={4} key={index}> {/* Ajusta el ancho de la columna (md={4} = 3 columnas) */}
            <Card className="h-100">
              <Card.Img variant="top" src={image.src} alt={image.alt} />
              <Card.Body className="text-center">
                <Card.Text>{image.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </MostradorimgI>
  );
}

export default Mostrador;