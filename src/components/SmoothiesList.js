import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SmoothieContext from '../SmoothieContext';

export default class SmoothiesList extends Component {
    static contextType = SmoothieContext;
    render() {
        const list = this.context.smoothies.map(smoothie => {
            return (
                <div className='smoothie' key={smoothie.id}>
                    <h2>
                        <Link className='smoothie__title' to={`/smoothies/${smoothie.id}`}>
                            {smoothie.title}
                        </Link>
                    </h2>

                    <div>
                        <Link to={`/smoothies/${smoothie.id}`}>
                            <img
                                alt='blender'
                                src='https://img.icons8.com/ios-filled/60/ffffff/blender.png'
                            />
                        </Link>
                    </div>

                    <div>
                        <Link to={`/smoothies/${smoothie.id}`}>
                            <button className='btn'>View Smoothie</button>
                        </Link>
                        
                    </div>
                </div>
            );
        });
        return <div className='list'>{list}</div>;
    };
};
