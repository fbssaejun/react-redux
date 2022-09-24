import * as actions from './actionTypes';

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    description
  }
})

export const bugRemoved = description => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
    description
  }
})
