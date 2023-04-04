import React, { useContext, useState } from "react";
import "../App.css";
import { Questions } from "../helpers/Questions";
import { GameStateContext } from "../helpers/Contexts";

const Quiz = () => {
  // This value comes from the provider from App.jsx
  const { gameState, setGameState, score, setScore } =
    useContext(GameStateContext);

  // This state represents that in which question we are currently in.
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  // This function consists of scoring system.
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  // This Function consists of finishQuiz where after clicking the button.
  // It sets the setGameState to 'finished' which ends the Game.
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      {/* This is used to render questions from the list of array of Questions */}
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        {/* This has a onclick event listener which states the chosen option */}
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {/* This part shows the next Question Button and finish Quiz button */}
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question &rarr;
        </button>
      )}
    </div>
  );
};

export default Quiz;
