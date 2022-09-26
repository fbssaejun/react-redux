import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './reducer';

const store = createStore(
  reducer,
  // Enable trace in redux devtools
  devToolsEnhancer({ trace: true })
  );

export default store;
