import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    if (loadingGoogle) {
        return <div ><Loading ></Loading></div>
    }
    if (errorGoogle) {
        toast(errorGoogle.message);
    }
    if (userGoogle) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <button className='button' onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default SocialLogin;