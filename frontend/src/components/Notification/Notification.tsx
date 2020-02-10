import React from 'react'

interface Props {
  message: string | null
}

const Notification: React.FC<Props> = ({ message }) => {
  
  if (!message) {
    return null
  }
  
  return (
    <div>
      {message}
    </div>
  )
}

export default Notification