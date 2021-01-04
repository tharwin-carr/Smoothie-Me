import React from 'react';
import ReactDOM from 'react-dom';
import AddSmoothiePage from '../components/AddSmoothiePage';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddSmoothiePage />, div)
  ReactDOM.unmountComponentAtNode(div)
});