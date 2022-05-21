import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from './../../images/banner.png'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen bg-[#FFF8F5] px-4 lg:-mt-10">
            <div className="hero-content flex-col lg:flex-row gap-20 lg:flex-row-reverse md:flex-col-reverse lg:px-16">
                <img src={banner} className="rounded-lg w-96" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">BEAUTY SALON <br/> FOR EVERY WOMEN</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button onClick={() => navigate('/login')} className="btn bg-[#F63E7B] text-white border-0">Get an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;