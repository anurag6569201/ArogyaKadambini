import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';

import about_img from '../assets/image/about.png';
import PricingImage from '../assets/image/price.png';

function About() {
    return (
        <section className="about-heritage-section" style={{position:'relative'}}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={10}>
                        <div className="heritage-scroll glassmorph" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <header className="text-center pricing-header mt-4">
                                <h1 className="heritage-title text-center">About Arogya Kadambini</h1>
                                <div className="scroll-divider mx-auto"></div>
                                <p className="heritage-lead text-center lead pb-0 mb-0">
                                    <span className="dropcap">A</span>rogya Kadambini is the union of ancestral wisdom and modern AI—a platform born to bridge generational health heritage with future-focused wellness. It carries the soul of family lineage and the mind of innovation.
                                </p>
                                <img height='300px' src={PricingImage} alt="" />

                                <Row className="mt-4" style={{ position: 'relative',zIndex:'10' }}>
                                    {/* Left Card */}
                                    <Col md={4} style={{ height: '400px' }}>
                                        <Card className="about_cards">
                                            <Card.Body>
                                                <Card.Title>Generational Insight</Card.Title>
                                                <Card.Text>
                                                    Explore how Arogya Kadambini reveals health patterns through generations—empowering individuals with knowledge about their genetic legacy.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    {/* Center Image */}
                                    <Col md={4} className="d-flex justify-content-center" style={{ height: '400px', position: 'relative',alignItems:'flex-end' }}>
                                        <img src={about_img} alt="" style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', height: '400px', width: 'auto',zIndex:'10' }} />
                                        <div className="shadow_style_about"></div>
                                    </Col>

                                    {/* Right Card */}
                                    <Col md={4} style={{ height: '400px' }}>
                                        <Card className="about_cards">
                                            <Card.Body>
                                                <Card.Title>AI Meets Ancestry</Card.Title>
                                                <Card.Text>
                                                    Our platform converts heritage into health intelligence using advanced AI—transforming family stories into actionable wellness plans.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <img height='300px' src={PricingImage} alt="" />

                                {/* Optional blurred effect background */}
                                <div className="blur" style={{ position: 'absolute', height: '100%', opacity: '.4', width: '100%' }}>
                                    <div className="gradient-mask" style={{ position: 'absolute', width: '100%', height: '80%' }}>
                                        <div className="spinning-gradient"></div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
