import store from './store';
import { bugAdded, bugRemoved } from './actions';
//Store gets subscribed
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

store.dispatch(bugAdded("bug 1"))

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

store.dispatch(bugRemoved("bug 1"))

console.log(store.getState())
/*
[]
*/
