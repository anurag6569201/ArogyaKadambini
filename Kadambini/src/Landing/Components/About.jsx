import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Landing.css';

function About() {
    return (
        <section className="about-heritage-section">
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="heritage-scroll glassmorph p-5">
                            <h2 className="heritage-title text-center mb-3">About Arogya Kadambini</h2>
                            <div className="scroll-divider mx-auto mb-4"></div>

                            <p className="heritage-lead">
                                <span className="dropcap">A</span>rogya Kadambini is the union of ancestral wisdom and modern AI—a platform born to bridge generational health heritage with future-focused wellness. It carries the soul of family lineage and the mind of innovation.
                            </p>

                      ¯      <h5 className="mt-4 mb-3 mission-title">Our Vision & Mission</h5>
                            <p>
                                To empower individuals and families across generations to understand, trace, and manage hereditary health paths with confidence. Arogya Kadambini transforms passive awareness into proactive care, and stories into data-driven legacies.
                            </p>

                            <blockquote className="heritage-quote mt-4">
                                “You inherit more than land or genes — with Arogya Kadambini, you inherit wisdom.”
                            </blockquote>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
