import React from 'react';

import YClogo from '../assets/logos/YC-logo.jpg';
import waveMaker from '../assets/logos/wavemaker.jpg';

const Investors = () => {
    return (
        <>
        <h1>hello from the investors section</h1>
        <div>
            <img src={YClogo} alt='Ycombinator logo' />
            <img src={waveMaker} alt='wave maker logo' />
        </div>
        </>
    )
}

export default Investors;