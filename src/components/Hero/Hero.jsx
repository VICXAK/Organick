import React from 'react';
import './Hero.scss';

const Hero = ({ className, children }) => {
    const classes = `hero ${className ? className : ''}`;

    return <div className={classes}>{children}</div>;
};

export default Hero;
