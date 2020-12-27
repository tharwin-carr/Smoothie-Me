import React, { Component } from 'react';
import BackButton from '../buttons/BackButton';

export default class AddSmoothiePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>
                        Add Your Smoothie Recipe
                    </h1>
                    <h2>
                        If None, Leave the Field Blank
                    </h2>
                    <BackButton 
                        btnClass='btn back-button'
                        title='Back'
                    />
                </div>

                <div>
                    <form>
                        <input 
                            type='text' 
                            id='title' 
                            name='title' 
                            placeholder='Title...' 
                        />
                        <br />
                        <input 
                            type='text' 
                            id='fruit' 
                            name='fruit' 
                            placeholder='Fruit...' 
                        />
                        <br />
                        <input 
                            type='text' 
                            id='vegetable' 
                            name='vegetable' 
                            placeholder='Vegetables...' 
                        />
                        <br />
                        <input 
                            type='text' 
                            id='nutsSeeds' 
                            name='nutsSeeds' 
                            placeholder='Nuts/Seeds...' 
                        />
                        <br />
                        <input 
                            type='text' 
                            id='liquids' 
                            name='liquids' 
                            placeholder='Liquids...' 
                        />
                        <br />
                        <input 
                            type='text' 
                            id='powders' 
                            name='powders' 
                            placeholder='Powders...' 
                        />
                        <br />
                        <input 
                            type='text' 
                            id='sweetners' 
                            name='sweetners' 
                            placeholder='Sweetners...' 
                        />
                        <br />
                        <input 
                            type='text' 
                            id='other' 
                            name='other' 
                            placeholder='Other...' 
                        />
                        <br />
                        <button type ='submit'>
                            Publish
                        </button>
                    </form>

                </div>
                
            </div>
        )
    }
}


