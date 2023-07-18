/* eslint-disable no-unused-vars */
import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './Winner';

function App(){
  const [history ,setHistory] = useState ([
    { squares: Array(9).fill(null),isXNext:false}
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  
 const winner  = calculateWinner(gamingBoard.squares);
  
  console.log({ historyLength : history.length,currentMove});
  
  const handleSquareClick = clickedPosition => {
    
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }
    setHistory(currentHistory=>{
      const isTraversing = currentMove +1 !== currentHistory.length;
       
      const lastGamingState = isTraversing
       ?currentHistory[currentMove]
      :history[history.length -1];

    const nextSquareState = lastGamingState.squares.map((squareValue, position) => {
      if (clickedPosition === position) {
        return lastGamingState.isXNext ? 'X' : '0';
      }
      return squareValue;
    });

    const base = isTraversing 
    ? currentHistory.slice(0, currentHistory.indexOf (lastGamingState) + 1) 
    : currentHistory;
    return currentHistory.concat({
      squares: nextSquareState,
      isXNext:!lastGamingState.isXNext})
  });
  setCurrentMove(move => move + 1 );
};
const  moveTo =(move) =>{
setCurrentMove(move);
};
  return (
    <div className="app">
     <StatusMessage Winner = {winner} gamingBoard={gamingBoard} />
     <Board
       squares={gamingBoard.squares}
       handleSquareClick ={handleSquareClick}/>
       <h2> current Game History</h2>
       <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
}

export default App;