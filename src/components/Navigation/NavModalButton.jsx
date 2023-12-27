import React from 'react';

import { CiMenuBurger as Burger } from 'react-icons/ci';

const NavModalButton = ({ handleModal }) => {
    return (
        <button type='button' className='nav__form-btn' onClick={handleModal}>
            <Burger />
        </button>
    );
};

export default NavModalButton;
