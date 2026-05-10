import React from 'react'
import "../css/Quiz.css"

const Result = ({quizState,dispatch}) => {
  const totalQuestions = quizState.question.length;
  const correctAnswers = quizState.correctAnswersCount;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (scorePercentage === 100) return "Perfect! Outstanding Performance! 🌟";
    if (scorePercentage >= 80) return "Excellent Work! You Mastered This! 🎉";
    if (scorePercentage >= 60) return "Good Job! Keep Practicing! 👏";
    if (scorePercentage >= 40) return "Not Bad! Try Again! 💪";
    return "Keep Learning! You'll Do Better Next Time! 📚";
  };

  const getScoreColor = () => {
    if (scorePercentage === 100) return "#2daa5d";
    if (scorePercentage >= 80) return "#8a4dff";
    if (scorePercentage >= 60) return "#4a90e2";
    if (scorePercentage >= 40) return "#f5a623";
    return "#d1434f";
  };

  return (
    <section className="result-container">
      <div className="result-card">
        <div className="result-header">
          <h1 className="result-title">Quiz Completed! 🎊</h1>
          <p className="result-subtitle">Here's how you performed</p>
        </div>

        <div className="score-section">
          <div className="score-circle" style={{borderColor: getScoreColor()}}>
            <div className="score-percentage" style={{color: getScoreColor()}}>
              {scorePercentage}%
            </div>
            <div className="score-label">Score</div>
          </div>
          
          <div className="score-details">
            <p className="score-text">{correctAnswers} out of {totalQuestions} Correct</p>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{
                  width: `${scorePercentage}%`,
                  backgroundColor: getScoreColor()
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="performance-message" style={{borderLeftColor: getScoreColor()}}>
          <p>{getPerformanceMessage()}</p>
        </div>

        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-label">Correct Answers</span>
            <span className="stat-value correct">{correctAnswers}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Wrong Answers</span>
            <span className="stat-value wrong">{totalQuestions - correctAnswers}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Questions</span>
            <span className="stat-value total">{totalQuestions}</span>
          </div>
        </div>

        <div className="result-actions">
          <button 
            className='button button-primary' 
            onClick={()=>dispatch({type:"RESTART"})}
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  )
}

export default Result
