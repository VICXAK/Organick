import React from 'react';

const navItems = ['Home', 'About', 'Pages', 'Shop', 'Projects', 'News'];

const NavListItem = () => {
    return (
        <>
            {navItems.map((item) => {
                return (
                    <li key={item}>
                        <a href='#' className='nav__list-link'>
                            {item}
                        </a>
                    </li>
                );
            })}
        </>
    );
};

export default NavListItem;
