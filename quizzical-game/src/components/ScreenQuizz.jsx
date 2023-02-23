import React, { useEffect, useState } from "react";
import axios from "axios";
import Quizz from "./Quizz";

const ScreenQuizz = (props) => {
  const [listQuestions, setListQuestions] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [listCorrectAnswer, setListCorrectAnswer] = useState([]);
  const [statusResultIncorrect, setStatusResultIncorrect] = useState("");
  const [statusResultCorrect, setStatusResultCorrect] = useState("");
  const [countResultConrrect, setCountResultConrrect] = useState(0);
  let selectedAnswer = new Array(5);
  async function getData() {
    let res = await axios.get("https://opentdb.com/api.php?amount=5");
    let quizzs = res.data;
    setListQuestions(
      quizzs.results.map((question, index) => {
        let listAnswers = [];
        listAnswers.push(...question.incorrect_answers);
        listAnswers.push(question.correct_answer);
        listCorrectAnswer.push(question.correct_answer);
        return {
          ...question,
          id: index,
          selectedAnswers: "",
          displayResult: "none",
          answers: listAnswers,
        };
      })
    );
    setListCorrectAnswer(listCorrectAnswer);
  }

  useEffect(() => {
    getData();
  }, []);

  const playAgain = () => {
    props.handleGameStart();
  };

  const checkResult = () => {
    let count = 0;
    for (let i = 0; i < 5; i++) {
      if (selectedAnswer[i] === listCorrectAnswer[i]) count++;
    }
    setCountResultConrrect(count);
    setStatusResultIncorrect("incorrect");
    setStatusResultCorrect("correct");
    setGameOver(true);
  };

  const quizz = listQuestions.map((que) => {
    return (
      <Quizz
        key={que.id}
        {...que}
        selectedAnswer={selectedAnswer}
        statusResultIncorrect={statusResultIncorrect}
        statusResultCorrect={statusResultCorrect}
      ></Quizz>
    );
  });

  return (
    <div className="screen">
      <div className="content">
        {quizz}
        <div className="footer">
          <button className="btn" onClick={gameOver ? playAgain : checkResult}>
            {gameOver ? "playAgain" : "checkResult"}
          </button>
          {gameOver && <span>You conrrect: {countResultConrrect}/5</span>}
        </div>
      </div>
    </div>
  );
};
export default ScreenQuizz;
