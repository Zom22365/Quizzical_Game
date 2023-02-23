import React, { useState } from "react";

const Quizz = (props) => {
  const [selectAnswer, setSelectAnswer] = useState("");
  const handleChangeAnswer = (index, e) => {
    props.selectedAnswer.splice(index, 1, e);
    setSelectAnswer(e);
  };
  const listAnswers = props.answers.map((choice, index) => {
    const statusBtnAnswer = selectAnswer === choice ? "selected" : "answer";
    const resultBtnAnswer =
      choice === props.correct_answer ? props.statusResultCorrect : "";
    const resultBtnIncorrect =
      selectAnswer === choice && choice !== props.correct_answer
        ? props.statusResultIncorrect
        : "";
    return (
      <li
        key={index}
        onClick={() => handleChangeAnswer(props.id, choice)}
        className={`${statusBtnAnswer} ${resultBtnAnswer} ${resultBtnIncorrect}`}
      >
        {choice}
      </li>
    );
  });
  return (
    <>
      <div className="question__item">
        <h1 className="question">{props.question}</h1>
        <ul className="list__answer">{listAnswers}</ul>
      </div>
    </>
  );
};

export default Quizz;
