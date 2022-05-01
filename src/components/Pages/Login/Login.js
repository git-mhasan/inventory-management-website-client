import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css';


const Login = () => {

    const handlePassReset = () => {
        alert("password reset!");
    }

    return (
        <div>
            <div className="login-form">
                <form>
                    <div><h3 className='signin-title'>Sign In</h3></div>
                    <div className="input-container">
                        <label>Email: </label>
                        <input type="email" name="email" required />

                    </div>
                    <div className="input-container">
                        <label>Password: </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div><p style={{ display: "inline" }}>Forget Password?</p><Link to="" onClick={handlePassReset}>Reset</Link></div>
                    <div><p style={{ display: "inline" }}>Not registered?</p><Link to="/signup">Sign Up</Link></div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>

                </form>
                <div className='login-seperator '></div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;