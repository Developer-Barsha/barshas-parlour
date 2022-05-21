import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    return (
        <div class="card service items-center pt-5">
            <img src={service?.logo} alt="Shoes" class="px-26 rounded-full border-lg" style={{width:'72px', height:'72px', border:'2px solid #F63E7B'}} />
            <div class="card-body items-center text-center">
                <h2 class="text-xl font-bold" style={{color:'#F63E7B'}}>$ {service.price}</h2>
                <h2 class="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;