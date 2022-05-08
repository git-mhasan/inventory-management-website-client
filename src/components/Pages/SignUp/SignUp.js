import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './SignUp.css';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [createUserWithEmailAndPassword, user, loading, errorSignUp] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, errorProfileUpdate] = useUpdateProfile(auth);

    const uri = "http://localhost:5000/login";
    // const uri = "https://secret-reaches-38095.herokuapp.com/login";

    const handleFirebaseSignUp = async (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        const { data } = await axios.post(uri, { email });
        localStorage.setItem('accessToken', data);
    }

    if (loading || updating) {
        return <div style={{ minHeight: "60vh" }}><Loading></Loading></div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (errorSignUp || errorProfileUpdate) {
        toast(errorSignUp?.message || errorProfileUpdate?.message);
    }

    return (
        <div style={{ minHeight: "75vh" }}>
            <div className="login-form">
                <form onSubmit={handleFirebaseSignUp}>
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