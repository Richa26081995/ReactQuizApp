import React from 'react'

const Answer = ({ ansText }) => {
  return (
    <button className="answer-item" type="button">
      {ansText}
    </button>
  )
}

export default Answer
