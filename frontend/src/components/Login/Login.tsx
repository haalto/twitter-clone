import React from 'react';

interface Props {
  username: string,
  password: string
}

const Login: React.FC<Props> = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login