import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPokemon } from './util/api_util';
import { receivePoke, requestSinglePokemon } from './actions/pokemon_actions';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl)

  window.fetchPokemon = fetchPokemon
  window.receivePoke = receivePoke
  window.requestSinglePokemon = requestSinglePokemon
  window.store = store

})