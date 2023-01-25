import { useState } from "react";
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={displayValue}/>
        </form>
        <div className="buttons">
          <button>Clear</button>
          <button>C</button>
          <button>/</button>
    
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
    
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
    
          <button>1</button>
          <button>2</button>
          <button>3</button>
    
          <button>+</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>    
  );
}

export default App;
