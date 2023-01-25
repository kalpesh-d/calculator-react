import { useState } from "react";
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  
  const handleNumberClick = (e) => {
    const value = e.target.value;
    setDisplayValue(displayValue === '0' ? value : displayValue + value);
  }


  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={displayValue}/>
        </form>
        <div className="buttons">
          <button className="button" value="/">/</button>   
          <button className="button" value="1" onClick={handleNumberClick}>1</button>
          <button className="button" value="2" onClick={handleNumberClick}>2</button>
          <button className="button" value="3" onClick={handleNumberClick}>3</button>
          <button className="button" value="+">+</button>
          <button className="button" value="4" onClick={handleNumberClick}>4</button>
          <button className="button" value="5" onClick={handleNumberClick}>5</button>
          <button className="button" value="6" onClick={handleNumberClick}>6</button>
          <button className="button" value="-">-</button>
          <button className="button" value="7" onClick={handleNumberClick}>7</button>
          <button className="button" value="8" onClick={handleNumberClick}>8</button>
          <button className="button" value="9" onClick={handleNumberClick}>9</button>
          <button className="button" value="">*</button>
          <button className="button" value="c" >C</button>
          <button className="button" value="0" onClick={handleNumberClick}>0</button>
          <button className="button" value=".">.</button>
          <button className="button" value=".">/</button>
          <button value="=" className="equal">=</button>
        </div>
      </div>
    </>    
  );
}

export default App;
