import React from 'react'

interface Props {
  tweetInputRef: any
  handleSubmit: any
}

const NewTweetForm: React.FC<Props> = ({ tweetInputRef, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="textarea"   
          ref={tweetInputRef}
        >     
        </input>
        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

export default NewTweetForm