import React from 'react';
import FavoritesList from './FavoritesList';
import BackButton from '../buttons/BackButton';

export default function FavoritesPage() {
    return (
        <div>
            <div className='favoritespage__container'>
                <h1 className='favoritespage__title'>
                    Favorites:
                </h1>
            </div>

            <div className='favoritespage__list'>
                <FavoritesList />
            </div>

            <div className='favorites-btn__container'>
                <BackButton
                    btnClass='btn back-button'
                    title='Back'
                />
            </div>
            
        </div>
    );
};
