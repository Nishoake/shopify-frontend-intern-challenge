import React from 'react'

const Notification = ({ completedList }) => {
  if (!completedList) {
    return null
  }
  return (
    <div className="notification">
      <h1>Completed List <span role="img" aria-label="confetti">🎊</span></h1>
    </div>
  )

}

export default Notification