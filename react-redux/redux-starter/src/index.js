// import store from './store';
// import { bugAdded, bugRemoved, bugResolved } from './actions';

// //Store gets subscribed
// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// })

// store.dispatch(bugAdded("bug 1"))
// /*
// [
//   {
//     description: "bug1",
//     id:1,
//     resolved: false
//   }
// ]
// */

// store.dispatch(bugResolved(1))
// /*
// [
//   {
//     description: "bug1",
//     id:1,
//     resolved: true
//   }
// ]
// */


// //Unsubscribe from store logging events
// unsubscribe()

// store.dispatch(bugRemoved("bug 1"))
// /*
// []
// */


import customStore from './customStore';
import * as actions from './actions';

customStore.dispatch(actions.bugAdded("bug 1"))
console.log(customStore.getState())
/*
{
  id: 1,
  desciprtion: "bug 1",
  resolved: false
}
*/
