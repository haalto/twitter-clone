import React from 'react'

interface Props {
  handleLogout: () => void
}

const Navbar: React.FC<Props> = ({ handleLogout }) => {
  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar