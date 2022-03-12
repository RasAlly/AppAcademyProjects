import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    console.log('hello')
    const store = configureStore();

    ReactDOM.render(<h1>Pokedex</h1>, rootEl);

    window.store = store;
  });