import React from 'react';

import './SectionBanner.scss';

const SectionBanner = () => {
    return (
        <section className='container'>
            <div className='banner'>
                <div className='banner__natural'>
                    <h3>Natural!!</h3>
                    <span>Get Garden Fresh Fruits</span>
                </div>
                <div className='banner__offer'>
                    <h3>Offer!!</h3>
                    <span>Get 10% off on Vegetables</span>
                </div>
            </div>
        </section>
    );
};

export default SectionBanner;
