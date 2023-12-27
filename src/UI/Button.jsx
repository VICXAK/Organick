import React from 'react';
import { HiArrowRightCircle as Arrow } from 'react-icons/hi2';

import './Button.scss';

const Button = ({ children, type, className, icon }) => {
    const classes = `button ${className ? className : ''}`;
    return (
        <button type={type} className={classes}>
            {children}
            {icon && <Arrow />}
        </button>
    );
};

export default Button;
