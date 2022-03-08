import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('content')

  ReactDOM.render(<h1>Test</h1> ,content)

  const store = configureStore;
  window.store = store
})