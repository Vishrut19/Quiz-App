import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { GameStateContext } from "./helpers/Contexts";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

function App() {
  // Three states of the game are -> ['menu', 'playing','finished']
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState();

  return (
    <>
      <h1>Quiz App</h1>
      {/* This game state context provider helps us to add global variables*/}
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {/* If the game state is playing then it will render quiz component */}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen/>}
      </GameStateContext.Provider>
    </>
  );
}

export default App;
