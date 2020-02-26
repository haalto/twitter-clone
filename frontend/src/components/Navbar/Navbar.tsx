import React, { CSSProperties } from 'react'
import { useHistory } from 'react-router-dom'
import Radium from 'radium'

interface Props {
  handleLogout: () => void
}

const Navbar: React.FC<Props> = ({ handleLogout }) => {

  const history = useHistory()
  const goToMain = () => history.push('/')

  return (
    <nav style={styleNavbar}>
      <div onClick={goToMain} style={logoStyle}><span key="logo" style={linkStyle}>Home</span></div>
      <div style={logOutStyle} onClick={handleLogout}><span  key="logout" style={linkStyle}>Logout</span></div>
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

const linkStyle: any = {
  ':hover': {
		borderBottom: '1px solid black',
		cursor: 'pointer'
	}
}

export default Radium(Navbar)