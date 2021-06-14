import { useState } from 'react';
import Board from './Board';
import './App.css';

const winnerPosition =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const App=()=> {
  const[turn, setTurn] = useState('X')
  const[squares, setSquares] = useState(Array(9).fill(null))
  const[winnerSquare, setWinnerSquares] = useState([])
  const[score, setScore] = useState({
    X:0,
    O:0
  })

  const checkforwinner = newSquares =>{
    for (let i = 0; i < winnerPosition.length; i++) {
     const[a,b,c]= winnerPosition[i]
     if(newSquares[a] && newSquares[a] === newSquares[b] &&  newSquares[a] === newSquares[c]){//si valor a es igual a valor b y si valor a es igual a valor c entonces tenemos un ganador
      endGame(newSquares[a],winnerPosition[i])
      return
     }      
    }

    if(newSquares.includes(null)){
      endGame(null,Array.from(Array(10).keys()))

      //empate
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X')
  }

const handleClick = square =>{
  let newSquares = [...squares]
  newSquares.splice(square, 1, turn)
  setSquares(newSquares)
  checkforwinner(newSquares)

}

const endGame = (result, winnerPosition) =>{
  setTurn(null)
  if(result !== null){
    setScore({
      ...score,
      [result]: score [result] + 1
    })
  }
}

  return (
    <div className="container">
     <Board turn={turn} squares={squares} onClick={handleClick}/>
    </div>
  );
}

export default App;
