import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';
// import score from './score';

function App() {

  const [ currentRoll, setRoll ] = useState( null );

  function rollDice() {
    setRoll( [ Math.ceil( Math.random() * 6 ), Math.ceil( Math.random() * 6 ), Math.ceil( Math.random() * 6 ) ] );
  }

  return (
    <div className="app">
      { currentRoll && <Dice roll={ currentRoll } /> }
      <button disabled={ currentRoll } onClick={ rollDice }>Play</button>
      <button disabled={ !currentRoll } onClick={ () => setRoll( null ) }>Clear</button>
    </div>
  );

}

export default App;
