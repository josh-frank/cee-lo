import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {

  const [ currentRoll, setRoll ] = useState( [ null, null ] );

  function rollDice() {
    setRoll( [ null, null ] );
    setRoll( [ Math.ceil( Math.random() * 6 ), Math.ceil( Math.random() * 6 ) ] );
  }

  return (
    <div className="app">
      {/* <Die number={ Math.ceil( Math.random() * 6 ) } /> */}
      { currentRoll[ 0 ] &&
        <div>
          <Die number={ currentRoll[ 0 ] } />
          <Die number={ currentRoll[ 1 ] } />
        </div>
      }
      <button onClick={ rollDice }>
        Roll
      </button>
    </div>
  );

}

export default App;
