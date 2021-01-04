import React, { Component } from 'react';
import SmoothieContext from '../SmoothieContext';
import config from '../config';
import BackButton from '../buttons/BackButton';

export class SmoothieInfoPage extends Component {
    static contextType = SmoothieContext;
    
    static defaultProps = {
        onDeleteSmoothie: () => {},
        match: {
            params: {}
        },
        history: {
            push: () => {}
        },
    };

    handleClickDelete = (e, smoothieId) => {
        e.preventDefault();

        fetch(`${config.API_ENDPOINT}/smoothies/${smoothieId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(() => {
            this.props.onDeleteSmoothie(smoothieId);
            this.props.history.push('/smoothies');
            window.location.reload();
        })
        .catch(error => {
            console.log(error)
        });
    };

    handleClickFavorite(event, smoothieId) {
        event.preventDefault();
        const favorite = {
            favorite_id: smoothieId
        }
        console.log(favorite)
        fetch(`${config.API_ENDPOINT}/favorites`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favorite)
        })
        .then(res => res.json())
        .then(favorite => {
            this.context.favoriteSmoothie(favorite)
            this.props.history.push('/favorites')
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        });
    };

    render() {
        const smoothieId = Number(this.props.match.params.smoothieId);
        const smoothieInfo = this.context.smoothies.length > 0 ? this.context.smoothies.find(smoothie => {
            return smoothie.id === smoothieId;
        }) : '';
        return (
                <div className='smoothieinfo__container'>
                    {smoothieInfo.title ? <h1>{smoothieInfo.title}</h1> : ''}
                    <div>
                        {smoothieInfo.fruit ? <p>Fruit: {smoothieInfo.fruit}</p> : ''}
                        {smoothieInfo.vegetables ? <p> Vegetables: {smoothieInfo.vegetables}</p> : ''}
                        {smoothieInfo.nutsSeeds ? <p>Nuts/Seeds: {smoothieInfo.nutsSeeds}</p> : ''}
                        {smoothieInfo.liquids ? <p>Liquids: {smoothieInfo.liquids}</p> : ''}
                        {smoothieInfo.powders ? <p>Powders: {smoothieInfo.powders}</p> : ''}
                        {smoothieInfo.sweetners ? <p>Sweetners: {smoothieInfo.sweetners}</p> : ''}
                        {smoothieInfo.other ? <p>Other: {smoothieInfo.other}</p> : ''}
                    </div>

                    <button className='btn favorite-button' onClick={event => this.handleClickFavorite(event, smoothieId)}>
                        Add to Favorites
                    </button>
                    <br />
                    <button className='btn delete-button' onClick={e => this.handleClickDelete(e, smoothieId)}>
                        Delete
                    </button>
                    <br />
                    <BackButton
                        btnClass='btn back-button'
                        title='Back'                    
                    />

                </div>
        );
    };
};

export default SmoothieInfoPage;