import React, { useState } from 'react';
import NavLogo from './NavLogo';
import NavWrapper from './NavWrapper';
import NavList from './NavList';
import NavListItem from './NavListItem';
import NavForm from './NavForm';
import NavModalButton from './NavModalButton';
import NavModal from './NavModal';

import './Navigation.scss';

const Nav = ({ children }) => {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(true);
    };

    return (
        <nav className='nav'>
            <NavLogo />
            <NavModalButton handleModal={handleModal} />
            {modal && (
                <NavModal modal={modal} handleModal={() => setModal(false)} />
            )}
            <NavWrapper>
                <NavList>
                    <NavListItem />
                </NavList>
                <NavForm />
            </NavWrapper>
        </nav>
    );
};

export default Nav;
