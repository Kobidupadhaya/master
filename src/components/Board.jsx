import { useState } from 'react';
import Square from './square';

const Board = () => {
     const [Squares, setSquares] = useState(Array(9).fill(null));

     const handleSquareclick = clickedposition=>{
          setSquares((currentsquares)=>{

      return currentsquares.map((squareValue, position)=>{
          if(clickedposition == position){
               return 'x'
          }
          return squareValue;
          });
     });
     };
     const renderSquare =position =>{
          return(
               <Square
                value={Squares[position]}
                onClick={()=> handleSquareclick(position)}/>
          );
       };
     return( 
     <div className="board">

     <div className="board-row"> 
     {renderSquare(0)}
     {renderSquare(1)}
     {renderSquare(2)}
     </div>

     <div className="board-row" >
     {renderSquare(3)}
     {renderSquare(4)}
     {renderSquare(5)}
     </div>

     <div className="board-row"> 
     {renderSquare(6)}
     {renderSquare(7)}
     {renderSquare(8)}
     </div>
</div>
     );
};
export default Board;
