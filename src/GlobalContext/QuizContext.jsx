import { createContext, useReducer } from "react";
import question from "./data.js";
import shuffleAnswers from "../Components/shuffleAnswers.jsx";
const initialState = {
  currentQuestionIndex: 0,
  question,
  showResult: false,
  answers: shuffleAnswers(question[0]),
  currentAns: "",
  correctAnswersCount: 0,
};
const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "NEXT_QUES": {
      const showResult =
        state.currentQuestionIndex === state.question.length - 1;
      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResult
        ? []
        : shuffleAnswers(state.question[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        showResult,
        answers,
        currentAns: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload === state.question[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAns: action.payload,
        correctAnswersCount,
      };
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = useReducer(reducer, initialState);
  console.log("state value", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
