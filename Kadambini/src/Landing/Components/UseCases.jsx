import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../assets/css/Landing.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/css/CurveCrousal.css'



function UseCases() {
    const personas = [
        {
            icon: '👨‍👩‍👧‍👦',
            title: 'Families',
            description: 'Proactively track health patterns and plan for a healthier future together.',
            link: '#families'
        },
        {
            icon: '🧑‍⚕️',
            title: 'Doctors',
            description: 'Gain crucial lineage context for more informed diagnoses and patient care.',
            link: '#doctors'
        },
        {
            icon: '🧓',
            title: 'Individuals',
            description: 'Understand personal risk factors based on hereditary conditions.',
            link: '#individuals'
        },
        {
            icon: '🏥',
            title: 'Hospitals',
            description: 'Integrate with patient records to enhance long-term care and analytics.',
            link: '#hospitals'
        },
        {
            icon: '📊',
            title: 'Researchers',
            description: 'Access anonymized hereditary data for epidemiological studies.',
            link: '#researchers'
        },
        {
            icon: '💼',
            title: 'Health Insurers',
            description: 'Better risk profiling and preventive care strategies.',
            link: '#insurers'
        }
    ];

    return (
        <section className="use-cases-section py-1">
            <div className="container-fluid p-0">
                <h2 className="text-center mb-4 section-title animate__animated animate__fadeInDown">
                    Who Is It For?
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]} 
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                         1200: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper" 
                >
                    {personas.map((persona, index) => (
                        <SwiperSlide key={index}>
                            <Card className="text-center h-100 border-0 shadow-sm p-4 w-100 animate__animated animate__fadeInUp" style={{ transition: 'transform 0.3s' }}>
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="icon-placeholder mb-3" style={{ fontSize: '3rem' }}>
                                            {persona.icon}
                                        </div>
                                        <Card.Title as="h5">{persona.title}</Card.Title>
                                        <Card.Text>{persona.description}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default UseCases;