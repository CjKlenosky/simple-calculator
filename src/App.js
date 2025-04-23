import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault() ;
    setResult((result) => result - Number(inputRef.current.value))
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value))
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const value = Number(inputRef.current.value)
    if (value === 0) {
      alert("Please enter a valid number.")
      return;
    }
    setResult((result) => result / value);
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div className="title-box"> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form aria-label="Simple calculator">
      <div className="result-row" role="status">
    <p className='result-label'>Result :</p>
    <p ref={resultRef} className="result-value">{result}</p>
  </div>

  <label htmlFor="numberInput" className="sr-only">Enter a number</label>
  <input
    id="numberInput"
    ref={inputRef}
    type="number"
    placeholder="Type a number"
    required
  />
        <div className="button-container">
        <button type="button" onClick={plus} aria-label="Add number">Add</button>
        <button type="button" onClick={minus}aria-label="Subtract number">Subtract</button>
        <button type="button" onClick={times}aria-label="Multiply number">Multiply</button>
        <button type="button" onClick={divide}aria-label="Divide number">Divide</button>
       <button type="button" onClick ={resetInput}aria-label="Reset Input">Reset Input</button>
       <button type="button" onClick={resetResult}aria-label="Reset Result">Reset Result</button>
       </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 

