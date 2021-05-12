import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';
// import score from './score';

function App() {

  const [ currentRoll, setRoll ] = useState( null );
  const [ gameState, setGameState ] = useState( {
    bet: 0,
    bankerScore: 0,
    playerScore: 0,
    playerTurn: false,
    info: "test"
  } );

  function setBet( changeEvent ) {
    const newGameState = { ...gameState };
    newGameState.bet = changeEvent.target.value;
    setGameState( newGameState );
  }

  function rollDice() {
    setRoll( [ Math.ceil( Math.random() * 6 ), Math.ceil( Math.random() * 6 ), Math.ceil( Math.random() * 6 ) ] );
  }

  return (
    <div className="app">
      {/* <Die number={ Math.ceil( Math.random() * 6 ) } /> */}
      { currentRoll && <Dice roll={ currentRoll } /> }
      <div className="game-info">{ gameState.info }</div>
      <div className="game-controls">
        <input type="number" value={ gameState.bet } onChange={ setBet } />
        <button onClick={ rollDice } disabled={ gameState.playerTurn }>Play</button>
      </div>
    </div>
  );

}

export default App;
