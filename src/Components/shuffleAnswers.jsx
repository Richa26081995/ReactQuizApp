import React from 'react'

const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers.map((unshuffledAnswer)=>({
    sort: Math.random(),
    value: unshuffledAnswer
  }))
  .sort((a,b)=>a.sort - b.sort)
  .map((a)=>a.value)
}

export default shuffleAnswers
