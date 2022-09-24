import store from './store';
import * as actions from './actionTypes';

//Store gets subscribed
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "bug1"
  }
})

console.log(store.getState())
/*
[
  {
    description: "bug1",
    id:1,
    resolved: false
  }
]
*/

//Unsubscribe from store logging events
unsubscribe()

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1
  }
})

console.log(store.getState())
/*
[]
*/
