import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Landing.css';

function CallToAction() {
    return (
        <section className="cta-section py-5 bg-primary text-white text-center"> 
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2 className="mb-4">Ready to Map Your Family's Health Future?</h2>
                        <p className="mb-4">
                            Start building your secure family health tree today or try our demo to see the power of predictive insights.
                        </p>
                        <Button variant="light" size="lg" className="me-3 mb-2 cta-button">
                            Start Your Health Tree Today
                        </Button>
                        <Button variant="outline-light" size="lg" className="mb-2 cta-button">
                            Try Demo
                        </Button>
                         <div className="mt-4">
                         </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CallToAction;