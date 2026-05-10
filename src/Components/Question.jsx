import React, { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../GlobalContext/QuizContext";


const Question = () => {
  const [quizState] = useContext(QuizContext);
  const currentQuestion = quizState.question[quizState.currentQuestionIndex].question
  return (
    <section className="question-card">
      <div className="question-text">
        {currentQuestion}
      </div>
      <div className="answer-grid">
        <Answer label="Paris" />
        <Answer label="Rome" />
        <Answer label="Madrid" />
        <Answer label="Berlin" />
      </div>
    </section>
  );
};

export default Question;
