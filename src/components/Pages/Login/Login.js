import React from 'react';
import './Login.css';

const Login = () => {
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
                    <div><p>Not registered?</p></div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;