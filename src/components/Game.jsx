import React, { useContext } from "react";
import daata from "../daata";
import { useState } from "react";
import { GameContext } from "../GameContext";

export default function Game() {
  const { gameStatus, setGameStatus, score, setScore } =
    useContext(GameContext);
  const [index, setIndex] = useState(0);
  const { id, question, variant1, variant2, variant3, variant4, answer } =
    daata[index];
  const [userVariant, setUserVariant] = useState("");
  console.log(userVariant);
  const next = () => {
    if (userVariant === answer) {
      setScore(score + 1);
    }
    setUserVariant("");
    setIndex(index + 1);
  };
  const finish = () => {
    if (userVariant === answer) {
      setScore(score + 1);
    }
    setUserVariant("");
    setGameStatus("end");
  };
  return (
    <div>
      <h2>{question}</h2>
      <button
        onClick={() => setUserVariant("variant1")}
        className={userVariant === "variant1" ? "variant activeTest" : "variant"}
        variant="warning"
      >
        {variant1}
      </button>
      <button
        onClick={() => setUserVariant("variant2")}
        type="button"
        className={userVariant === "variant2" ? "variant activeTest" : "variant"}
        variant="warning"
      >
        {variant2}
      </button>
      <br />
      <button
        onClick={() => setUserVariant("variant3")}
        type="button"
        className={userVariant === "variant3" ? "variant activeTest" : "variant"}
        variant="warning"
      >
        {variant3}
      </button>
      <button
        onClick={() => setUserVariant("variant4")}
        type="button"
        className={userVariant === "variant4" ? "variant activeTest" : "variant"}
        variant="warning"
      >
        {variant4}
      </button>
      <br />
      <br />
      {index !== daata.length - 1 ? (
        <button onClick={next} type="button" className="pensil">
          Наступне запитання
        </button>
      ) : (
        <button onClick={finish} type="button" className="pensil">
          Перейти до результатів
        </button>
      )}
    </div>
  );
}
