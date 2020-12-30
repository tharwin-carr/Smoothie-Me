import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import BackButton from '../buttons/BackButton';
import SmoothieContext from '../SmoothieContext';


export default class FavoritesPage extends Component {
    static defaultProps = {
        onDeleteFavorite: () => {},
        match: {
            params: {}
        }
    };
    static contextType = SmoothieContext;

    handleDeleteFavorite = (e, favoriteId) => {
        e.preventDefault()

        fetch(`${config.API_ENDPOINT}/favorites/${favoriteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(() => {
            this.props.onDeleteFavorite(favoriteId)
            this.context.deleteFavorite(favoriteId)
            window.location.reload()
        })
        .catch((error) => {
            console.log(error)
        });
    };
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
                    <br />
                    <button onClick={(e) => this.handleDeleteFavorite(e, favorite.favorite_id)}>
                        Remove From Favorites
                    </button>
                    
                </div>

            </div>
            );
        });
        return (
        <div>
            {list}
            <BackButton 
                btnClass='btn back-button'
                title='Back'
            />
        </div>
        )
    };
};






