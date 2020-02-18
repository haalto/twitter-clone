import React from 'react'

interface Props {
  handleLogout: () => void
}

const Navbar: React.FC<Props> = ({ handleLogout }) => {
  return (
    <nav style={styleNavbar}>
      <span style={logoStyle}>"Twitter" :D</span>
      <button style={logOutStyle} onClick={handleLogout}>Logout</button>
    </nav>
  )
}

const styleNavbar = {
  display: "flex",
  justifyContent: 'space-evenly',
  height: "10vh",
  borderBottom: '1px solid rgba(245,245,245, 0.5)'
}

const logoStyle = {
  color: "black"
}

const logOutStyle = {
  color: 'black',
  textDecoration: 'none',
  background: 'none',
  borderRadius: '20px',
  border: 'none',
  transition: 'all 0.4s ease 0s',
  fontFamily: 'Shadows Into Light, cursive',
  width: '20%'
}

export default Navbar