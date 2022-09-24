import store from './store';

store.dispatch({
  type: "bugAdded",
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

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1
  }
})

console.log(store.getState())
/*
[]
*/
