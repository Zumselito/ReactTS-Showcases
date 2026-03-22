import { useState } from 'react'

type SquareValue = string | null

interface SquareProps {
  value: SquareValue
  onSquareClick: () => void
}

interface BoardProps {
  xIsNext: boolean
  squares: SquareValue[]
  onPlay: (nextSquares: SquareValue[]) => void
}

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  )
}

function Board(props: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(props.squares) || props.squares[i]) {
      return
    }
    const nextSquares = props.squares.slice()
    if (props.xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    props.onPlay(nextSquares)
  }

  const winner = calculateWinner(props.squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (props.xIsNext ? 'X' : 'O')
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 3, 6].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => (
            <Square 
              key={row + col}
              value={props.squares[row + col]} 
              onSquareClick={() => handleClick(row + col)} 
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((_, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
