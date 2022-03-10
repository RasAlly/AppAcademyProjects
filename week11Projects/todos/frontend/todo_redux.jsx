import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
// import rootReduct from '../frontend/reducers/root_reducer'
import {receiveTodos,receiveTodo, removeTodo } from '../frontend/actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from '../frontend/actions/step_actions';
import Root from './components/root'
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './util/todo_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root')

  const store = configureStore();
  ReactDOM.render(<Root store={store}/> ,root)

  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;

  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;

  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;

})