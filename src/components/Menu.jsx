import "../App.css";
import React, { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

const Menu = () => {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext); //Here we are importing the gamestate context and putting the value to it.

  const startGame = () => {
    setGameState("playing");
  };

  return (
    <div className="Menu">
      <label>Enter Your Name : {userName}</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={startGame}>Start Quiz</button>
    </div>
  );
};

export default Menu;
