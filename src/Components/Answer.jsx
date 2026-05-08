import React from 'react'

const Answer = ({ label }) => {
  return (
    <button className="answer-item" type="button">
      {label}
    </button>
  )
}

export default Answer
