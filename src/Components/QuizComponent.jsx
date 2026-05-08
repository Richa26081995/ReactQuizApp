import React from 'react'
import Question from './Question'

const QuizComponent = () => {
  return (
    <main className="quiz-page">
      <section className="quiz-card">
        <header className="quiz-header">
          <span className="quiz-label">QUIZ TIME</span>
          <h1 className="quiz-title">Let's Play Quiz</h1>
          <p className="quiz-description">Pick the best answer and advance to the next question.</p>
        </header>

        <div className="quiz-progress">
          <span className="progress-step">Question</span>
          <span className="progress-count">1 / 10</span>
        </div>

        <Question />

        <div className="quiz-actions">
          <button className="button button-primary" type="button">
            Next Question
          </button>
        </div>
      </section>
    </main>
  )
}

export default QuizComponent
