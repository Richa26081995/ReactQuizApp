import React from "react";
import "../css/Quiz.css"

const Answer = ({ ansText, onSelectAnswer, correctAnswer, currentAnswer }) => {
  const isCorrectAnswer = currentAnswer && ansText === correctAnswer;
  const isWrongAnswer = currentAnswer && ansText === currentAnswer && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disableClass = currentAnswer ? "disable-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disableClass}`}
      onClick={() => onSelectAnswer(ansText)}
    >
      <button className="answer-item" type="button">
        {ansText}
      </button>
    </div>
  );
};

export default Answer;
