import { createContext, useReducer } from "react";
import question from "./data.js"
const initialState = {
  currentQuestionIndex: 0,
  question,
};
const reducer = (state, action) => {
  if (action.type === "NEXT_QUES") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = useReducer(reducer,initialState)
  console.log("state value",value)
  return (
    <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
  );
};
