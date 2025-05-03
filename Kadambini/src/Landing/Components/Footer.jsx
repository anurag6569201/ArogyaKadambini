// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../assets/css/Landing.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section bg-dark text-light py-4">
            <Container>
                <Row className="align-items-center">
                    <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 small-tagline">Arogya Kadambini — Where Lineage Meets Intelligence</p>
                         <small>&copy; {currentYear} Arogya Kadambini. All Rights Reserved.</small>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <Nav className="justify-content-center footer-links"> {/* Add custom class */}
                            <Nav.Link href="#about" className="text-light">About</Nav.Link>
                            <Nav.Link href="#faq" className="text-light">FAQ</Nav.Link>
                            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
                            <Nav.Link href="#privacy" className="text-light">Privacy</Nav.Link>
                            <Nav.Link href="#terms" className="text-light">Terms</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        {/* Add Social Media Icons */}
                        <a href="#" className="text-light me-3"><i className="fab fa-linkedin fa-lg"></i></a> {/* Use Font Awesome or other icon library */}
                        <a href="#" className="text-light me-3"><i className="fab fa-instagram fa-lg"></i></a>
                        <a href="#" className="text-light"><i className="fab fa-facebook fa-lg"></i></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;