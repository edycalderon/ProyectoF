import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Acerca de la Empresa</h5>
            <p>
              Descripción breve de tu empresa, misión, visión, etc.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope className="me-2" />
                <a href="mailto:info@tuempresa.com" className="text-white">
                  info@tuempresa.com
                </a>
              </li>
              <li>
                <FaMapMarkerAlt className="me-2" />
                Calle Falsa 123, Ciudad, País
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Redes Sociales</h5>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="https://www.facebook.com/tuempresa" className="text-white">
                  <FaFacebook />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.twitter.com/tuempresa" className="text-white">
                  <FaTwitter />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/tuempresa" className="text-white">
                  <FaInstagram />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">
          © {new Date().getFullYear()} Nombre de tu empresa. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;