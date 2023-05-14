import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [color, setcolor] = useState('red')
  const [text, settext] = useState('blue')

  const clickedforred = () => {
    setcolor('blue')
    settext('red')
  }
  return (
    <div className="App">
      <button style={{ backgroundColor: color }} onClick={clickedforred}>color is {text} blue</button>
    </div>
  );
}

export default App;
