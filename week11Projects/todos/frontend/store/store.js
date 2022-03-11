import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

// we had to install redux-logger and redux=thunk
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import { ourThunk } from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState,
    applyMiddleware(ourThunk, logger)
  );
}

export default configureStore;