import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {
    //using React firebase hook states for signin
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const emailRef = useRef("");
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;

        signInWithEmailAndPassword(email, password);
    }

    const handlePassReset = async (event) => {
        const email = emailRef.current.value;
        if (!!email) {
            await sendPasswordResetEmail(email);
            toast('Sent Password Reset email.');
        } else {
            toast('Please write your email.');
        }
        // alert("password reset!");
    }


    if (error || errorReset) {
        toast(error?.message || errorReset?.message);
    }

    if (loading || sending) {
        return <div style={{ minHeight: "60vh" }}><Loading ></Loading></div>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div style={{ minHeight: "75vh" }}>
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <div><h3 className='signin-title'>Sign In</h3></div>
                    <div className="input-container">
                        <label>Email: </label>
                        <input ref={emailRef} type="email" name="email" required />

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
                {/* {loadingAnimation} */}
                <div className='login-seperator '></div>

                <SocialLogin ></SocialLogin>

            </div>
        </div>
    );
};

export default Login;