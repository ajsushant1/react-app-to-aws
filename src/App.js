import React from 'react';
import './App.css';
import Greet from './Components/Greet'
//import Greet1 from './Components/Greet'
import Login from './Components/Login';
import Message from './Message';
import Counter from './Components/Counter';
import Stylesheet from './Components/Stylesheet';

function App() {
  return (
    <div className="App">
      <Greet name="Sam"/>
      <Message/>
    <Login/>
    <Counter/>
    <Stylesheet/>
    </div>
  );
}

export default App;
