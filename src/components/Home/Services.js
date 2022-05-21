import React from 'react';
import Service from './Service';
import hair from './../../images/hair.gif';
import style from './../../images/style.gif';
import aging from './../../images/aging.gif';

const Services = () => {
    const services = [
        {
            id:54554656232,
            name: "Anti aging face treatment",
            logo:aging,
            price:199,
            description:"We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
        },
        {
            id:556781614432,
            name: "Hair Color & Styling",
            logo:hair,
            price:99,
            description:"Amazing flyers, social media posts and brand representations that would make your brand stand out."
        },
        {
            id:879689714274,
            name: "Skin Care treatment",
            logo: style,
            price:299,
            description:"With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
        }
    ]

    return (
        <section className='py-10 bg-[#f7f7f7]'>
            <h1 className='text-3xl font-bold text-center mt-5 pb-8'>Our Awesome <span style={{color:'#F63E7B'}}>Services</span></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-10'>
            {
                services.map(service=><Service service={service} key={service.id}/>)
            }
        </div>
        </section>
    );
};

export default Services;