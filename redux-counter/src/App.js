import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/actions/index'

function App() {
const counter = useSelector(state => state.counter)
const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        Hello World!
        <h3>Counter: {counter}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
