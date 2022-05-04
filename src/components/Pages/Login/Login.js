import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';


const Login = () => {
    let loadingAnimation;
    //using React firebase hook states for signin
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;

        signInWithEmailAndPassword(email, password);
    }

    const handlePassReset = () => {
        alert("password reset!");
    }

    if (error) {
        toast(error?.message);
    }

    if (loading) {
        loadingAnimation = "loading..."
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="login-form">
                <form onSubmit={handleLogin}>
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
                {loadingAnimation}
                <div className='login-seperator '></div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;