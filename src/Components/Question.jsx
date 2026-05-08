import React from 'react'
import Answer from './Answer'

const Question = () => {
  return (
    <section className="question-card">
      <div className="question-text">What is the capital of France?</div>
      <div className="answer-grid">
        <Answer label="Paris" />
        <Answer label="Rome" />
        <Answer label="Madrid" />
        <Answer label="Berlin" />
      </div>
    </section>
  )
}

export default Question
