import React from "react";
import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver/GameOver";

import { WINNING_COMBINATIONS } from "./components/winning-combinations";
const PLAYERS = {
  X: "Player1",
  O: "Player2",
};
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [playerName, setPlayerName] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setWinner] = useState(false);
  // const [activePlayerSymbol, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);
  function dreiveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
    for (const turn of gameTurns) {
      if (Object.keys(turn).length > 0) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
      }
    }
    return gameBoard;
  }
  function deriveWinner(gameBoard, playerName) {
    let winnerSymbol;
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];
      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winnerSymbol = playerName[firstSquareSymbol];
      }
    }
    return winnerSymbol;
  }
  const gameBoard = dreiveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerName);
  const isDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) =>
    //   currentActivePlayer === "X" ? "O" : "X"
    // );

    setGameTurns((prevTurn) => {
      // const currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: activePlayer,
        },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }
  function handleReMatch() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayerName((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChange={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onReMatch={handleReMatch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
