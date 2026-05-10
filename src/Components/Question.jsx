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
        {quizState.answers.map((ans,index)=>(
          <Answer ansText={ans} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Question;
