import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import AnimatedComponent from '../ AnimatedComponent/ AnimatedComponent';


function Carrusel() {
  

  return (
    <AnimatedComponent>
    <Container>
      <Row className="align-items-center">
        <Col md={8}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/foto-gratis/hermosa-foto-casa-moderna-cocina-comedor_181624-2870.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://c8.alamy.com/comp/W7KF6H/staged-and-remodeled-home-W7KF6H.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.freeimages.com/images/premium/previews/4107/41076492-remodeled-upscale-house-design.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={4}>
          <div>
            <h4>Título de la Remodelación</h4>
            <p>
              Aquí va una breve descripción del proyecto de remodelación. 
              Puedes incluir detalles del estilo, materiales y cualquier información adicional que sea relevante.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </AnimatedComponent>
  );
}

export default Carrusel;