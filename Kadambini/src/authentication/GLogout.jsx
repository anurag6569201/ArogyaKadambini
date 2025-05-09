import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after logout
import '../../assets/landing/css/login.css';
import contact from '../../assets/landing/images/contact.svg';

function GLogout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch(`${window.__VISORA_MAIN_SERVER__}/auth/logout/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('authToken')}`, // Pass the auth token if required
                },
            });

            if (response.ok) {
                // Clear auth token and redirect to login page
                localStorage.removeItem('authToken');
                navigate('/login');
            } else {
                console.error('Logout failed:', await response.json());
                alert('An error occurred while logging out. Please try again.');
            }
        } catch (error) {
            console.error('Logout error:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <>
            <div className="container-fluid px-0 login_container">
                <div className="row p-3" style={{flexDirection:'row-reverse'}}>
                    <div className="col-md-6 d-flex justify-content-center" style={{ flexDirection: 'column',alignItems:'center' }}>
                        <p>Do you really want to sign-out?</p>
                        <button
                            className="btn btn-danger login_logging_btn crousal_heading_btn"
                            onClick={handleLogout}
                            style={{width:'fit-content'}}
                        >
                            Sign Out
                        </button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{borderRight:'1px solid grey'}}>
                        <img src={contact} alt="Logout Illustration" width="500px" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GLogout;
