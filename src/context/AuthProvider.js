import { useState } from "react"
import authContext from "./authContext"
import React from 'react'

const AuthProvider = ({children})=>{
    const [isLoggedIn, setLoggedIn] = useState(false)
    return <authContext.Provider value={{isLoggedIn, setLoggedIn}} >
        {children}
    </authContext.Provider>
}

export default AuthProvider