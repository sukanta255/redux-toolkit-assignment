import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/actions';
import './App.css'

function App() {
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(increment());
  };
  const handleClickMinus = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={handleClickAdd}>Add</button>
      <button onClick={handleClickMinus}>Minus</button>
    </div>
  );
}

export default App
