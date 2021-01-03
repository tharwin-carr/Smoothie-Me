import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/app.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import SmoothiesPage from './components/SmoothiesPage';
import SmoothieInfoPage from './components/SmoothieInfoPage';
import FavoritesPage from './components/FavoritesPage';
import AddSmoothiePage from './components/AddSmoothiePage';
import config from './config';
import SmoothieContext from './SmoothieContext';

export default class App extends Component {
  state = {
    smoothies: [],
    favorites: []
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/smoothies`),
      fetch(`${config.API_ENDPOINT}/favorites`)
    ])
      .then(([smoothiesRes, favoritesRes]) => {
        if(!smoothiesRes.ok)
          return smoothiesRes.json().then(e => Promise.reject(e))
        if(!favoritesRes.ok)
          return favoritesRes.json().then(e => Promise.reject(e))

          return Promise.all([smoothiesRes.json(), favoritesRes.json()])
      })
      .then(([smoothies, favorites]) => {
        this.setState({smoothies, favorites})
      })
      .catch(error => {
        console.error({error})
      });
  };

  addSmoothie = smoothie => {
    this.setState({
      smoothies: [...this.state.smoothies, smoothie]
    });
  };

  deleteFavorite = favorite_id => {
    this.setState({
      favorites: this.state.favorites.filter(favorite => favorite.id !== favorite_id)
    });
  };

  favoriteSmoothie = favoriteSmoothie => {
    this.setState({
      favorites: [...this.state.favorites, favoriteSmoothie]
    });
  };

  deleteSmoothie = smoothie_id => {
    this.setState({
      smoothies: this.state.smoothies.filter(smoothie => smoothie.id !== smoothie_id)
    });
  };

  render() {
    const smoothieContextValue = {
      smoothies: this.state.smoothies,
      favorites: this.state.favorites,
      addSmoothie: this.addSmoothie,
      favoriteSmoothie: this.favoriteSmoothie,
      deleteSmoothie: this.deleteSmoothie,
      deleteFavorite: this.deleteFavorite
    }
    return (
      <SmoothieContext.Provider value = {smoothieContextValue}>
        <BrowserRouter>
            <div className='app-container'>
              <nav>
                <NavBar />
              </nav>
              <main className='app'>
                <Switch>
                  <Route exact path='/' component={() => <LandingPage />} />
                  <Route path='/smoothies/:smoothieId' component={SmoothieInfoPage} />
                  <Route path='/smoothies' component={SmoothiesPage} />
                  <Route path='/favorites' component={FavoritesPage} />
                  <Route path='/add-smoothie' component={AddSmoothiePage} />
                </Switch>      
              </main>
            </div>
        </BrowserRouter>
      </SmoothieContext.Provider>
    );
  };
};