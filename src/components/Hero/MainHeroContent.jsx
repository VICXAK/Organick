import React from 'react';
import Button from '../../UI/Button';

const MainHeroContent = () => {
    return (
        <div className='container d-flex'>
            <div className='hero__main'>
                <span className='hero__main-label'>100% Natural Food</span>
                <h1 className='hero__main-title'>
                    Choose the best healthier way
                </h1>
                <span className='hero__main-passage'>of life</span>
                <Button className='btn-yellow' icon={true}>
                    Explore Now
                </Button>
            </div>
        </div>
    );
};

export default MainHeroContent;
