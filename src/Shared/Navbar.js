import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import CustomLink from './CustomLink';

const Navbar = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const menu = <>
        <CustomLink to={'/'}>Home</CustomLink>
        <CustomLink to={'/addTask'}>Our portfolio</CustomLink>
        {user && <CustomLink to={'/tasks'}>Our Team</CustomLink>}
        {user && <CustomLink to={'/tasks'}>Contact Us</CustomLink>}
        <button onClick={() => navigate('/signup')} className="btn bg-[#F63E7B] border-0">Sign Up</button>
        {!user ?
            <button onClick={() => navigate('/login')} className="btn">Log In</button>
            :
            <button onClick={() => signOut(auth)} className="btn btn-primary">Sign Out</button>
        }
    </>;

    return (
        <div className="navbar bg-[#FFF8F5]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-40 p-3 py-5 rounded-box gap-5">
                        {menu}
                    </ul>
                </div>

                <a href='/' className="btn btn-ghost normal-case">
                    <img src="http://www.clker.com/cliparts/G/Q/b/1/w/2/simple-pink-flower.svg" className='w-16' alt="" />
                    <div>
                        <p style={{ fontSize: '16px' }}>Barsha's</p>
                        <p style={{ fontSize: '16px' }} className='font-thin pt-2'>Parlour</p>
                    </div>
                </a>
            </div>

            {/* <div className="navbar-center hidden lg:flex"> */}

            <div className="navbar-end gap-3 hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-5 items-center">
                    {menu}
                </ul>
            </div>
        </div>
        // </div>
    );
};

export default Navbar;