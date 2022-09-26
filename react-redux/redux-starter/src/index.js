import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore()

store.subscribe(() => {
  console.log("Store changed!")
})

store.dispatch(actions.bugAdded("bug 1"))
store.dispatch(actions.bugAdded("bug 2"))
store.dispatch(actions.bugAdded("bug 3"))
store.dispatch(actions.bugResolved(1))
