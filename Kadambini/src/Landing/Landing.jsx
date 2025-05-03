import './assets/css/Landing.css'

function Landing() {
    return (
        <div class="landing-container">

            <div class="main-content">

                <div class="left-content">
                    <p class="sub-heading">HEALTHY CHOICES WITH AROGYA KADAMBINI</p>
                    <h1 class="main-heading">Advancing Healthcare through Bio Tech</h1>
                    <p class="description">
                        Welcome to our Bio Tech company, where we are committed to developing
                        innovative solutions for a healthier future. Explore how we are making a difference.
                    </p>
                    <div class="button-group">
                        <a href="#" class="btn btn-primary">
                            Start Program
                            <i class="fas fa-play"></i>
                        </a>
                        <a href="#" class="btn btn-icon">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                    <div class="scroll-indicator">
                        <i class="fas fa-gem icon"></i>
                        <span>Scroll for More</span>
                    </div>
                </div>

                <div class="right-content">

                    <div class="info-card">
                        <i class="fas fa-wand-magic-sparkles card-icon"></i>
                        <div class="info-item">
                            <i class="fas fa-handshake"></i>
                            <span>Partnering for a Better Future</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-info-circle"></i>
                            <a href="#" target="_blank" rel="noopener noreferrer">VIEW ALL DETAILS →</a>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-calendar-alt"></i>
                            <a href="#" target="_blank" rel="noopener noreferrer">SCHEDULE AN APPOINTMENT</a>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
            <div class="stats-section">
                <div class="stat-item">
                    <div class="avatar-group">
                        <img src="https://placehold.co/44x44/E0E0E0/757575?text=P1" alt="Person 1"/>
                            <img src="https://placehold.co/44x44/C5CAE9/3F51B5?text=P2" alt="Person 2"/>
                                <img src="https://placehold.co/44x44/B2DFDB/009688?text=P3" alt="Person 3"/>
                                </div>
                                <div class="stat-text">
                                    <strong>65+</strong>
                                    <span>Happy Customers</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="avatar-group">
                                    <div class="avatar-placeholder">W.</div>
                                </div>
                                <div class="stat-text">
                                    <strong>W.</strong>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="avatar-group">
                                    <img src="https://placehold.co/44x44/BBDEFB/2196F3?text=C1" alt="Country 1"/>
                                        <img src="https://placehold.co/44x44/FFCDD2/F44336?text=C2" alt="Country 2"/>
                                        </div>
                                        <div class="stat-text">
                                            <strong>5+</strong>
                                            <span>We opened up in 5 different countries</span>
                                        </div>
                                </div>
                            </div>
                    </div>
                    );
}
export default Landing;