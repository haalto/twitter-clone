import React, { CSSProperties } from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
  handleLogout: () => void
}

const Navbar: React.FC<Props> = ({ handleLogout }) => {

  const history = useHistory()
  const goToMain = () => history.push('/')

  return (
    <nav style={styleNavbar}>
      <div onClick={goToMain} style={logoStyle}>"Twitter" :D</div>
      <button style={logOutStyle} onClick={handleLogout}>Logout</button>
    </nav>
  )
}

const styleNavbar: CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}

const logoStyle: CSSProperties = {
  color: "black"
}

const logOutStyle: CSSProperties = {
  color: 'black',
  textDecoration: 'none',
  background: 'none',
  borderRadius: '20px',
  border: 'none',
  //fontFamily: 'Shadows Into Light, cursive',
  fontFamily: 'VT323, monospace',
  textAlign: 'left',
  fontSize: '1em'
}

export default Navbar