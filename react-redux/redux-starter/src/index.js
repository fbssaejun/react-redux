import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore()

store.subscribe(() => {
  console.log("Store changed!")
})

store.dispatch(actions.bugAdded({ description: "bug 1" }))
store.dispatch(actions.bugAdded({ description: "bug 2" }))
store.dispatch(actions.bugAdded({ description: "bug 3" }))
store.dispatch(actions.bugResolved({ id: 1 }))

console.log(store.getState())
