import React from 'react';
import ReactDOM from 'react-dom';
import SmoothiesButton from '../buttons/SmoothiesButton';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SmoothiesButton />, div)
  ReactDOM.unmountComponentAtNode(div)
});