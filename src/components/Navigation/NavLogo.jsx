import React from 'react';
import navLogo from '../../assets/Logo.png';

const NavLogo = () => {
    return (
        <a href='/' className='nav__logo'>
            <img src={navLogo} alt='Organick Logo' />
            <span className='nav__logo-text'>Organick</span>
        </a>
    );
};

export default NavLogo;
