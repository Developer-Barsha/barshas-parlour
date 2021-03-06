import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel carousel-center max-w-md p-4 mx-auto space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2" className="rounded-box" alt=''/>
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB" className="rounded-box" alt=''/>
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" className="rounded-box" alt=''/>
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693" className="rounded-box" alt=''/>
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7" className="rounded-box" alt=''/>
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094" className="rounded-box" alt=''/>
            </div>
            <div className="carousel-item">
                <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A" className="rounded-box" alt=''/>
            </div>
        </div>
    );
};

export default Carousel;