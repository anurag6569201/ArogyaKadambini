import React, { useEffect, useState } from 'react';
import '../authentication/assets/css/Authentication.css';

function GPasswordResetDone() {
    const [countdown, setCountdown] = useState(7);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 1) {
                    clearInterval(interval);
                    window.location.href = "/auth/signin"; 
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <div className="container login_container px-4 pt-5 my-5">
                <div className="row" style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <div className="col-md-6 d-flex justify-content-center text-center" style={{ flexDirection: 'column' }}>
                        <h2>Email Sent Successfully</h2>
                        <form>
                            <p>
                                We have sent you an email. If you have not received it, please check your spam folder.
                                Otherwise, contact us if you do not receive it in a few minutes.
                            </p>
                            <button className="navbar-button" style={{ pointerEvents: 'none' }}>
                                Redirecting... <span className="logging_timer">{countdown}</span>
                            </button>
                        </form>
                        <br />
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default GPasswordResetDone;
