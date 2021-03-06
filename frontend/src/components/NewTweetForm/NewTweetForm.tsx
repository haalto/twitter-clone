import React, { CSSProperties } from 'react'

interface Props {
  newTweetInput: any
  handleNewTweet: any
  handleSubmit: any
}

const NewTweetForm: React.FC<Props> = ({ newTweetInput, handleSubmit, handleNewTweet }) => {
  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1>Send a new tweet!</h1>
        <textarea    
          value={newTweetInput}
          style={textFieldStyle}
          onChange={(e) => handleNewTweet(e.target.value)}
        >     
        </textarea>
        <button style={sendButtonStyle} type="submit">SEND</button>
      </form>
    </div>
  )
}

const formStyle: CSSProperties = {
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '20vh',
  marginRight: '20vh'
}

const textFieldStyle: CSSProperties = {
  width: '100%',
  height: '20vh',
  resize: 'none',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '5px 5px 2px rgba(60,60,60, 0.3)',
  border: 'none',
  margin: '5vh',
  fontSize: '1.2em',
  fontFamily: 'VT323, monospace'
}

const sendButtonStyle: CSSProperties = {
  color: 'black',
  textDecoration: 'none',
  background: 'white',
  padding: '5px',
  borderRadius: '20px',
  display: 'inline-block',
  border: 'none',
  transition: 'all 0.4s ease 0s',
  //fontFamily: 'Shadows Into Light, cursive',
  fontFamily: 'VT323, monospace',
  boxShadow: '5px 5px 2px rgba(60,60,60, 0.3)',
  width: '20%'
 }

export default NewTweetForm