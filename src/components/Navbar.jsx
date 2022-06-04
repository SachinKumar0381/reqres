import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const Navbar = () => {
  const {auth,setAuth,changeAuth}=useContext(LoginContext);

  return (
    <div>Navbar
      <button onClick={changeAuth}>{`${auth? "Login" : "Logout"}`}</button>
    </div>
  )
}

export default Navbar