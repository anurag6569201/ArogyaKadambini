import React from 'react';
import '../assets/css/Testimonials.css'

import imgMehwish from '../assets/image/plant1.png';
import imgElizabeth from '../assets/image/plant1.png';

const testimonialsData = [
    {
        id: 1,
        name: 'Mehwish',
        quote: 'Complimant interested discretion estimating on stimulated apartments oh.',
        image: imgMehwish,
        quoteColor: '#e0e0e0' 
    },
    {
        id: 2,
        name: 'Elizabeth Jeff',
        quote: 'Dear so sing when in find read of call. As distrusts behaviour abilities defective is.',
        image: imgElizabeth,
        highlight: true, 
        quoteColor: '#8a2be2'
    },
];

function Testimonials() {
    return (
        <section className="testimonials-section" style={{ position: 'relative' }}>
            <div class="blur" style={{ position: 'absolute', left: '30%',bottom: '100%', width: '10%', height: '100%',opacity:'.4'}}>
                <div class="gradient-mask" style={{ position: 'absolute', left: '30%',bottom: '100%', width: '60%', height: '60%'}}>
                    <div class="spinning-gradient"></div>
                </div>
            </div>
            <div className="testimonials-container">
                <div className="testimonial-content-left">
                    <h2>What Our Customers Says</h2>
                    <p>
                        Relation so in confined smallest children unpacked
                        delicate. Why sir end believe uncivil respect. Always
                        get adieus nature day course for common.
                    </p>
                    <button className="navbar-button">View More</button>
                </div>

                <div className="testimonial-content-right">
                    {testimonialsData.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card ${testimonial.highlight ? 'highlighted' : ''}`}
                        >
                            {testimonial.highlight && <div className="highlight-bar"></div>}
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="testimonial-img"
                            />
                            <div className="testimonial-text">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;