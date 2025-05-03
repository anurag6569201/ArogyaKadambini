// src/components/HowItWorks.js
import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap'; // Keep Container for overall structure if needed
import '../assets/css/Landing.css'; // Assuming Landing styles might still apply
import '../assets/css/Crousal.css'; // Crucial for the 3D carousel effect

function HowItWorks() {
    const steps = [
        {
            icon: '🧬',
            title: 'Input Your Family Health History',
            description: 'Easily build your family tree and add medical histories using our intuitive interface.'
        },
        {
            icon: '🧠',
            title: 'AI Analyzes Patterns & Predicts Risks',
            description: 'Our GenAI scans hereditary trends and lifestyle data to flag potential health risks.'
        },
        {
            icon: '🛡️', // Swapped order to match original cell count idea
            title: 'Get Personalized Health Insights',
            description: 'Receive tailored screening recommendations and actionable lifestyle advice.'
        },
        {
            icon: '📊',
            title: 'Interactive Health Tree Visualized',
            description: 'Explore your lineage through a clear, interactive visualization of health patterns.'
        },
        // Added a 5th step for the original calculation logic (cellCount=5)
        // You can adjust this if you only want 4 steps
        {
             icon: '✅',
             title: 'Take Proactive Steps',
             description: 'Use insights to make informed decisions about your health journey.'
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const carouselRef = useRef(null);
    // useRef to hold an array of refs for each cell
    const cellsRef = useRef([]);
    // Ensure the ref array has the correct size initially
    cellsRef.current = steps.map(
        (_, i) => cellsRef.current[i] ?? React.createRef()
    );

    const cellCount = steps.length; // Dynamic cell count based on steps data

    useEffect(() => {
        // Wait until the carousel element and cell refs are populated
        if (!carouselRef.current || cellsRef.current.some(ref => !ref.current)) {
            // console.log("Refs not ready yet");
            return;
        }

        const carouselElement = carouselRef.current;
        // Use offsetHeight for cellSize as in the original JS
        // Ensure element has rendered and has height
        const cellSize = carouselElement.offsetHeight;

        if (cellCount < 2 || !cellSize || cellSize <= 0) {
            // Avoid calculations if not enough cells or no height yet
            // console.warn("Carousel setup skipped: Needs >= 2 cells and valid height.", { cellCount, cellSize });
            return;
        }

        const theta = 360 / cellCount;
        // Calculate radius based on actual cell height
        const radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));

        // --- Rotate the main carousel list ---
        const angle = theta * selectedIndex * -1;
        carouselElement.style.transform = `translateZ(${-radius}px) rotateX(${-angle}deg)`;

        // --- Position individual cells and apply 'selected' class ---
        const currentCellIndex = selectedIndex < 0
            ? (cellCount - ((-selectedIndex) % cellCount)) % cellCount // Ensure positive index
            : selectedIndex % cellCount;

        cellsRef.current.forEach((cellRef, index) => {
             if (cellRef.current) { // Check if the ref is attached to an element
                const cellElement = cellRef.current;
                const cellAngle = theta * index;

                // Set initial transform for each cell
                cellElement.style.transform = `rotateX(${-cellAngle}deg) translateZ(${radius}px)`;

                // Add/remove 'selected' class
                if (currentCellIndex === index) {
                    cellElement.classList.add('selected');
                } else {
                    cellElement.classList.remove('selected');
                }
            }
        });

        // console.log(`Effect ran: selectedIndex=${selectedIndex}, cellSize=${cellSize}, radius=${radius}`);

    // Re-run this effect whenever selectedIndex changes or the number of steps changes
    }, [selectedIndex, cellCount, steps]); // Include 'steps' in case the array itself changes


    const selectPrev = () => {
        setSelectedIndex(prevIndex => prevIndex - 1);
    };

    const selectNext = () => {
        setSelectedIndex(prevIndex => prevIndex + 1);
    };

    return (
        <section className="how-it-works-section py-5 bg-light">
            {/* Container for the title */}
            <Container>
                <h2 className="text-center mb-5 section-title">How Arogya Kadambini Works</h2>
            </Container>

            {/* Carousel Structure */}
            {/* Added a wrapper div for potentially better centering/isolation if needed */}
            <div className="carousel-container">
                <div className="carousel">
                    <div className="carousel__scene">
                        {/* Assign the ref to the carousel list */}
                        <ol className="carousel__list" ref={carouselRef}>
                            {steps.map((step, index) => (
                                // Assign individual refs to each cell
                                <li
                                    key={index}
                                    className="carousel__cell"
                                    ref={cellsRef.current[index]} // Assign the ref from the array
                                >
                                    {/* Content from the 'steps' data */}
                                    <div className="icon-placeholder mb-3" style={{ fontSize: '2.5rem' }}> {/* Adjusted size slightly */}
                                        {step.icon}
                                    </div>
                                    {/* Added classes for potential specific styling */}
                                    <h5 className="carousel__cell-title">{step.title}</h5>
                                    <p className="carousel__cell-desc">{step.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="carousel__controls">
                        {/* Use React's onClick for event handling */}
                        <button className="previous-button" onClick={selectPrev}></button>
                        <button className="next-button" onClick={selectNext}></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;