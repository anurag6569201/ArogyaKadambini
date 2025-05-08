import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';
import '../assets/css/Crousal.css';

function HowItWorks() {
    const stepsDataForCards = [
        { icon: '🧬', title: 'Input Your Family Health History', description: 'Easily build your family tree and add medical histories using our intuitive interface.' },
        { icon: '🧠', title: 'AI Analyzes Patterns & Predicts Risks', description: 'Our GenAI scans hereditary trends and lifestyle data to flag potential health risks.' },
        { icon: '📊', title: 'Interactive Health Tree Visualized', description: 'Explore your lineage through a clear, interactive visualization of health patterns.' },
        { icon: '🛡️', title: 'Get Personalized Health Insights', description: 'Receive tailored screening recommendations and actionable lifestyle advice.' },
        { icon: '📁', title: 'Consolidated Health Records', description: 'Centralized access to key health records for all family members.' },
        { icon: '🔗', title: 'Connect with Providers', description: 'Seamlessly link your profile with healthcare professionals and institutions.' },
        { icon: '📱', title: 'Mobile Health Access', description: 'Stay updated and access insights on-the-go through our mobile-friendly interface.' },
        { icon: '⏰', title: 'Timely Health Alerts', description: 'Get notified about potential risks and reminders for screenings or tests.' },
        { icon: '📚', title: 'Health Knowledge Base', description: 'Learn from verified resources related to hereditary conditions and health maintenance.' },
        { icon: '🧾', title: 'Track Lifestyle Data', description: 'Incorporate daily habits and lifestyle inputs for comprehensive analysis.' }
    ];


    return (
        <section className="how-it-works-section py-5 landing-container-space" style={{ position: 'relative' }}>
            <div class="blur">
                <div class="gradient-mask">
                    <div class="spinning-gradient"></div>
                </div>
            </div>
            <Container className='p-0'>
                <h2 className="text-center mb-4 section-title">How Arogya Kadambini Works</h2>

                <Row xs={1} md={2} lg={4} className="g-4 mb-5">
                    {stepsDataForCards.map((step, index) => (
                        <Col key={`card-${index}`} className="text-center">
                            <Card className="h-100 border-0 shadow-sm p-3">
                                <Card.Body>
                                    <div className="icon-placeholder mb-3" style={{ fontSize: '3rem' }}>
                                        {step.icon}
                                    </div>
                                    <Card.Title as="h5">{step.title}</Card.Title>
                                    <Card.Text>{step.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
}

export default HowItWorks;
