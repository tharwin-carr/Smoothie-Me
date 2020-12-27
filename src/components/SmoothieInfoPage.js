import React, { Component } from 'react';
import STORE from '../STORE';
import BackButton from '../buttons/BackButton';

export class SmoothieInfoPage extends Component {
    render() {
        const smoothieId = Number(this.props.match.params.smoothieId);
        const smoothieInfo = STORE.smoothies.length > 0 ? STORE.smoothies.find((smoothie) => {
            return smoothie.id === smoothieId;
        }) : '';
        return (
                <div>
                    {smoothieInfo.title ? <h1>{smoothieInfo.title}</h1> : ''}
                    <div>
                        {smoothieInfo.fruit ? <p>Fruit: {smoothieInfo.fruit}</p> : ''}
                        {smoothieInfo.nutsSeeds ? <p>Nuts/Seeds: {smoothieInfo.nutsSeeds}</p> : ''}
                        {smoothieInfo.liquids ? <p>Liquids: {smoothieInfo.liquids}</p> : ''}
                        {smoothieInfo.powders ? <p>Powders: {smoothieInfo.powders}</p> : ''}
                        {smoothieInfo.sweetners ? <p>Sweetners: {smoothieInfo.sweetners}</p> : ''}
                        {smoothieInfo.other ? <p>Other: {smoothieInfo.other}</p> : ''}
                    </div>
                    <BackButton
                        btnClass='btn back-button'
                        title='Back'                    
                    />

                </div>
        );
    };
};

export default SmoothieInfoPage;