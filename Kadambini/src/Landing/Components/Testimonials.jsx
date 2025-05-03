// src/components/Testimonials.js
import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';

function Testimonials() {
    const quotes = [
        { text: "Arogya Kadambini gave us insights we never had before. Understanding our family's health history is empowering.", author: "A. Sharma - Early User" },
        { text: "The predictive alerts are a game-changer for preventive care. This tool helps bridge the gap between generations.", author: "Dr. Priya Singh - Healthcare Professional" },
        { text: "Finally, a way to consolidate decades of family health information securely. It feels like preserving a vital legacy.", author: "R. Kumar - Beta Tester" }
    ];

    return (
        <section className="testimonials-section py-5">
            <Container>
                <h2 className="text-center mb-5 section-title">What People Are Saying</h2>
                <Carousel indicators={false} interval={5000} className="testimonial-carousel"> {/* Add custom class */}
                    {quotes.map((quote, index) => (
                        <Carousel.Item key={index}>
                            <Card className="border-0 shadow-sm p-4 mx-auto" style={{ maxWidth: '700px' }}>
                                <Card.Body className="text-center">
                                    <blockquote className="blockquote mb-0">
                                        <p>"{quote.text}"</p>
                                        <footer className="blockquote-footer mt-3">{quote.author}</footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
}

export default Testimonials;