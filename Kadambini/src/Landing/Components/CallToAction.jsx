// src/components/CallToAction.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Landing.css';

function CallToAction() {
    return (
        <section className="cta-section py-5 bg-primary text-white text-center"> {/* Example styling */}
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2 className="mb-4">Ready to Map Your Family's Health Future?</h2>
                        <p className="mb-4">
                            Start building your secure family health tree today or try our demo to see the power of predictive insights.
                        </p>
                        <Button variant="light" size="lg" className="me-3 mb-2 cta-button"> {/* Add custom class */}
                            Start Your Health Tree Today
                        </Button>
                        <Button variant="outline-light" size="lg" className="mb-2 cta-button"> {/* Add custom class */}
                            Try Demo
                        </Button>
                        {/* Add Email Signup Form or Sign In Link if needed */}
                         <div className="mt-4">
                            {/* <p>Or <a href="#signin" className="text-white">Sign In</a></p> */}
                         </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CallToAction;