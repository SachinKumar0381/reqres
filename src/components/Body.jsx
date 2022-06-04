import React, {useContext} from 'react'
import {LoginContext} from '../context/LoginContext'
import Detail from './Detail'

const Body = () => {
  const {auth} = useContext(LoginContext);
  
  return (
    <div>
      {auth && <Detail/>}
    </div>
  )
}

export default Body;