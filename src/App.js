import { useState } from 'react'
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

function App() {

  // Input State
  const [input, setInput] = useState({ input: 0 });

  // onClick callback to display clicked character
  const addToInput = val => {
    let formula = (input.input + val).toString();
  
    // Prevent number beginning with consecutive zeros and prevent multiple/consecutive decimals in a number
    if (!/\.\./.test(formula) && !/\.[0-9]*\./.test(formula)) {

      if ((input.input == 0 && val == 0)) {
        setInput({ input: input.input })
      } else if ((input.input === 0 && val != 0)) {
        setInput({ input: val })
      } else {
        setInput({ input: input.input + val });
      }
    }
  };

  // onClick callback if '=' clicked
  const handleEqual = () => {
    let formula = (input.input).toString();
    let filtered = formula.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
    setInput({ input: math.evaluate(filtered) });
  };

  // Give id to button
  const giveId = val => {
    let id;
    switch (val) {
      case '0':
        id = 'zero';
        break;
      case '1':
        id = 'one';
        break;
      case '2':
        id = 'two';
        break;
      case '3':
        id = 'three';
        break;
      case '4':
        id = 'four';
        break;
      case '5':
        id = 'five';
        break;
      case '6':
        id = 'six';
        break;
      case '7':
        id = 'seven';
        break;
      case '8':
        id = 'eight';
        break;
      case '9':
        id = 'nine';
        break;
      case '+':
        id = 'add';
        break;
      case '-':
        id = 'subtract';
        break;
      case '*':
        id = 'multiply';
        break;
      case '/':
        id = 'divide';
        break;
      case '.':
        id = 'decimal';
        break;
      case 'AC':
        id = 'clear';
        break;
      case '=':
        id = 'equals';
        break;

      default:
        break;
    }
    return id;
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input.input} />
        <div className="row">
          <Button handleClick={addToInput} giveId={giveId}>7</Button>
          <Button handleClick={addToInput} giveId={giveId}>8</Button>
          <Button handleClick={addToInput} giveId={giveId}>9</Button>
          <Button handleClick={addToInput} giveId={giveId}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput} giveId={giveId}>4</Button>
          <Button handleClick={addToInput} giveId={giveId}>5</Button>
          <Button handleClick={addToInput} giveId={giveId}>6</Button>
          <Button handleClick={addToInput} giveId={giveId}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput} giveId={giveId}>1</Button>
          <Button handleClick={addToInput} giveId={giveId}>2</Button>
          <Button handleClick={addToInput} giveId={giveId}>3</Button>
          <Button handleClick={addToInput} giveId={giveId}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput} giveId={giveId}>.</Button>
          <Button handleClick={addToInput} giveId={giveId}>0</Button>
          <Button handleClick={() => handleEqual()} giveId={giveId}>=</Button>
          <Button handleClick={addToInput} giveId={giveId}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput({ input: 0 })} giveId={giveId}>AC</ClearButton>
        </div>
      </div>
    </div >
  );
}

export default App;