import {evaluate} from 'mathjs'
import { useState } from "react";
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClearClick = () => {
    setDisplayValue('');
  }

  const handleClick = (e) => {
    setDisplayValue(displayValue.concat(e.target.value));
  }

  const handleBackSpace = () => {
    setDisplayValue(displayValue.slice(0, -1));
  }

  const handleCalculate = () => {
    try {
      setDisplayValue(evaluate(displayValue).toString());
    } catch (err) {
      setDisplayValue(err);
    }
  }

  return (
    <>
      <div className="container">
          <input type="text" value={displayValue}/>
        <div className="buttons">
          <button className="button" value="clear" onClick={handleClearClick}>Clear</button>
          <button className="button" value="c" onClick={handleBackSpace}>c</button>   
          <button className="button" value="/" onClick={handleClick}>/</button>   

          <button className="button" value="7" onClick={handleClick}>7</button>
          <button className="button" value="8" onClick={handleClick}>8</button>
          <button className="button" value="9" onClick={handleClick}>9</button>
          <button className="button" value="*" onClick={handleClick}>x</button>

          <button className="button" value="4" onClick={handleClick}>4</button>
          <button className="button" value="5" onClick={handleClick}>5</button>
          <button className="button" value="6" onClick={handleClick}>6</button>
          <button className="button" value="-" onClick={handleClick}>-</button>

          <button className="button" value="1" onClick={handleClick}>1</button>
          <button className="button" value="2" onClick={handleClick}>2</button>
          <button className="button" value="3" onClick={handleClick}>3</button>
          <button className="button" value="+" onClick={handleClick}>+</button>

          
          <button className="button" value="." onClick={handleClick}>.</button>
          <button className="button" value="0" onClick={handleClick}>0</button>
          <button className="button" value="=" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </>    
  );
}

export default App;
