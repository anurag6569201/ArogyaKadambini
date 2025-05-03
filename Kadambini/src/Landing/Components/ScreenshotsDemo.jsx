import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';
import placeholderTree from '../assets/image/placeholder-tree.png'; 
import placeholderReport from '../assets/image/placeholder-report.png';

function ScreenshotsDemo() {
    return (
        <section className="screenshots-section py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5 section-title">See It In Action</h2>
                <Row className="g-4 align-items-center">
                    <Col md={6}>
                         <Card className="shadow-sm">
                             <Card.Header as="h5">Interactive Health Tree</Card.Header>
                            <Image src={placeholderTree} fluid rounded alt="Health Tree Visualization Preview"/>
                         </Card>
                    </Col>
                    <Col md={6}>
                         <Card className="shadow-sm">
                             <Card.Header as="h5">AI Health Report Sample</Card.Header>
                            <Image src={placeholderReport} fluid rounded alt="AI Report Dashboard Preview"/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ScreenshotsDemo;