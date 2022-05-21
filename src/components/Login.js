import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loader from '../Shared/Loader';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            toast.success('Logged In!')
            navigate(from, { replace: true });
        }
        if (loading) {
            <Loader />
        }
        if (error) {
            toast.error(error.message)
        }
    }, [user, loading, navigate, from, error])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div class="card mx-auto w-96 my-4 bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 className="card-title text-3xl text-primary font-bold pb-2 pt-4">Please Login</h1>
                <form onSubmit={handleLogin} className='p-2 flex flex-col gap-3 w-full mx-auto'>

                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder='Your email' className='input input-bordered w-full' />

                    <label htmlFor='email'>Password</label>
                    <input type="password" name='password' placeholder='Your password' className='input input-bordered w-full' />
                    {error && <p className='text-error'>{error.message}</p>}
                    <p>Don't have an account? <Link className='text-primary' to='/signup'>Register here</Link></p>
                </form>
                <input type="submit" className='btn btn-primary' value="Log In" />
            </div>
        </div>
    );
};

export default Login;