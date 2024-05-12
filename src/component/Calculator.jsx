import React, { useState } from 'react';


function Calculator() {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (input === '0' && value !== 'C') {
      setInput(value);
    } else if (value === 'C') {
      setInput('0');
    } else {
      setInput(input + value);
    }
  };

  const showResult = () => {
    try {
        calcScreen.value = eval(calcScreen.value);
    } catch {
        calcScreen.value = "";
        calcScreen.placeholder = 'Invalid expression!!';
    } finally {
        console.log('finally block');
    }
}

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <form action="">
        <p>CASIO</p>
      </form>
      <input id='calcScreen' type="text" value={input} placeholder="0" readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button id='operator' onClick={() => handleClick('/')}>&#247;</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button id='operator' onClick={() => handleClick('*')}>&#215;</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button id='operator' onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('00')}>00</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button id='operator' onClick={() => handleClick('-')}>-</button>
        <button id='del' onClick={() => handleDelete()}>DEL</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button id='equal' onClick={() => showResult()}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
