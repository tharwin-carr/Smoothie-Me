import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/app.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import SmoothiesPage from './components/SmoothiesPage';
import SmoothieInfoPage from './components/SmoothieInfoPage';
import FavoritesPage from './components/FavoritesPage';
import STORE from './STORE';

export default class App extends Component {
  state = {
    STORE
  }
  render() {
    return (
      <BrowserRouter>
          <div className='app-container'>
            <nav>
              <NavBar />
            </nav>
            <main className='App'>
              <Switch>
                <Route exact path='/' component={() => <LandingPage />} />
                <Route path='/smoothies' component={SmoothiesPage} />
                <Route path='/STORE.smoothies/:smoothieId' render={(props) => <SmoothieInfoPage {...props} />} />
                <Route path='/favorites' component={FavoritesPage} />
              </Switch>      
            </main>
          </div>
        </BrowserRouter>  
    );
  };
};