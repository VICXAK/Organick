import React from 'react';
import NavList from './NavList';
import NavListItem from './NavListItem';

import { AiOutlineCloseCircle as CloseModal } from 'react-icons/ai';

const NavModal = ({ handleModal }) => {
    return (
        <div className='modal' onClick={handleModal}>
            <NavList>
                <NavListItem />
            </NavList>

            <CloseModal onClick={handleModal} />
        </div>
    );
};

export default NavModal;
