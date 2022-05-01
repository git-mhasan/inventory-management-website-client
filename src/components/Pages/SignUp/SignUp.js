import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <div className="login-form">
                <form>
                    <div><h3 className='signin-title'>Sign Up</h3></div>
                    <div className="input-container">
                        <label>Name: </label>
                        <input type="text" name="name" required />

                    </div>
                    <div className="input-container">
                        <label>Email: </label>
                        <input type="email" name="email" required />

                    </div>
                    <div className="input-container">
                        <label>Password: </label>
                        <input type="password" name="pass" required />
                    </div>

                    <div><p style={{ display: "inline" }}>Already a user?</p><Link to="/login">Sign In</Link></div>
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

export default SignUp;