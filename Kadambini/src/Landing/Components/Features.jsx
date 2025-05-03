// src/components/Features.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';

function Features() {
    const featureList = [
        "AI-powered Hereditary Analysis",
        "Health Tree Visualizations",
        "Predictive Disease Alerts",
        "Multi-generational Data Storage",
        "Privacy & Data Encryption",
        "Personalized Screening Timeline", // Added from PDF
        "Secure Document Vault" // Added from PDF
    ];

    return (
        <section className="features-section py-5">
            <Container>
                <h2 className="text-center mb-5 section-title">Platform Features</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {featureList.map((feature, index) => (
                        <Col key={index}>
                            <Card className="h-100 feature-card shadow-sm"> {/* Add custom class */}
                                <Card.Body>
                                    {/* Optional: Add an icon here */}
                                    {/* <i className="fas fa-check-circle text-success me-2"></i> */}
                                    <Card.Title as="h5">{feature}</Card.Title>
                                    {/* Optional: Add a short description if needed */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Features;