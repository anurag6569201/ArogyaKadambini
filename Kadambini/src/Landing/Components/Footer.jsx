import React from 'react';
import { Container, Row, Col, Nav, Stack } from 'react-bootstrap';
import '../assets/css/Footer.css';

import LogoImg from '../../assets/logo.png';
import {
    Linkedin,
    Instagram,
    Facebook,
    Twitter,
} from 'lucide-react';


const LogoPlaceholder = () => (
    <img style={{ width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', borderRadius: '4px' }} src={LogoImg} alt="" />
);

const footerSections = [
    {
        title: 'Product',
        links: [
            { text: 'Features', href: '/features' },
            { text: 'How it Works', href: '/how-it-works' },
            { text: 'Pricing', href: '/pricing' },
            { text: 'Book a Demo', href: '/demo' },
        ]
    },
    {
        title: 'Company',
        links: [
            { text: 'About Us', href: '/about' },
            { text: 'Blog', href: '/blog' },
            { text: 'Careers', href: '/careers' },
            { text: 'Contact Us', href: '/contact' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { text: 'Documentation', href: '/docs' },
            { text: 'Support Center', href: '/support' },
            { text: 'API Status', href: '/status' },
            { text: 'FAQ', href: '/faq' },
        ]
    },
    {
        title: 'Legal',
        links: [
            { text: 'Privacy Policy', href: '/privacy' },
            { text: 'Terms of Service', href: '/terms' },
            { text: 'Cookie Policy', href: '/cookies' },
            { text: 'Accessibility', href: '/accessibility' },
        ]
    }
];


const socialLinks = [
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
];



function Footer() {
    const currentYear = new Date().getFullYear();
    // Choose Link component based on whether React Router is intended
    // const LinkComponent = Link || Nav.Link; // Basic check, improve if needed
    const LinkComponent = Nav.Link;

    return (
        <footer className="footer-main-section pt-5 pb-4">
            <Container>
                <Row className="gy-5 gx-lg-5 pb-3">

                    <Col lg={4} md={6} xs={12}>
                        <LogoPlaceholder />
                        <h5 className="footer-brand-name">Arogya Kadambini</h5>
                        <p className="small footer-tagline p-0 m-0">
                            Where Lineage Meets Intelligence. Empowering insights through connected data. {/* Expanded tagline/desc */}
                        </p>
                    </Col>

                    {footerSections.map((section) => (
                        <Col lg={2} md={3} xs={6} key={section.title}>
                            <h6 className="footer-section-title mb-3 text-uppercase">{section.title}</h6>
                            <Nav className="flex-column footer-nav-col">
                                {section.links.map((link, index) => (
                                    <LinkComponent
                                        key={index}
                                        href={link.href}
                                        className="footer-nav-link py-1"
                                    >
                                        {link.text}
                                    </LinkComponent>
                                ))}
                            </Nav>
                        </Col>
                    ))}
                </Row>

                <Row className="pt-3 border-top footer-bottom-bar" data-bs-theme="dark">
                    <Col sm={8} xs={12} className="text-center text-sm-start mb-2 mb-sm-0">
                        <small className="text-muted">
                            &copy; {currentYear} Arogya Kadambini Inc. All Rights Reserved.
                        </small>
                    </Col>
                    <Col sm={4} xs={12} className="text-center text-sm-end">
                        <Nav className="justify-content-center justify-content-sm-end footer-bottom-links">
                        <div className="footer-social-icons flex space-x-4">
                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        <Icon size={24} />
                                    </a>
                                ))}
                            </div>
                            <LinkComponent href="/privacy" className="footer-nav-link small text-muted px-2">Privacy</LinkComponent>
                            <LinkComponent href="/terms" className="footer-nav-link small text-muted px-2">Terms</LinkComponent>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;