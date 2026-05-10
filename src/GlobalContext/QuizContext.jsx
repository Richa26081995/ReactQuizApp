import { createContext, useReducer } from "react";
import question from "./data.js";
import shuffleAnswers from "../Components/shuffleAnswers.jsx";
const initialState = {
  currentQuestionIndex: 0,
  question,
  showResult: false,
  answers: shuffleAnswers(question[0]),
  currentAns:''
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
      };
    }
    case "RESTART": {
    return initialState;
  }
  case "SELECT_ANSWER":{
      return{
        ...state,
        currentAns:action.payload
      }
  }
  default:
  return state;
};
}

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = useReducer(reducer, initialState);
  console.log("state value", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
