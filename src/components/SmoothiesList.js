import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from '../STORE';

export class SmoothiesList extends Component {
    render() {
        const list = STORE.smoothies.map((smoothie) => {
            return (
                <div className='smoothie' key={smoothie.id}>
                    <h2>
                        <Link to={`/STORE.smoothies/${smoothie.id}`}>
                            {smoothie.title}
                        </Link>
                    </h2>

                    <div>
                        <Link to={`/STORE.smoothies/${smoothie.id}`}>
                            <img
                                alt='blender'
                                src='https://img.icons8.com/ios-filled/50/000000/blender.png'
                            />
                        </Link>
                    </div>

                    <div>
                        <Link to={`/STORE.smoothies/${smoothie.id}`}>
                            <button>View Smoothie</button>
                        </Link>
                        
                    </div>
                </div>
            );
        });
        return <div>{list}</div>;
    };
};

export default SmoothiesList;

