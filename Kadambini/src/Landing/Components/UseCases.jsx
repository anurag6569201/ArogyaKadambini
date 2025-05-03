// src/components/UseCases.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';

function UseCases() {
    const personas = [
        { icon: '👨‍👩‍👧‍👦', title: 'Families', description: 'Proactively track health patterns and plan for a healthier future together.' },
        { icon: '🧑‍⚕️', title: 'Doctors', description: 'Gain crucial lineage context for more informed diagnoses and patient care.' },
        { icon: '🧓', title: 'Individuals', description: 'Understand personal risk factors based on hereditary conditions.' }
    ];

    return (
        <section className="use-cases-section py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5 section-title">Who Is It For?</h2>
                <Row xs={1} md={3} className="g-4 justify-content-center">
                    {personas.map((persona, index) => (
                        <Col key={index}>
                            <Card className="text-center h-100 border-0 shadow-sm p-3">
                                <Card.Body>
                                     <div className="icon-placeholder mb-3" style={{fontSize: '3rem'}}>
                                        {persona.icon}
                                        {/* Add icon element here */}
                                    </div>
                                    <Card.Title as="h5">{persona.title}</Card.Title>
                                    <Card.Text>{persona.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default UseCases;