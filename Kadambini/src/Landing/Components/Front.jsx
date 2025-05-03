import bg_image from '../assets/image/landing-bg.png'

function Front() {
    return (
        <>
            <div class="landing-container">

                <div class="main-content">

                    <div class="left-content">
                        <p class="sub-heading">HEALTHY CHOICES WITH AROGYA KADAMBINI</p>
                        <h1 class="main-heading">Mapping Your Family's Health, Smarter</h1>
                        <p class="description">
                            Discover how Arogya Kadambini helps you trace, visualize, and understand your family’s health patterns—powered by AI and ancient wisdom, reimagined for modern care.
                        </p>
                        <div class="button-group">
                            <a href="#" class="btn navbar-button">
                                Begin Health Mapping
                                <i class="fas fa-play"></i>
                            </a>
                            <a href="#" class="btn btn-icon">
                                <i class="fas fa-play"></i>
                            </a>
                        </div>

                    </div>

                    <div class="right-content">
                        <img className='right_bg_image' src={bg_image} alt="" />

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
                            <img src="https://placehold.co/44x44/DCE775/33691E?text=F1" alt="Family 1" />
                            <img src="https://placehold.co/44x44/FFF176/F57F17?text=F2" alt="Family 2" />
                            <img src="https://placehold.co/44x44/FF8A65/4E342E?text=F3" alt="Family 3" />
                        </div>
                        <div class="stat-text">
                            <strong>100+</strong>
                            <span>Families Tracked with Health Lineages</span>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="avatar-group">
                            <div class="avatar-placeholder" style={{ backgroundColor: '#dae9db' }}>AI</div>
                        </div>
                        <div class="stat-text">
                            <strong>AI-Powered</strong>
                            <span>Predictive Health Engine</span>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="avatar-group">
                            <img src="https://placehold.co/44x44/AED581/33691E?text=IN" alt="India" />
                            <img src="https://placehold.co/44x44/4FC3F7/01579B?text=US" alt="USA" />
                        </div>
                        <div class="stat-text">
                            <strong>5+ Regions</strong>
                            <span>Global Pilot Programs Running</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Front;