import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";

function App() {
  const [activePlayerSymbol, setActivePlayer] = useState("X");
  function handleActivePlayer() {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleActivePlayer}
          activePlayerSymbol={activePlayerSymbol}
        />
      </div>
    </main>
  );
}

export default App;
