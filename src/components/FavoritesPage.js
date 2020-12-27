import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../buttons/BackButton';
import STORE from '../STORE';

export default class FavoritesPage extends Component {
    render() {
        const list = STORE.favorites.map((favorite) => {
            return (
                <div className='favorites' key={favorite.id}>
                <h2>
                    <Link to={`/STORE.smoothies/${favorite.id}`}>
                        {favorite.title}
                    </Link>
                </h2>

                <div>
                    <Link to={`/STORE.smoothies/${favorite.id}`}>
                        <img
                            alt='blender'
                            src='https://img.icons8.com/ios-filled/50/000000/blender.png'
                        />
                    </Link>
                </div>

                <div>
                    <Link to={`/STORE.smoothies/${favorite.id}`}>
                        <button>View Smoothie</button>
                    </Link>
                    
                </div>
                <BackButton 
                    btnClass='btn back-button'
                    title='Back'
                />
            </div>
            );
        });
        return <div>{list}</div>
    };
};






