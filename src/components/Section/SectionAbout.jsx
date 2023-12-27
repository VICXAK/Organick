import React from 'react';
import aboutImg from '../../assets/section-about.png';
import veganIcon from '../../assets/Vegan Food.png';
import mainIcon from '../../assets/Mailbox Quality.png';
import Button from '../../UI/Button';

import './SectionAbout.scss';

const SectionAbout = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='d-grid'>
                    <div className='about__img'>
                        <img src={aboutImg} alt='Fruits' />
                    </div>
                    <div className='about-info'>
                        <span className='about-info__label'>About Us</span>
                        <h3 className='about-info__title'>
                            We Believe in Working Accredited Farmers
                        </h3>
                        <p className='about-info__text'>
                            Simply dummy text of the printing and typesetting
                            industry. Lorem had ceased to been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley.
                        </p>
                        <div className='about-info__desc'>
                            <div className='about-info__desc-content'>
                                <img src={veganIcon} alt='Vegan icon' />
                                <div className='about-info__desc-wrap'>
                                    <h4>Organic Foods Only</h4>
                                    <p>
                                        Simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                            <div className='about-info__desc-content'>
                                <img src={mainIcon} alt='Mail icon' />
                                <div className='about-info__desc-wrap'>
                                    <h4>Quality Standards</h4>
                                    <p>
                                        Simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button icon={true} type='button'>
                            Shop Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;
