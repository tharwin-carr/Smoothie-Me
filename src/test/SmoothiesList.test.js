import React from 'react';
import ReactDOM from 'react-dom';
import SmoothiesList from '../components/SmoothiesList';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SmoothiesList />, div)
  ReactDOM.unmountComponentAtNode(div)
});