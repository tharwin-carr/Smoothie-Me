import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../buttons/BackButton';
import SmoothieContext from '../SmoothieContext';


export default class FavoritesPage extends Component {
    static contextType = SmoothieContext;
    render() {
        const list = this.context.favorites.map(favorite => {
            return (
                <div className='favorites' key={favorite.favorite_id}>
                <h2>
                    <Link to={`/smoothies/${favorite.favorite_id}`}>
                        {favorite.favorite_title}
                    </Link>
                </h2>

                <div>
                    <Link to={`/smoothies/${favorite.favorite_id}`}>
                        <img
                            alt='blender'
                            src='https://img.icons8.com/ios-filled/50/000000/blender.png'
                        />
                    </Link>
                </div>

                <div>
                    <Link to={`/smoothies/${favorite.favorite_id}`}>
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






