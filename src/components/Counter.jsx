import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => {
    console.log(state);
    return state.counter;
  });
  
  const toggleCounterHandler = () => {};

  function incrementHandler() {
    dispatch({
      type: 'increment'
    })
  }

  function decrementHandler() {
    dispatch({
      type: 'decrement'
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
