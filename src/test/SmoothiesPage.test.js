import React from 'react';
import ReactDOM from 'react-dom';
import SmoothiesPage from '../components/SmoothiesPage';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SmoothiesPage />, div)
  ReactDOM.unmountComponentAtNode(div)
});