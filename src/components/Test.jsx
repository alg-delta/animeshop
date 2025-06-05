
import Start from "./Start";
import Game from "./Game";
import End from "./End";
import { useState } from "react";
import { GameContext } from "../GameContext";

function App() {
  const [gameStatus, setGameStatus] = useState("start");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1 className="title">Тест</h1>
      <GameContext.Provider
        value={{ gameStatus, setGameStatus, score, setScore }}
      >
        {gameStatus === "start" && <Start />}
        {gameStatus === "game" && <Game />}
        {gameStatus === "end" && <End />}
      </GameContext.Provider>
    </div>
  );
}

export default App;
