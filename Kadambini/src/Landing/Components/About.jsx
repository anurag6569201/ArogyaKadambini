// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Landing.css';

function About() {
    return (
        <section className="about-section py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8} className="text-center">
                        <h2 className="mb-4 section-title">About Arogya Kadambini</h2>
                        <p className="lead mb-4">
                            Arogya Kadambini represents the fusion of deep-rooted family heritage and cutting-edge Artificial Intelligence. Born from the need to bridge the gap between generational health knowledge and modern preventive care.
                        </p>
                        <h5>Our Vision & Mission</h5>
                        <p>
                            To empower individuals and families globally to understand, predict, and proactively manage their hereditary health, preserving this vital knowledge for future generations. We aim to turn reactive healthcare into proactive, informed wellness.
                        </p>
                        <blockquote className="blockquote mt-4">
                            <p>"You can inherit more than just land or genes. You inherit health patterns and with ArogyaKadambini, you inherit wisdom."</p>
                            {/* <footer className="blockquote-footer">Founder Name</footer> */}
                        </blockquote>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;