import React from 'react';
import Carousel from '../../UI/Carousel/Carousel';
import leftBg from '../../assets/testimonial-1.png';
import rightBg from '../../assets/testimonial-2.png';
import Achievement from '../../UI/Achievement';

import './SectionTestimonial.scss';

const SectionTestimonial = () => {
    return (
        <section className='testimonial'>
            <div className='testimonial-bg__left'>
                <img src={leftBg} alt='' />
            </div>
            <div className='testimonial__content'>
                <span className='testimonial__label'>Testimonial</span>
                <h3 className='testimonial__title'>
                    What Our Customer Saying?
                </h3>
                <Carousel />
                <div className='testimonial__hr-bg'></div>
                <div className='testimonial-progress'>
                    <Achievement status={100} title='Organic' />
                    <Achievement status={285} title='Active Product' />
                    <Achievement status={'350+'} title='Organic Orchads' />
                    <Achievement status={'25+'} title='Years of Farming' />
                </div>
            </div>
            <div className='testimonial-bg__right'>
                <img src={rightBg} alt='' />
            </div>
        </section>
    );
};

export default SectionTestimonial;
