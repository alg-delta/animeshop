import React, { useContext } from "react";
import { GameContext } from "../GameContext";

export default function Start() {
  const { gameStatus, setGameStatus } = useContext(GameContext);
  const handleStart = () => {
    setGameStatus("game");
  };
  return (
    <div className="start">
      <button onClick={handleStart} type="button" className="vetal">
        Старт
      </button>
    </div>
  );
}
