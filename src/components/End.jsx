import React from "react";
import { useContext } from "react";
import { GameContext } from "../GameContext";

export default function End() {
  const { gameStatus, setGameStatus, score, setScore } =
    useContext(GameContext);
  const handleStart = () => {
    setGameStatus("start");
    setScore(0);
  };
  return (
    <div className="end">
      {score === 0 && <p>💀</p>}
      {score < 6 && <p>😭</p>}
      {score > 5 && score < 8 && <p>😅</p>}
      {score > 7 && score < 12 && <p>😀</p>}
      {score > 11 && score < 17 && <p>😋</p>}
      {score > 16 && score < 20 && <p>😎</p>}
      {score === 20 && <p>🥳🥳🥳</p>}
      <p className="score">
        Кількість вірних відповідей:
        {score}/20
      </p>
      <button onClick={handleStart} type="button" className="vetal">
        Рестарт
      </button>
    </div>
  );
}
