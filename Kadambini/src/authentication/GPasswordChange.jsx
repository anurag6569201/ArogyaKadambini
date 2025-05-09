import React from 'react';
import contact from './assets/image/contact.svg';
import { Link } from 'react-router-dom';

function GPasswordChange() {
    return (
        <div className="glogin-wrapper authentication-wrapper">
            <div className="glogin-container rounded-4">
                {/* Left Column: Form */}
                <div className="col-md-6" style={{padding: '1.5rem'}}>
                    <h2 className="mb-4 fw-semibold">Reset Your Password</h2>
                    <form method="post" action="/auth/password/change/">
                        <div className="mb-3">
                            <label htmlFor="id_oldpassword" className="form-label">Current Password</label>
                            <input type="password" className="form-control" name="oldpassword" placeholder="Current Password"
                                autoComplete="current-password" required id="id_oldpassword" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="id_password1" className="form-label">New Password</label>
                            <input type="password" className="form-control" name="password1" placeholder="New Password"
                                autoComplete="new-password" required id="id_password1" />
                            <div className="form-text" id="id_password1_helptext">
                                <ul className="ps-3 mb-0">
                                    <li>Your password can’t be too similar to your personal info.</li>
                                    <li>Must contain at least 8 characters.</li>
                                    <li>Cannot be a commonly used password.</li>
                                    <li>Cannot be entirely numeric.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="id_password2" className="form-label">New Password (again)</label>
                            <input type="password" className="form-control" name="password2" placeholder="Re-enter new password"
                                required id="id_password2" />
                        </div>

                        <div className="d-grid mb-3">
                            <button className="navbar-button" type="submit">Change Password</button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Image */}
                <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center" style={{padding:'1.5rem'}}>
                    <img src={contact} alt="Reset Illustration" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default GPasswordChange;
