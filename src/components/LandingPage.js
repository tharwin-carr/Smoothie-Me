import React from 'react';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';

export default function LandingPage() {
    return(
        <div className='landing-page__container'>
            <Hero />
            <div className='landing-page__info'>
                <h2 className='landing-page__title'>
                    Why Smoothie Me?
                </h2>
            </div>
            <div className='landing-page__card'>
                <Card 
                    img='https://img.icons8.com/ios-glyphs/48/ffffff/hourglass--v1.png'
                    title='Save Some Time'
                    description='One stop for an endless amount of smoothie recipes! Hit Get Started to see the recipes.'
                />
                <Card
                    img='https://img.icons8.com/ios-glyphs/48/ffffff/plus-math.png'
                    title='Add Your Recipe'
                    description='Share your personal recipes with the world.'
                />
                <Card
                    img='https://img.icons8.com/metro/48/ffffff/add-to-favorites.png'
                    title='Save Your Favorites'
                    description='Save your favorite recipes in one place so they are easy to find later.'
                />                
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};