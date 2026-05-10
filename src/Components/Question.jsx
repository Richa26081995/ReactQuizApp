import React, { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../GlobalContext/QuizContext";

const Question = () => {
  const [quizState,dispatch] = useContext(QuizContext);
  const currentQuestionData = quizState.question[quizState.currentQuestionIndex];
  const currentQuestion = currentQuestionData.question;
  return (
    <section className="question-card">
      <div className="question-text">{currentQuestion}</div>
      <div className="answer-grid">
        {quizState.answers.map((ans, index) => (
          <Answer
            ansText={ans}
            key={index}
            currentAnswer={quizState.currentAns}
            correctAnswer={currentQuestionData.correctAnswer}
            onSelectAnswer={(ansText) =>
              dispatch({ type: "SELECT_ANSWER", payload: ansText })
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Question;
