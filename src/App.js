import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {

  const [ currentRoll, setRoll ] = useState( [ null, null, null ] );

  function rollDice() {
    setRoll( [ Math.ceil( Math.random() * 6 ), Math.ceil( Math.random() * 6 ), Math.ceil( Math.random() * 6 ) ] );
  }

  return (
    <div className="app">
      {/* <Die number={ Math.ceil( Math.random() * 6 ) } /> */}
      { currentRoll[ 0 ] && <Dice roll={ currentRoll } /> }
      <button onClick={ rollDice }>
        Roll
      </button>
    </div>
  );

}

export default App;
