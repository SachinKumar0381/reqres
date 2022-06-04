import React, { createContext, useState } from 'react'

export const LoginContext=createContext();


export const LoginProvider = ({children}) => {
    const [auth, setAuth] = useState(true);
    const changeAuth=()=>{
        if(auth) setAuth(false);
        else setAuth(true);
    }
  return (
    <LoginContext.Provider value={{auth,setAuth,changeAuth}}>{children}</LoginContext.Provider>
  )
}
