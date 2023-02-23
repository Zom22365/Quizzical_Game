import React from "react";

const ScreenStart = (props) => {
  const startGame = () => {
    props.handleGameStart();
  };
  return (
    <div className="screen">
      <div className=" main">
        <h1 className="title">Quizzical</h1>
        <button className="btn" onClick={startGame}>
          Start quiz
        </button>
      </div>
    </div>
  );
};
export default ScreenStart;
