import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form, OverlayTrigger, Tooltip, Accordion, Nav, ListGroup, Tab, Table, ButtonGroup } from 'react-bootstrap';
import { InfoCircleFill, CheckLg, XLg, StarFill, Building, Person, PeopleFill, ShieldCheck, CloudArrowUp, Cpu, LifePreserver, QuestionCircle, Table as TableIcon, ListTask } from 'react-bootstrap-icons';
import '../assets/css/Pricing.css';
import PricingImage from '../assets/image/price.png';

const FeatureTooltip = ({ id, description, children }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={`tooltip-${id}`}>{description}</Tooltip>}
  >
    <span style={{ cursor: 'help' }}>
      {children}
    </span>
  </OverlayTrigger>
);

const FeatureCheck = ({ included, highlight = false, className = '' }) => (
  included
    ? <CheckLg color={highlight ? 'var(--primary-dark)' : 'var(--success-color)'} size={20} className={`flex-shrink-0 feature-check-icon ${className}`} />
    : <XLg color='var(--danger-color)' size={18} className={`flex-shrink-0 feature-check-icon ${className}`} />
);

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlanKey, setSelectedPlanKey] = useState('pro');
  const [viewMode, setViewMode] = useState('compare');

  const plans = {
    basic: {
      key: 'basic', name: "Basic", icon: Person, monthlyPrice: 0, annualPrice: 0,
      ctaText: "Start for Free", variant: "outline-primary",
      description: "Individuals & small families exploring health.",
      features: { records: "Up to 10 records", genAiRisk: false, analytics: "Limited", screeningTimeline: false, reportGenerator: false, docVault: "Limited (5 uploads)", chatbot: "Standard Access", support: "Email", community: true, privateRecords: false, users: "1 User", multiUserAccess: false, customReports: false, dedicatedSupport: false, apiIntegration: false, customModels: false, complianceTools: false, intergenForecast: false, legacyTimeline: false, insuranceIntegration: false, geneticLinking: false }
    },
    pro: {
      key: 'pro', name: "Pro", icon: PeopleFill, monthlyPrice: 29, annualPrice: 290,
      ctaText: "Go Pro", variant: "primary", isPopular: true,
      description: "Proactive users & growing families needing deeper insights.",
      features: { records: "Up to 100 records", genAiRisk: true, analytics: "Full Dashboard", screeningTimeline: true, reportGenerator: true, docVault: "Standard (5GB)", chatbot: "Enhanced AI", support: "Priority Email", community: true, privateRecords: true, users: "Up to 5 Users", multiUserAccess: "Family Roles (Soon)", customReports: false, dedicatedSupport: false, apiIntegration: true, customModels: false, complianceTools: false, intergenForecast: false, legacyTimeline: false, insuranceIntegration: false, geneticLinking: false }
    },
    enterprise: {
      key: 'enterprise', name: "Enterprise", icon: Building, monthlyPrice: null, annualPrice: null, isCustomPrice: true,
      ctaText: "Contact Sales", variant: "dark",
      description: "Clinics, hospitals, & research institutions needing scale & integration.",
      features: { records: "Unlimited", genAiRisk: true, analytics: "Advanced & Custom", screeningTimeline: true, reportGenerator: true, docVault: "Unlimited", chatbot: "Enhanced AI + Tools", support: "Dedicated Manager", community: "Dedicated Forum", privateRecords: true, users: "Unlimited Users", multiUserAccess: "Full Collaboration", customReports: true, dedicatedSupport: true, apiIntegration: "Full API & EHR", customModels: true, complianceTools: "Advanced (HIPAA/GDPR)", intergenForecast: "Included (Future)", legacyTimeline: "Included (Future)", insuranceIntegration: "Available (Future)", geneticLinking: "Available (Future)" }
    }
  };

  const featuresList = [
    { id: 'records', name: 'Health Records / Tree Size', tooltip: 'Number of profiles/members.', icon: PeopleFill },
    { id: 'genAiRisk', name: 'GenAI Risk Prediction', tooltip: 'AI analysis for hereditary risks.', icon: Cpu },
    { id: 'analytics', name: 'Health Analytics', tooltip: 'Insights dashboard level.', icon: StarFill },
    { id: 'screeningTimeline', name: 'Personalized Screening', tooltip: 'AI-recommended checkup schedule.', icon: StarFill },
    { id: 'reportGenerator', name: 'PDF Health Reports', tooltip: 'Generate shareable summaries.', icon: CloudArrowUp },
    { id: 'docVault', name: 'Secure Document Vault', tooltip: 'Upload & manage health reports.', icon: ShieldCheck },
    { id: 'chatbot', name: 'AI Health Assistant', tooltip: 'Ask health-related questions.', icon: QuestionCircle },
    { id: 'support', name: 'Support Level', tooltip: 'Access to help resources.', icon: LifePreserver },
    { id: 'community', name: 'Community Access', tooltip: 'Connect with other users.', icon: PeopleFill },
    { id: 'privateRecords', name: 'Privacy Controls', tooltip: 'Manage sensitive data privacy.', icon: ShieldCheck },
    { id: 'users', name: 'Account Users', tooltip: 'Number of users accessing the account.', icon: Person },
    { id: 'multiUserAccess', name: 'Collaboration Roles', tooltip: 'Grant specific access levels.', icon: PeopleFill },
    { id: 'customReports', name: 'Custom Reports', tooltip: 'Build tailored reports.', icon: StarFill },
    { id: 'dedicatedSupport', name: 'Dedicated Manager', tooltip: 'Single point of contact for support.', icon: LifePreserver },
    { id: 'apiIntegration', name: 'API & EHR/EMR Access', tooltip: 'Integrate with other systems.', icon: Building },
    { id: 'customModels', name: 'Custom AI Models', tooltip: 'Tailor AI to specific data.', icon: Cpu },
    { id: 'complianceTools', name: 'Compliance Tools', tooltip: 'Features for HIPAA/GDPR needs.', icon: ShieldCheck },
    { id: 'intergenForecast', name: 'Intergen. Forecasting', tooltip: 'Predict risks for future generations (Future).', icon: StarFill, isFuture: true },
    { id: 'legacyTimeline', name: 'Legacy Health Timeline', tooltip: 'Long-term family health record (Future).', icon: StarFill, isFuture: true },
    { id: 'insuranceIntegration', name: 'Insurance Integration', tooltip: 'Connect with providers (Future).', icon: Building, isFuture: true },
    { id: 'geneticLinking', name: 'Genetic Data Linking', tooltip: 'Incorporate genetic markers (Future).', icon: Cpu, isFuture: true },
  ];


  // --- Helper Function for Price Display ---
  const getPriceDisplay = (plan) => {
    if (plan.isCustomPrice) return <h2 className="mb-0">Custom</h2>;

    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const period = isAnnual ? '/year' : '/month';
    const originalMonthlyTotal = isAnnual && plan.monthlyPrice > 0 ? plan.monthlyPrice * 12 : null;
    const annualPriceForMonthlyView = !isAnnual && plan.annualPrice > 0 ? plan.annualPrice : null;

    return (
      <div className="price-display">
        <h2>
          ${price}
          {price > 0 && <small className="period ms-1">{period}</small>}
          {price === 0 && <small className="period ms-1"> Free</small>}
        </h2>
        {isAnnual && originalMonthlyTotal && price < originalMonthlyTotal && (
          <p className="saving-text mb-0">Save ${originalMonthlyTotal - price} annually!</p>
        )}
        {annualPriceForMonthlyView && (
          <p className="annual-option-text mb-0">or ${annualPriceForMonthlyView}/year</p>
        )}
      </div>
    );
  };

  const getFeatureValueDisplay = (planKey, featureId, mode = 'single') => {
    const value = plans[planKey].features[featureId];
    const isPro = planKey === 'pro';

    if (typeof value === 'boolean') {
      return <FeatureCheck included={value} highlight={isPro && value} className={mode === 'compare' ? 'mx-auto d-block' : ''} />;
    }
    if (typeof value === 'string') {
      if (value.toLowerCase() === 'false') return <FeatureCheck included={false} className={mode === 'compare' ? 'mx-auto d-block' : ''} />;

      const isFutureFeature = value.toLowerCase().includes('(soon)') || value.toLowerCase().includes('(future)');
      const displayValue = value.replace(/\(soon\)/i, '').replace(/\(future\)/i, '').trim();

      if (mode === 'single') {
        return (
          <div className="feature-value">
            <FeatureCheck included={true} highlight={isPro} className="feature-check-icon" />
            <span className={`feature-text-value ${isFutureFeature ? 'feature-text-muted' : ''}`}>
              {displayValue}
              {isFutureFeature && <Badge pill bg="secondary" className="ms-2 fw-light">Future</Badge>}
            </span>
          </div>
        );
      }
      else {
        return (
          <span className={`feature-text-value ${isFutureFeature ? 'feature-text-muted' : ''}`}>
            {displayValue}
            {isFutureFeature && <Badge pill bg="secondary" className="ms-1 fw-light d-block mt-1">Future</Badge>}
          </span>
        );
      }
    }
    return <FeatureCheck included={false} className={mode === 'compare' ? 'mx-auto d-block' : ''} />;
  };

  return (
    <>

      <Container fluid className="pricing-container mb-0 pb-0">
        <div className="container-fluid" style={{ position: 'relative', zIndex: 1 }}>
          <header className="text-center pricing-header">
            <h1>Find Your Perfect Plan</h1>
            <p className="lead">
              From personal health tracking to enterprise-level genetic insights, unlock the power of Arogya Kadambini.
            </p>
            <img height='300px' src={PricingImage} alt="" />


          </header>
          <div class="blur" style={{ position: 'absolute', height: '100%',opacity:'.4', width: '100%' }}>
            <div class="gradient-mask" style={{ position: 'absolute', width: '100%', height: '80%' }}>
              <div class="spinning-gradient"></div>
            </div>
          </div>

          <Row className="row-cols-1 row-cols-lg-3 mb-5 text-center g-4 px-md-3 px-lg-5 justify-content-center">
            {Object.values(plans).map((plan) => (
              <Col key={plan.key}>
                <Card
                  className={`pricing-card ${selectedPlanKey === plan.key && viewMode === 'single' ? 'selected' : ''}`}
                  onClick={() => viewMode === 'single' && setSelectedPlanKey(plan.key)} // Select only in single view
                  style={{ cursor: viewMode === 'single' ? 'pointer' : 'default' }}
                >
                  {plan.isPopular && <Badge pill bg="info" className="position-absolute top-0 start-100 translate-middle p-2 shadow-sm"></Badge>}
                  <Card.Header>
                    <plan.icon size={30} className="plan-icon" />
                    <h4>{plan.name}</h4>
                  </Card.Header>
                  <Card.Body>
                    {getPriceDisplay(plan)}
                    <p className="plan-description">{plan.description}</p>
                    <Button href="#" variant={plan.variant} className={`btn-${plan.variant}`}>
                      {plan.ctaText}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Container className="mt-4 table_styles">
          {viewMode === 'single' ? (
            <Tab.Container id="plan-feature-explorer" activeKey={selectedPlanKey} onSelect={(k) => setSelectedPlanKey(k)} className="feature-explorer">
              <Nav variant="pills" justify className="mb-4 p-2 flex-column flex-sm-row">
                {Object.values(plans).map(plan => (
                  <Nav.Item key={plan.key} className="flex-sm-fill text-center m-1">
                    <Nav.Link eventKey={plan.key}>
                      <plan.icon /> {plan.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {Object.values(plans).map(plan => (
                  <Tab.Pane eventKey={plan.key} key={plan.key}>
                    <ListGroup variant="flush" className="shadow-sm rounded overflow-hidden">
                      {featuresList.map(feature => (
                        <ListGroup.Item key={`${plan.key}-${feature.id}`}>
                          <div className="feature-name-wrapper">
                            <feature.icon size={20} className="feature-icon" />
                            <FeatureTooltip id={`${plan.key}-${feature.id}-tip`} description={feature.tooltip}>
                              <span className="feature-name">{feature.name}</span>
                            </FeatureTooltip>
                          </div>
                          {getFeatureValueDisplay(plan.key, feature.id, 'single')}
                        </ListGroup.Item>
                      ))}
                      <ListGroup.Item className="text-center p-3 bg-light">
                        <Button href="#" variant={plan.variant} size="lg" className={`fw-bold btn-${plan.variant}`}>
                          {plan.ctaText} with {plan.name}
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          ) : (
            <div className="comparison-table-wrapper">
              <Table hover className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    {Object.values(plans).map(plan => (
                      <th key={plan.key} className={`plan-${plan.key}`}>
                        <plan.icon size={20} className="d-block mx-auto mb-1" />
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featuresList.map(feature => (
                    <tr key={feature.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <feature.icon size={18} className="me-2 text-primary flex-shrink-0" />
                          <FeatureTooltip id={`compare-${feature.id}-tip`} description={feature.tooltip}>
                            {feature.name}
                          </FeatureTooltip>
                        </div>
                      </td>
                      {Object.values(plans).map(plan => (
                        <td key={`${plan.key}-${feature.id}`} className={`plan-${plan.key}`}>
                          {getFeatureValueDisplay(plan.key, feature.id, 'compare')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    {Object.values(plans).map(plan => (
                      <td key={`footer-${plan.key}`} className={`plan-${plan.key}`}>
                        <Button href="#" variant={plan.variant} className={`btn-${plan.variant}`}>
                          {plan.ctaText}
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </Table>
            </div>
          )}
        </Container>

        <Container className="faq-section">
          <h2 className="text-center">Still Have Questions?</h2>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Arogya Kadambini?</Accordion.Header>
                  <Accordion.Body>
                    Arogya Kadambini is a GenAI-powered platform designed to help individuals, families, and healthcare providers understand hereditary health risks. It enables building family health trees, offers AI-driven risk predictions, provides personalized screening recommendations, and securely manages multigenerational health records.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>How does the AI risk prediction work?</Accordion.Header>
                  <Accordion.Body>
                    Our AI analyzes the health data entered for your family members (such as conditions, age of onset, lifestyle factors) across generations to identify potential hereditary patterns and calculate health risks. It highlights conditions you or family members might be at a higher risk for and provides insights based on the available data. This feature's sophistication varies by plan (available starting with Pro).
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is my health data secure?</Accordion.Header>
                  <Accordion.Body>
                    Yes, data security and privacy are paramount. We employ robust security measures, including end-to-end encryption and adherence to best practices. Our platform offers features like a secure document vault and, particularly in the Enterprise plan, advanced compliance tools designed to meet stringent standards like HIPAA and GDPR.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Can I switch plans later?</Accordion.Header>
                  <Accordion.Body>
                    Absolutely. You can upgrade or downgrade your plan at any time through your account settings or by contacting support. If you upgrade mid-cycle, you'll typically pay a prorated amount. Downgrades usually take effect at the end of your current billing period.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>What kind of support is offered?</Accordion.Header>
                  <Accordion.Body>
                    Support levels are tailored to each plan. The <strong className="fw-medium">Basic</strong> plan includes standard email support and access to our community forums. The <strong className="fw-medium">Pro</strong> plan offers priority email support and community access. The <strong className="fw-medium">Enterprise</strong> plan includes a dedicated account manager and premium support channels for comprehensive assistance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>What does "Future" Feature mean?</Accordion.Header>
                  <Accordion.Body>
                    These are features planned for development and release after the initial launch or a major update (sometimes called Post-MVP). While part of our roadmap, they aren't available immediately but are prioritized for future implementation, often debuting in higher-tier plans.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>

      </Container>
    </>
  );
}

export default Pricing;
