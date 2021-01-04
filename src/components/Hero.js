import React from 'react';
import SmoothiesButton from '../buttons/SmoothiesButton';

export default function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero-header__container'>
                <h1 className='hero-header__text'>
                    The perfect smoothie awaits!
                </h1>
            </div>

            <div className='hero-description__container'>
                <p>
                    <span className='hero-title'>Smoothie Me</span> helps you find the perfect smoothie to make your day a little better.
                </p>
            </div>

            <div className='hero-button__conatiner'>
                <SmoothiesButton
                    btnClass='btn hero-button__btn'
                    titleClass='hero-btn__title'
                    title='Get Started'
                />
            </div>
            
        </div>
    );
};