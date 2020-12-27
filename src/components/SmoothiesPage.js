import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SmoothiesList from './SmoothiesList';

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
                    <Link to='/add-smoothie'>
                        <button className='btn smoothiespage__btn'>
                            Add Smoothie
                        </button>
                    </Link>
                </div>
                
                <SmoothiesList />                
            </div>
        );
    };
};

export default SmoothiesPage;
