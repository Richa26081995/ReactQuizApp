import React from 'react'
import "../css/Quiz.css"

const Result = ({quizState,dispatch}) => {
  return (
    <div>
      <h1 className='quiz-title'>You Have Completed the Quiz</h1>
      <br />
      <p className='quiz-label'>4/{quizState.question.length} Questions Are Correct</p>
      <div>
        <button className='button button-primary' onClick={()=>dispatch({type:"RESTART"})}>Restart</button>
      </div>
    </div>
  )
}

export default Result
