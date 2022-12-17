import logo from './logo.svg';
import './App.css';
//import Hello from "./Component/Hello";
import React, { useState } from 'react';





function App() {

  const [count, setcount] = useState(0)


  function decrement(){
    setcount(precount => precount-1)
  }
  function increment(){
    setcount(precount => precount+1)
  }

  
  return (

    <div className="App">
      <>
      <h4>counter application</h4>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      </>
    </div>
  );
}

export default App;