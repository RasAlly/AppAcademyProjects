export const ourThunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState); //, store.getState
  }

  return next(action)
}

