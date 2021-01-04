import React from 'react';
import ReactDOM from 'react-dom';
import FavoritesList from '../components/FavoritesList';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoritesList />, div)
  ReactDOM.unmountComponentAtNode(div)
});