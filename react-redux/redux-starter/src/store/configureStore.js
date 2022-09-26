import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './bugs';

export default function configureStore() {
  const store = createStore(
    reducer,
    // Enable trace in redux devtools
    devToolsEnhancer({ trace: true })
    );
  return store
}
