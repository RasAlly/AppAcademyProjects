import {receiveTodos, receiveTodo, removeTodo} from '../actions/todo_actions';
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      const obj = {}
      action.todos.forEach((todo)=> {
        // nextState[todo.id] = todo // This is for adding to existing state, not replacing
        obj[todo.id] = todo
      });
      return obj;
    case RECEIVE_TODO:
      nextState[action.todos.id] = action.todos
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todos.id]
      return nextState;
    default:
      return state;
  }

}

export default todosReducer;