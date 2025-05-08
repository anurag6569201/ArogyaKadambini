import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';
import '../assets/css/procedures.css';

import PricingImage from '../assets/image/price.png';
function Procedures() {
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

  const benefitsData = [
    { icon: '👨‍👩‍👧', title: 'Families', description: 'Track hereditary illnesses across generations and make informed decisions for children and elders.' },
    { icon: '🧑‍⚕️', title: 'Healthcare Professionals', description: 'Get instant access to detailed hereditary data for more precise diagnosis and preventive planning.' },
    { icon: '🏥', title: 'Institutions', description: 'Hospitals and clinics can integrate with Kadambini for population health tracking and research.' }
  ];
  const technologyData = [
    { icon: '', title: 'AI + ML', description: 'For pattern recognition in health data' },
    { icon: '', title: 'Data Encryption', description: 'Military-grade AES-256 for securing health records' },
    { icon: '', title: 'Visualization Libraries', description: 'D3.js and custom React charts for health trees' },
    { icon: '', title: 'Cloud Infrastructure', description: 'Scalable and HIPAA-compliant storage' }
  ];
  const faqData = [
    { question: 'Is my health data safe?', answer: 'Absolutely. We use end-to-end encryption, and you control what gets shared.' },
    { question: 'How accurate are the predictions?', answer: 'Our GenAI model is trained on diverse datasets and updated regularly with medical literature and case studies.' }
  ];

  return (
    <section className="how-it-works-section py-5" style={{ position: 'relative' }}>
      <div class="blur">
        <div class="gradient-mask">
          <div class="spinning-gradient"></div>
        </div>
      </div>
      <Container >
        <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>
          <h1 className="text-center heritage-title section-title m-0">How Arogya Kadambini Works</h1>
          <img height='150px' src={PricingImage} alt="" />
        </div>
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
      <Container>
        <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: 'column', zIndex: '10', position: 'sticky' }}>
          <h1 className="text-center heritage-title section-title m-0" >Who Can Benefit from Arogya Kadambini?</h1>
          <img height='150px' src={PricingImage} alt="" />
        </div>

        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {benefitsData.map((step, index) => (
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

      <Container>
        <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>
          <h1 className="text-center heritage-title section-title m-0">The Technology We Use</h1>
          <img height='150px' src={PricingImage} alt="" />
        </div>
        <Row xs={1} md={2} lg={4} className="g-4 mb-5">
          {technologyData.map((step, index) => (
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

      <Container>
        <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: 'column' }}>
          <h1 className="text-center heritage-title section-title m-0">Frequently Asked Questions!</h1>
          <img height='150px' src={PricingImage} alt="" />
        </div>
        <Row xs={1} md={2} lg={2} className="g-4 mb-5">
          {faqData.map((step, index) => (
            <Col key={`card-${index}`} className="text-center">
              <Card className="h-100 border-0 shadow-sm p-3">
                <Card.Body>
                  <Card.Title as="h5">{step.question}</Card.Title>
                  <Card.Text>{step.answer}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Procedures;
