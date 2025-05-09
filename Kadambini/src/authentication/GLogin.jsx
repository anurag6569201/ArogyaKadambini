import React, { useState } from 'react';
import google from './assets/image/google.webp';
import contact from './assets/image/contact.svg';
import { Link, useNavigate } from 'react-router-dom';

import '../authentication/assets/css/Authentication.css';

function GLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = { username, password, remember: rememberMe };

        try {
            const response = await fetch(`${window.__KADAMBINI_MAIN_SERVER__}/auth/signin/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('authToken', data.key);
                navigate('/app/dashboard');
            } else {
                const errorData = await response.json();
                setError(errorData.non_field_errors || 'Login failed. Please try again.');
            }
        } catch (error) {
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="glogin-wrapper authentication-wrapper">
            <div className="glogin-container">
                <div className="glogin-left">
                    <h2>Welcome Back</h2>
                    <p>Login to continue your health mapping journey with Arogya Kadambini. New here? <Link style={{color:'#b9b48c'}} to="/auth/signup">Register now</Link></p>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="form-remember">
                            <label>
                                <input
                                    type="checkbox" 
                                    className='me-2'
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                Remember me
                            </label>
                            <Link style={{textDecoration:'underline'}} to="/auth/password/reset/">Forgot Password?</Link>
                        </div>
                        {error && <p className="error-msg">{error}</p>}
                        <button className="navbar-button w-100 text-center" type="submit"><span>Login</span></button>
                    </form>
                    <div className="divider">OR</div>
                    <a className="google-login navbar-button" href="https://theflavourlake.in/accounts/google/login/?process=login">
                        <img src={google} alt="Google" /> Continue with Google
                    </a>
                </div>
                <div className="glogin-right">
                    <img src={contact} alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default GLogin;
