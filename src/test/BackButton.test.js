import React from 'react';
import ReactDOM from 'react-dom';
import BackButton from '../buttons/BackButton';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BackButton />, div)
  ReactDOM.unmountComponentAtNode(div)
});