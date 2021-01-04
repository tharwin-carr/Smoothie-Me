import React from 'react';
import ReactDOM from 'react-dom';
import AddSmoothieButton from '../buttons/AddSmoothieButton';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddSmoothieButton />, div)
  ReactDOM.unmountComponentAtNode(div)
});