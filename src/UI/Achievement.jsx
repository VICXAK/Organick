import React from 'react';

import './Achievement.scss';

const Achievement = ({ status, title }) => {
    return (
        <div className='testimonial-progress__achievement'>
            <div className='testimonial-progress__achievement--bg'>
                <span className='count'>{status}</span>
                <span className='title'>{title}</span>
            </div>
        </div>
    );
};

export default Achievement;
