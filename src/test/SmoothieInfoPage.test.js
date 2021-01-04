import React from 'react';
import ReactDOM from 'react-dom';
import SmoothieInfoPage from '../components/SmoothieInfoPage';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SmoothieInfoPage />, div)
  ReactDOM.unmountComponentAtNode(div)
});