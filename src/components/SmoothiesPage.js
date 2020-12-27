import React, { Component } from 'react';
import SmoothiesList from './SmoothiesList';
import AddSmoothieButton from '../buttons/AddSmoothieButton'

export class SmoothiesPage extends Component {
    render() {
        return (
            <div>
                <div className='smoothiespage__container'>
                    <h1>
                        Add or Browse Smoothies
                    </h1>
                </div>

                <div className='smoothiespage-btn__container'>
                    <AddSmoothieButton
                        btnClass= 'btn add-smoothie__btn'
                        title='Add Smoothie'
                    />                     
                </div>
                
                <SmoothiesList />                
            </div>
        );
    };
};

export default SmoothiesPage;
