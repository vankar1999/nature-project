import React from 'react';
import heroImage from "./hero-image.jpg";

export default function Hero() {
    return (
        <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url(${heroImage})`, height: 800 }}
                >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                    </div>
                </div>
            </div>
        </header>
    );
}
    