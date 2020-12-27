import React from 'react';
import NavHomeButton from '../buttons/NavHomeButton';
import NavSmoothiesButton from '../buttons/NavSmoothiesButton';
import NavFavoritesButton from '../buttons/NavFavoritesButton';

export default function NavBar() {
    return (
        <div className='nav-bar__container'>
            <div className='nav-bar__header'>
                <NavHomeButton 
                    btnClass='nav-bar__title'
                    title='Smoothie Me'
                />
            </div>

            <div className='nav-bar-links__container'>
                <NavSmoothiesButton
                    btnClass='nav-bar__btn'
                    title='Smoothies'
                />
                <NavFavoritesButton
                    btnClass='nav-bar__btn'
                    title='Favorites'
                />
            </div>
        </div>
    );
};