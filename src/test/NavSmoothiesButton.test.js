import React from 'react';
import ReactDOM from 'react-dom';
import NavSmoothiesButton from '../buttons/NavSmoothiesButton';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavSmoothiesButton />, div)
  ReactDOM.unmountComponentAtNode(div)
});