import React from 'react';
import { IoCartOutline as CartIcon } from 'react-icons/io5';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';

const NavForm = () => {
    return (
        <div className='nav__form'>
            <div className='nav__form-search'>
                <input
                    className='nav__form-input'
                    type='search'
                    placeholder='Search...'
                />

                <div className='nav__form-search-icon'>
                    <SearchIcon />
                </div>
            </div>
            <button type='button' className='nav__form-cart'>
                <div className='nav__form-cart-icon'>
                    <CartIcon />
                </div>
                <span>Cart (0)</span>
            </button>
        </div>
    );
};

export default NavForm;
